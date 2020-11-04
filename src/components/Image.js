import React from 'react'

function Image(props) {
    const [isHovered, setIsHovered] = React.useState(false)

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
            {isHovered && <i className="ri-heart-line favorite"></i>}
            {isHovered && <i className="ri-add-circle-line cart"></i>}
        </div>
    )
}

export default Image