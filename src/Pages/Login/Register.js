import React from 'react';

import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import google from '../../assets/google (1).png';

const Register = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <div className='flex justify-center items-center h-screen'>
            <div>
                <div class="card max-w-md bg-base-200 shadow-xl">
                    <div class="card-body">
                        <h2 class="text-xl font-bold text-center text-primary">Register</h2>

                        <form onSubmit={handleSubmit(onSubmit)}>

                            <div class="form-control w-full max-w-xs">
                                <label class="label">
                                    <span class="label-text text-center">Email</span>
                                </label>
                                <input class="input input-bordered w-full max-w-xs"
                                    type="email"
                                    placeholder="email"
                                    {...register("email", {
                                        required: true,
                                        pattern: {
                                            value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                                            message: "invalid Email"
                                        }
                                    })}
                                />
                                {errors.email?.type === 'required' && <span className='text-red-500' >Email is required</span>}
                                {errors.email?.type === 'pattern' && <span className='text-red-500'>{errors.email.message}</span>}
                            </div>

                            {/* password */}

                            <div class="form-control w-full max-w-sm">
                                <label class="label">
                                    <span class="label-text text-center">PassWord</span>
                                </label>
                                <input class="input input-bordered w-full max-w-xs"
                                    type="password"
                                    placeholder="password"
                                    {...register("password", {
                                        required: true,
                                        minLength: {
                                            value: 6,
                                            message: 'must be contain 6 Character'
                                        }

                                    })}
                                />
                                {errors.password?.type === 'required' && <span className='text-red-500' >password is required</span>}
                                {errors.password?.type === 'minLength' && <span className='text-red-500'>{errors.password.message}</span>}
                            </div>


                            <input type="submit" value="Login" className='btn max-w-md btn-active btn-ghost mt-3' />
                        </form>
                        <p><small>New to Here? <Link to='/register' className='text-primary'>Register</Link></small></p>



                        <div class="divider">OR</div>
                        <button class="btn max-w-md btn-active btn-ghost"> <img src={google} alt="" /> SignIn With Google</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;