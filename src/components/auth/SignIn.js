import React from 'react';
import './Auth.css';
import logo from '../../assets/image/logo.png';
import { useNavigate } from 'react-router-dom';


const SignIn = () => {
    const navigate=useNavigate()
    const handleSubmit=function(event){
        event.preventDefault();
        alert("login successfull!")
        navigate("/home")
    }

  
  return (
    <div className="auth-container">
        <div className="icon-container">
            <img src={logo} alt="icon" className='icon'/>
        </div>
        <div className='auth-form'>
            <h2>Sign In</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Email:<span className="required">*</span></label>
                    <input type="email" placeholder="karthi@gmail.com" required/>
                </div>
                <div className="form-group">
                    <label>Password:<span className='required'>*</span></label>
                    <input type="passowrd" placeholder="Password" required/>
                    <a href="/forgot-password" className="forgot-passoword">Forgot Password?</a>
                </div>
                <div className="form-group">
                    <button type="submit" className="btn btn-login">Login</button>
                </div>
            </form>
            <div className="auth-options">
                <button className="btn btn-admin">Admin</button>
                <button className="btn btn-sales">Sales</button>
                <button className="btn btn-purchases">Purchases</button>
            </div>
        </div>
    </div>
    
  )
}

export default SignIn
