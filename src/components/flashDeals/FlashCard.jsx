import React, { useState } from 'react'
import Slider from "react-slick";

const NextArrow = (props) => {
    const {onClick} = props
    return(
        <div className='control-btn' onClick={onClick}>
            <button className='next'>
                <i className=' fa-solid fa-arrow-right'></i>
            </button>
        </div>
    )
}
const PrevArrow = (props) => {
    const {onClick} = props
    return(
        <div className='control-btn' onClick={onClick}>
            <button className='prev'>
                <i className='fa-solid fa-arrow-left'></i>
            </button>
        </div>
    )
}

const FlashCard = ({productItems, addToCart }) => {
    const [count, setCount] = useState(0)
    const increment = ()=> {
        setCount(count + 1)
    }
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
      };  
      
  return (
    <>
    <Slider {...settings}>
    {Array.isArray(productItems) && productItems.map((productItems) => {
        return (
        <div className="box">
            <div className="product mtop">
                <div className="img">
                    <span className='discount'>{productItems.discount}% Off</span>
                    <img src={productItems.cover} alt=''/>
                    <div className="product-like">
                        <label>{count}</label> <br />
                        <i className='fa-regular fa-heart' onClick={increment}></i>
                    </div>
                </div>
                <div className="product-details">
                    <h3>{productItems.name}</h3>
                    <div className="rate">
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                    </div>
                    <div className="price">
                       <h4>{productItems.price} DH</h4> 
                       <button onClick={() => addToCart(productItems)}>
                            <i className='fa fa-plus'></i>
                       </button>
                    </div>
                </div>
            </div>
        </div>
    )
    })}
    </Slider>
    </>
  )
}

export default FlashCard