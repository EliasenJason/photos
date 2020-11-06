import React from 'react'
import {PhotosContext} from '../context/PhotosContext'
import PropTypes from 'prop-types'

function Image(props) {
    const [isHovered, setIsHovered] = React.useState(false)
    const {toggleFavorite, addToCart} = React.useContext(PhotosContext)

    return (
        <div 
            className={`${props.className} image-container`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        > 
            <img 
                className={`${"image-grid"}`}
                src={props.img.url}
                alt="its pretty" 
            />
            {props.img.isFavorite && <i onClick={() => toggleFavorite(props.img.id)} className="ri-heart-fill favorite"></i>}
            {props.img.isInCart && <i onClick={() => addToCart(props.img.id)} className="ri-shopping-cart-fill cart"></i>}
            {isHovered && <i onClick={() => toggleFavorite(props.img.id)} className="ri-heart-line favorite"></i>}
            {isHovered && !props.img.isInCart && <i onClick={() => addToCart(props.img.id)} className="ri-add-circle-line cart"></i>}
        </div>
    )
}

Image.propTypes = {
    img: PropTypes.shape({
        id: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired,
        isFavorite: PropTypes.bool,
        isInCart: PropTypes.bool
    }),
    className: PropTypes.string
}

export default Image