import React from 'react'
import './style.css'


const Contact = () => {


  return (
    <div className='contact_p'>
        <div class="contact-box">
          <h1>Contact Us</h1>
            <form method=''>
              <div class="user-box">
                <input type="text" name="text" required/>
                <span></span>
                <label>Username</label>
              </div>

              <div class="user-box">
                <input type="email" name="email" required/>
                <span></span>
                <label>Email</label>
              </div>

              <div class="user_box">
                <textarea cols="30" rows="10" style={{width:'100%'}}></textarea>
                <span></span>
                <label style={{color:'silver' ,width:'100%'}} className='mess'>Message</label>
              </div>
              
              <input type="submit" value="Send" />

              <div className="signup_link">
                    </div>
            </form>
        </div>
    </div>
  );
};

export default Contact;

