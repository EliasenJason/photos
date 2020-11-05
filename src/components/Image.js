import React from 'react'
import {PhotosContext} from '../context/PhotosContext'

function Image(props) {
    const [isHovered, setIsHovered] = React.useState(false)

    const {toggleFavorite} = React.useContext(PhotosContext)

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
            {isHovered && <i onClick={() => toggleFavorite(props.img.id)} className="ri-heart-line favorite"></i>}
            {isHovered && <i className="ri-add-circle-line cart"></i>}
        </div>
    )
}

export default Image