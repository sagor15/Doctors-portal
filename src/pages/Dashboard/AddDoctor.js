import React from 'react';
import { useForm } from 'react-hook-form';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import Loading from '../../SharedPages/Loading';

const AddDoctor = () => {
    const { register, formState: { errors }, handleSubmit,reset } = useForm();
    const { data: services, isLoading } = useQuery('services', () => fetch('http://localhost:5000/service').then(res => res.json()));


    const imageStorageKey = 'ef0e1da410bc35ad04f1274f3e6775c8';
    const onSubmit = async data => {
      const  image = data.image[0];
      const formData = new FormData();
      formData.append('image', image);

      const url =`https://api.imgbb.com/1/upload?key=${imageStorageKey}`;
      fetch(url,{
          method:'POST',
          body: formData
      })
      .then(res=>res.json())
      .then(result=>{
        //   console.log('result' , result);
          if(result.success){
              const img = result.data.url;
              const doctor={
                  name:data.name,
                  email:data.email,
                  speacility: data.speacility,
                  img:img
              }
          
          // send to database
          fetch('http://localhost:5000/doctor',{
              method:'POST',
              headers:{
                  'content-type': 'application/json',
                  authoraization: `Bearer ${localStorage.getItem('accessToken')}`
              },
              body:JSON.stringify(doctor)
          })
          .then(res=>res.json())
          .then(inserted=>{
            //   console.log('doctor' , inserted);
              if(inserted.insertedId){
                  toast('add the doctor successfully');
                  reset();
              }
              else{
                  toast.error('failed to add a doctor')
              }
          })

        }
      })


    };
    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <form className='flex items-center flex-col py-5' onSubmit={handleSubmit(onSubmit)}>

            <div className="form-control w-full max-w-xs">
                <label className="label">
                    <span className="label-text">Name</span>
                </label>
                <input
                    type="text"
                    placeholder="Name"
                    className="input input-bordered w-full max-w-xs"
                    {...register("name", {
                        required: {
                            value: true,
                            message: "name is required"
                        },
                        minLength: {
                            value: 6,
                            message: 'must be 4 characters  '
                        }

                    })}

                />
                <label className="label">
                    {errors.name?.type === 'required' && <span className="label-text-alt text-red-500 text-1xl font-bold">{errors.name.message}</span>}
                    {errors.name?.type === 'minLength' && <span className="label-text-alt text-primary text-1xl font-bold">{errors.name.message}</span>}

                </label>


            </div>

            <div className="form-control w-full max-w-xs">
                <label className="label">
                    <span className="label-text">Email</span>
                </label>
                <input
                    type="email"
                    placeholder="Email"
                    className="input input-bordered w-full max-w-xs"
                    {...register("email", {
                        required: {
                            value: true,
                            message: "Eamil is required"
                        },
                        pattern: /[A-Za-z]{3}/,
                        message: "provide a valid email"

                    })}

                />
                <label className="label">
                    {errors.email?.type === 'required' && <span className="label-text-alt text-red-500 text-1xl font-bold">{errors.email.message}</span>}
                    {errors.email?.type === 'pattern' && <span className="label-text-alt text-primary text-1xl font-bold">{errors.email.message}</span>}

                </label>


            </div>

            <div className="form-control w-full max-w-xs py-3">
                <label className="label">
                    <span className="label-text">speacilaization</span>
                </label>

                <select {...register("speacility")} class="select select-bordered w-full max-w-xs">
                    {
                        services.map(service =>
                            <option
                                key={service._id}
                                value={service.name}
                            >{service.name}</option>
                        )
                    }
                </select>
            </div>

            <div className="form-control w-full max-w-xs">
                <label className="label">
                    <span className="label-text">Photo url</span>
                </label>
                <input
                    type="file"
                    placeholder="image"
                    className="input input-bordered w-full max-w-xs"
                    {...register("image", {
                        required: {
                            value: true,
                            message: "image is required"
                        }

                    })}

                />
                <label className="label">
                    {errors.image?.type === 'required' && <span className="label-text-alt text-red-500 text-1xl font-bold">{errors.image.message}</span>}
                    

                </label>


            </div>


            <input className='btn btn-secondary w-full max-w-xs' type="submit" value='Sign Up' />
        </form>
    );
};

export default AddDoctor;