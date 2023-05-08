import React from 'react'
import './style.css'

const Footer = ({hide}) => {
  return (
    <>
      <footer>
      {hide ? null : (
        <div className='container grid2'>
          <div className='box'>
            <h1>E-COMMERCE</h1>
            <p>Welcome to our e-commerce site, where you can shop from the comfort of your own home and discover a wide range of high-quality products at competitive prices. Our website is designed to provide a seamless shopping experience, with a user-friendly interface that makes it easy to find what you're looking for.</p>
            <div className='icon d_flex'>
              <div className='img d_flex'>
                <i className='fa-brands fa-google-play'></i>
                <span>Google Play</span>
              </div>
              <div className='img d_flex'>
                <i class='fa-brands fa-app-store-ios'></i>
                <span>App Store</span>
              </div>
            </div>
          </div>

          <div className='box'>
            <h2>About Us</h2>
            <ul>
              <li>Careers</li>
              <li>Our Stores</li>
              <li>Our Cares</li>
              <li>Terms & Conditions</li>
              <li>Privacy Policy</li>
            </ul>
          </div>
          <div className='box'>
            <h2>Customer Care</h2>
            <ul>
              <li>Help Center </li>
              <li>How to Buy </li>
              <li>Track Your Order </li>
              <li>Corporate & Bulk Purchasing </li>
              <li>Returns & Refunds </li>
            </ul>
          </div>
          <div className='box'>
            <h2>Contact Us</h2>
            <ul>
              <li>École supérieure de technologie de Casablanca</li>
              <li>Email: hamza.madiouf@gmail.com</li>
              <li>Phone: +212 696-800608</li>
            </ul>
          </div>
        </div>
        )}
      </footer>
    </>
  )
}

export default Footer