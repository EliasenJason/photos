import React from 'react'

function Image(props) {
    return (
        <div className={`${props.className} image-container`}>
            <img className="image-grid" src={props.url} />
        </div>
    )
}

export default Image