import React from "react"
import {PhotosContext} from '../context/PhotosContext'
import Image from "../components/Image"
import {getClass} from "../utils"

function Photos(props) {
    const {allPhotos} = React.useContext(PhotosContext)

    const photosHtml = allPhotos.map((item, index) => {
        return <Image img={item} key={item.id} className={getClass(index)} />
    })

    return (
        <main className="photos">
            {photosHtml}
            <h1>Images go here</h1>
        </main>
    )
}

export default Photos