import React from 'react'
import {Link} from 'react-router-dom'
import {PhotosContext} from '../context/PhotosContext'

function Header() {
    const {allPhotos} = React.useContext(PhotosContext)
    

    console.log(allPhotos.some(photo => photo.isInCart))

    //console.log(allPhotos[0].isInCart)

    return (
        <header>
            <Link to="/"><h2>Pic Some</h2></Link>
            <Link to="/cart">
                {allPhotos.some(photo => photo.isInCart) 
                    ? <i className="ri-shopping-cart-fill ri-fw ri-2x"></i> 
                    : <i className="ri-shopping-cart-line ri-fw ri-2x"></i>
                }
            </Link>
        </header>
    )
}

export default Header
