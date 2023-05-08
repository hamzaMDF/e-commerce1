import React from 'react'
import './style.css'
import { Link } from 'react-router-dom';
import Footer from '../footer/Footer';

const Cart = ({cartItem, addToCart, decreaseQty}) => {
  const totalPrice = cartItem.reduce((price,item) => price + item.qty * item.price, 0)
  return (
    <>
        <section className='cart-items'>
          <div className="container d_flex">
            <div className="cart-details">
              {cartItem.length === 0 && <h1 className='no-items product'>No Items are add in Cart</h1>}
              
          {cartItem.map((item) =>{
            const productQty = item.price * item.qty
            return(
              <div className="cart-list product d_flex">
                <div className="img">
                  <img src={item.cover} alt="" />
                </div>
                <div className="cart-details">
                  <h3>{item.name}</h3>
                  <h4>
                    {item.price} * {item.qty}
                    <span>{productQty} DH</span>
                    </h4>
                </div>
                <div className="cart-items-function">
                  <div className="removeCart">
                 
                  </div>

                  <div className="cartControl d_flex">
                    <button className='incCart' onClick={() => addToCart(item)}>
                      <i className='fa-solid fa-plus'></i>
                    </button>
                    <button className='desCart' onClick={() => decreaseQty(item)}>
                      <i className='fa-solid fa-minus'></i>
                    </button>
                  </div>
                </div>
                
              </div>
            )
          })}
          </div>
          {cartItem.length > 0 &&(
          <div className="cart-total product" style={{height:' 33vh'}}>
            <h2>Cart Summary</h2>
            <div className="d_flex">
              <h4>Total Price : </h4>
              <h3>{totalPrice} DH</h3>
            </div>
            <div className='btn'>
              <Link to='/login'><input type="button" value="Buy Now" /></Link>
            </div>
          </div> )}
          <Footer hide={true} />
          </div>
         
        </section>
    </>
  )
}

export default Cart