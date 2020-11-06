import React from 'react'

function CartItem(props) {
    return (
    <div className="cart-item">
        <i className="ri-delete-bin-line"></i>
        <img src={props.item.url} width="130px" />
        <p>$5.99</p>
    </div>
    )
}

export default CartItem