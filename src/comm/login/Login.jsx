import React from 'react'
import './style.css'
import { Link ,useHistory} from 'react-router-dom'

const Login = () => {
  const history = useHistory();

  const handleSubmit = (event) => {
    event.preventDefault();
    // perform login validation and other logic
    // ...
    // if login is successful, redirect to user account page
    history.push('/user-account');
  }
  return (
    <div className='login_p'>
        <div class="login-box">
          <h1>Login</h1>
            <form method='' onSubmit={handleSubmit}>
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

              <div className="pass">Forgot Password?</div>
              <input type="submit" value="Login" />

              <div className="signup_link">
                Not a member? <Link to="/register">Sing Up</Link>
              </div>
            </form>
        </div>
    </div>
  )
}
export default Login