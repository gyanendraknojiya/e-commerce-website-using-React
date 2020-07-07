import React from 'react'
import './Checkout-item.style.scss'

function CheckOutItem({items}){
    return(
    <div className="checkout-items">
    <span className='checkout-item'>
    <img className="checkout-img" src={items.imageUrl} alt="item" />
    </span>
    <span className="checkout-item">{items.name}</span>
    <span className="checkout-item">{items.quantity}</span>
    <span className="checkout-item">${items.price}</span>
    <span className="checkout-item">&#10005;</span>
    </div>
    )
}

export default CheckOutItem;