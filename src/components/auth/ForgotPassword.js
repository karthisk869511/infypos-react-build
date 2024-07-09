import React from 'react';
import './Auth.css';
import logo from '../../assets/image/logo.png';

const ForgotPassword = () => {
    return (
        <div className="auth-container">
            <div className="icon-container">
                <img src={logo} alt="icon" className="icon"/>
            </div>
            <div className="auth-form">
                <h2>Forgot Passowrd</h2>
                <form>
                    <div className="form-group">
                        <label htmlFor="email">Email:<span className="required">* </span></label>
                        <input type="email" id="email" name="email" placeholder="Enter Email" required/>
                    </div>
                    <a href="/signin" className="back-to-signin">Back to Sign In</a>
                    <button type="submit" className="btn btn-reset">Send Password Reset link</button>
                </form>
            </div>
        </div>
    )
}
export default ForgotPassword;