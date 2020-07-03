import React from 'react'
import { ReactComponent as CartImage } from '../../Assets/cartimage.svg' 
import './cart-image.style.scss'
import {ToggleCart} from '../../Redux/Cart/Cart.actions'
import {connect} from 'react-redux'

function CartLogo({ToggleCart, count}){
  
    return (
        <div className='cart-logo' onClick={()=>ToggleCart()}>
            <CartImage />
           
            <span className='count'>{count}</span>
        </div>
    )
}

const mapDispatchToProps = (dispatch)=>({
    ToggleCart: ()=>dispatch(ToggleCart())
})
const mapStateToProps = ({cart: {CartItems}})=> ({
    count: CartItems.reduce((a,b)=> a+b.quantity, 0)
}
     )
export default connect(mapStateToProps, mapDispatchToProps) (CartLogo);