import React, { useEffect } from 'react'

const PhotosContext = React.createContext('test')

function PhotoContextProvider(props) {
    const [allPhotos, setAllPhotos] = React.useState([])

    const url = 'https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json'

    useEffect( () => {
        fetch(url)
            .then(res => res.json())
            .then(json => {
                setAllPhotos(json)
            })
    },[])

    return (
        <PhotosContext.Provider value={{allPhotos: allPhotos}}>
            {props.children}
        </PhotosContext.Provider>
    )
}

export {PhotosContext, PhotoContextProvider as Provider}
