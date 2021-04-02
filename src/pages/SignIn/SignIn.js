import React from 'react';
import { useForm } from 'react-hook-form';
import {Link} from 'react-router-dom';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import ButtonAuth from '../../components/ButtonAuth/ButtonAuth';
import './SignIn.css';

function SignIn() {
  const {register, handleSubmit, errors} = useForm();
  const onSubmit = (data) => {
    console.log(data);
  }
  return (
    <div className="signInPage">
      <div className="signIn">
              <h1 className="signIn__title">Login</h1>
              <form action="" onSubmit={handleSubmit(onSubmit)} className="signIn__form">
                <div className="signIn__inputGroup">
                  <input 
                    ref={register({ required: true})} 
                    type="email" 
                    name="email" 
                    className="signIn__input" 
                    placeholder="Email"
                    autoComplete="email"
                    />
                    
                  {errors.email && <p className="signIn__inputError">Your input is required</p>}
                </div>
                <div className="signIn__inputGroup">
                  <input 
                    ref={register({ required: true, minLength: 6})} 
                    type="password" 
                    name="password" 
                    className="signIn__input" 
                    placeholder="Password"
                    autoComplete="current-password" />
                  {errors.password?.type === "required" && <p className="signIn__inputError">Your input is required</p>}
                  {errors.password?.type === "minLength" && <p className="signIn__inputError">Your input limit min length 6</p>}
                </div>
                <div className="signIn__checkboxGroup">
                  <label htmlFor="Remember">
                  <input 
                    type="checkbox" 
                    ref={register} 
                    id="Remember" 
                    name="Remember" 
                    value={true} /> Remember Me
                  </label>
                  <Link className="signIn__switchLink" to="/forgetpassword">Forgot Password</Link>
                </div>
                <button type="submit" className="signIn__button">Login</button>
              </form>
              <p className="signIn__switch">
                Don’t have an account? 
                <Link className="signIn__switchLink" to="/signup"> Create an account</Link></p>
            </div>
            <div className="loginAuth">
              <div className="loginAuth__divider">Or</div>
              <ButtonAuth clicked={() => console.log('auth')} icon={faGoogle}>Continue with Google</ButtonAuth>
            </div>
    </div>
  )
}

export default SignIn
