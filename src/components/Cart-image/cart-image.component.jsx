import React from 'react'
import { ReactComponent as CartImage } from '../../Assets/cartimage.svg' 
import './cart-image.style.scss'
import {ToggleCart} from '../../Redux/Cart/Cart.actions'
import {connect} from 'react-redux'

function CartLogo({ToggleCart}){
    return (
        <div className='cart-logo' onClick={ToggleCart}>
            <CartImage />
            <span className='count'>0</span>
        </div>
    )
}

const mapDispatchToProps = (dispatch)=>({
    ToggleCart: ()=>dispatch(ToggleCart())
})

export default connect(null, mapDispatchToProps) (CartLogo);