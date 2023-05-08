import React from 'react'
import './style.css'
import { Link } from 'react-router-dom'

const Register = () => {
  return (
        <div className='login_p'>
            <div class="login-box">
            <span className='login-bx'><Link to='/login'><i className='fa-solid fa-arrow-left'></i></Link></span>
            <h1>Register</h1>
                <form method=''>
                    <div class="user-box">
                        <input type="text" name="username" required/>
                        <span></span>
                        <label>Username</label>
                    </div>

                    <div class="user-box">
                        <input type="email" name="email" required/>
                        <span></span>
                        <label>Email</label>
                    </div>

                    <div class="user-box">
                        <input type="password" name="password" required/>
                        <span></span>
                        <label>Password</label>
                    </div>

                    <div class="user-box">
                        <input type="password" name="password" required/>
                        <span></span>
                        <label>Confirm Password</label>
                    </div>

                    
                    <input type="submit" value="Register" />

                    <div className="signup_link">
                    </div>
                </form>
            </div>
        </div>
  )
}

export default Register