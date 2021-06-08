import React from 'react';
import './LoginForm.css';
import Zoom from 'react-reveal/Zoom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGooglePlusG } from '@fortawesome/free-brands-svg-icons';

const LoginForm = ({ handleBlur, handleSubmit, user, handleGoogleSignIn, newUser, setNewUser }) => {

    return (
        <div>
            <Zoom>
                <div className="login-form-style">
                    <h3 className="text-center mb-4">
                        {newUser ? 'Create an account' : 'Sign In'}
                    </h3>
                    <form onSubmit={handleSubmit}>
                        {
                            newUser &&
                            <div className="mb-3">
                                <label className="form-label">Your Name</label>
                                <input type="text" name="name" onBlur={handleBlur} className="form-control" placeholder="Enter your name" required />
                            </div>
                        }
                        <div className="mb-3">
                            <label className="form-label">Email address</label>
                            <input type="email" name="email" onBlur={handleBlur} className="form-control" placeholder="Enter your email" required />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Password</label>
                            <input type="password" name="password" onBlur={handleBlur} className="form-control" placeholder="Enter your password" required />
                        </div>
                        <button type="submit" className="btn btn-primary">{newUser ? 'Sign Up' : 'Login'}</button>
                    </form>
                    <p className="mt-3 mb-2 text-danger">{user.error}</p>
                    {
                        user.success && <p className="mt-3 mb-2 text-success">{newUser ? 'Account created' : 'User Logged In'} successfully</p>
                    }
                    <div className="mt-3 text-right">
                        {
                            newUser ? <p>Already have an account ? <span className="toggle-sign-in-login" onClick={() => setNewUser(!newUser)}>Login</span></p> :
                                <p>Don't have an account ? <span className="toggle-sign-in-login" onClick={() => setNewUser(!newUser)}>Sign Up</span></p>
                        }
                    </div>
                    <div>
                        <p className="text-center mt-2 mb-3 or">OR</p>
                        <button onClick={handleGoogleSignIn} className="btn btn-outline-primary"><FontAwesomeIcon icon={faGooglePlusG} /> Continue with Google</button>
                    </div>
                </div>
            </Zoom>
        </div>
    );
};

export default LoginForm;