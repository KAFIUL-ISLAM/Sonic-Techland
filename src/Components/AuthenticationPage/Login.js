import React, { useEffect, useRef } from 'react';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import useSetAccessToken from '../../Hooks/useSetAccessToken';
import Footer from '../CommonComp/Footer';
import Header from '../CommonComp/Header';
import Processing from '../Spinner/Processing';

const Login = () => {

    const emailRef = useRef('');
    const passwordRef = useRef('');
    const navigate = useNavigate();
    const location = useLocation();
    const setAccessToken = useSetAccessToken();

    const [sendPasswordResetEmail] = useSendPasswordResetEmail(auth);
    const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    useEffect(() => {
        let from = location.state?.from?.pathname || "/";
        if (user || googleUser) {
            navigate(from, { replace: true })
        }
    })

    const handleLogin = async e => {
        e.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        await signInWithEmailAndPassword(email, password);
        await setAccessToken(email);
    }
    const handleGoogleSignIn = () => {
        signInWithGoogle();
    }

    const handleResetPassword = async () => {
        const email = emailRef.current.value;

        if (email) {
            await sendPasswordResetEmail(email);
            toast.success('Reset Password e-mail sent successfully');
        }
        else {
            toast.error('Please enter your Email');
        }
    }

    return (
        <div>
            <Header></Header>
            <div className='min-h-screen flex justify-center items-center my-8'>
                <div className="p-4 bg-white rounded-lg border border-gray-200 shadow-md sm:p-6 lg:p-8">
                    <form className="space-y-8" onSubmit={handleLogin}>
                        <div className='text-center '>
                            <h5 className="text-2xl font-medium text-gray-900 mb-4">Welcome back to Sonic Techland</h5>
                            <h2 className='text-3xl font-medium text-primary '>Sign in</h2>
                        </div>
                        <div>
                            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">Email</label>
                            <input type="email" ref={emailRef} name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Enter your email" required="" />
                        </div>
                        <div>
                            <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900">Password</label>
                            <input type="password" ref={passwordRef} name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" required="" />
                        </div>
                        <div className="flex items-start">
                            <div className="flex items-start">
                                <div className="flex items-center h-5">
                                    <input id="remember" type="checkbox" value="" className="w-4 h-4 bg-gray-50 rounded border border-gray-300 focus:ring-3 focus:ring-blue-300 cursor-pointer" required="" />
                                </div>
                                <label htmlFor="remember" className="ml-2 text-sm font-medium text-gray-900">Remember me</label>
                            </div>
                            <p onClick={handleResetPassword} className="ml-auto text-sm text-blue-700 hover:underline cursor-pointer">Lost Password?</p>
                        </div>
                        {
                            error && <div className='text-red-600'>
                                <p>Error: {error.message}</p>
                            </div>
                        }
                        {
                            googleError && <div className='text-red-600'>
                                <p>Error: {googleError.message}</p>
                            </div>
                        }
                        <button type="submit" className="w-full text-white bg-primary hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">{
                            loading ?
                                <Processing></Processing>
                                :
                                <p>Login to your account</p>
                        }</button>
                        <div className="text-sm font-medium text-gray-500 ">
                            Not registered? <Link to={"/register"} className="text-blue-700 hover:underline">Create account</Link>
                        </div>
                    </form>
                    <div className="divider">OR</div>
                    <button onClick={handleGoogleSignIn} type="button" className="text-white bg-blue-600 hover:bg-blue-400 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center justify-center dark:focus:ring-[#4285F4]/55 mr-2 mb-2 w-full">
                        {googleLoading ?
                            <span className='flex justify-center items-center'>
                                <svg className="mx-3 h-6 w-6 animate-spin text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                </svg>
                            </span>
                            :
                            <span className='flex items-center'>
                                <svg className="w-4 h-4 mr-2 -ml-1" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="google" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512"><path fill="currentColor" d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"></path></svg>
                                Sign in with Google</span>}
                    </button>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Login;