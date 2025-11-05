import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { auth } from '../../firebase/firebase.config';
import { toast } from 'react-toastify';
import { FcGoogle } from 'react-icons/fc';
import { FaEye, FaEyeSlash } from 'react-icons/fa';



const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const Navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;
    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
         toast("login successful")
         Navigate("/");
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };

  const handleGoogleSignIn = () => {

    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((user) => {
        console.log(user.user)
        Navigate("/");

      })
      .catch((err) => {
        toast(err);
      })
  }

  const handleReset = (e)=>{
     Navigate("/password-reset",{
      state : {
        email : e.currentTarget.parentNode.parentNode.querySelector('input[name="email"]').value
      },
    });
   
  }
  return (
    <div>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col w-full">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <div className="card-body">
              <form onSubmit={handleLogin} >
                <fieldset className="fieldset">
                  <label className="label">Email</label>
                  <input type="email" className="input" name='email' placeholder="Email" />
                  <label className="label">Password</label>
                  <div className="relative">
                    <input 
                      type={showPassword ? "text" : "password"} 
                      className="input w-full" 
                      name='password' 
                      placeholder="Password" 
                    />
                    <button 
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                    >
                      {showPassword ? <FaEyeSlash size={20} /> : <FaEye size={20} />}
                    </button>
                  </div>
                  <div><a className="link link-hover" onClick={handleReset}>Forgot password?</a></div>
                  <button className="btn btn-neutral mt-4">Login</button>
                </fieldset>
              </form>
              <button
                onClick={handleGoogleSignIn}
                className="flex items-center justify-center gap-2 w-full sm:w-auto bg-white text-gray-800 border border-gray-300 rounded-lg px-4 py-2 hover:bg-gray-50 hover:shadow-lg transition-all duration-200 active:scale-[0.98]"
              >
                <FcGoogle size={22} />
                <span className="font-medium">Sign up with Google</span>
              </button>
              <p>Not Registered? <Link to='/signup'><span className='text-blue-700'>Sign Up Now</span></Link></p>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Login;