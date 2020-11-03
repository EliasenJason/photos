import React from "react"
import {PhotosContext} from '../context/PhotosContext'
import Image from "../components/Image"
import {getClass} from "../utils"

function Photos(props) {
    const {allPhotos} = React.useContext(PhotosContext)

    return (
        <main className="photos">
            {allPhotos.map(item => <Image url={item.url}/>)}
            <h1>Images go here</h1>
            <h2></h2>
        </main>
    )
}

export default Photos