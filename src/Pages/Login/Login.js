import React, { useEffect } from 'react';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import google from '../../assets/google (1).png';
import auth from '../../firebase.ini';
import Sppiner from '../components/Sppiner';


const Login = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const [signInWithGoogle, guser, gloading, gerror] = useSignInWithGoogle(auth);
    const [signInWithEmailAndPassword, user, loading, error] = useSignInWithEmailAndPassword(auth);

    const navigate = useNavigate();

    useEffect(() => {
        if (user || guser) {
            navigate('/home', { replace: true })
        }
    }, [user, guser]);

    let errorMessage;

    if (gloading || loading) {
        return <Sppiner></Sppiner>
    };

    if (gerror || error) {
        errorMessage = gerror?.message || error?.message;
    };
    

    const onSubmit = data => {
        signInWithEmailAndPassword(data.email, data.password)

    };

    return (
        <div className='flex justify-center items-center h-screen'>
            <div>
                <div className="card w-96 max-w-sm bg-base-200 shadow-xl">
                    <div className="card-body">
                        <h2 className="text-xl font-bold text-center text-primary">Login</h2>

                        <form onSubmit={handleSubmit(onSubmit)}>

                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text text-center">Email</span>
                                </label>
                                <input className="input input-bordered w-full max-w-xs"
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
                                {errors.email?.type === 'required' && <span className='text-red-500' ><small>Email is required</small></span>}
                                {errors.email?.type === 'pattern' && <span className='text-red-500'><small>{errors.email.message}</small></span>}
                            </div>

                            {/* password */}

                            <div className="form-control w-full max-w-sm">
                                <label className="label">
                                    <span className="label-text text-center">PassWord</span>
                                </label>
                                <input className="input input-bordered w-full max-w-xs"
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
                                {errors.password?.type === 'required' && <span className='text-red-500' ><small>password is required</small></span>}
                                {errors.password?.type === 'minLength' && <span className='text-red-500'><small>{errors.password.message}</small></span>}
                            </div>
                            <p className='text-red-500'><small>{errorMessage}</small></p>

                            <input type="submit" value="Login" className='btn max-w-md btn-active btn-ghost mt-3' />
                        </form>
                        <p><small>New to Here? </small><Link to='/register' className='text-primary font-bold'>Register</Link></p>



                        <div className="divider">OR</div>
                        <button onClick={() => signInWithGoogle()} className="btn max-w-md btn-active btn-ghost"> <img src={google} alt="" /> SignIn With Google</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;