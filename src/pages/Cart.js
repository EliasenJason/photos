import React from "react"
import CartItem from "../components/CartItem"
import {PhotosContext} from "../context/PhotosContext"

function Cart() {

    const photos = React.useContext(PhotosContext)
    const cartItems = photos.allPhotos.filter(item => item.isInCart)

    return (
        <main className="cart-page">
            <h1>Check out</h1>
            {cartItems.map(item => <CartItem key={item.id} item={item}/>)}
            <p className="total-cost">Total: </p>
            <div className="order-button">
                <button>Place Order</button>
            </div>
        </main>
    )
}

export default Cart