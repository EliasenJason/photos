import React, { useEffect } from 'react'

const PhotosContext = React.createContext('test')


function PhotoContextProvider(props) {
    const [allPhotos, setAllPhotos] = React.useState([])

    const url = 'https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json'

    function toggleFavorite(id) {
        const updatedArr = allPhotos.map(photo => {
            if(photo.id === id) {
                console.log(`favoriting array item with id: ${id} to ${!photo.isFavorite}`)
                return {...photo, isFavorite: !photo.isFavorite}
            }
            return photo
        })
        setAllPhotos(updatedArr)
    }

    function addToCart(id) {
        const updatedArr = allPhotos.map(photo => {
            if(photo.id === id) {
                console.log(`adding to cart array item with id: ${id} to ${!photo.isInCart}`)
                return {...photo, isInCart: !photo.isInCart}
            }
            return photo
        })
        setAllPhotos(updatedArr)
    }

    useEffect( () => {
        fetch(url)
            .then(res => res.json())
            .then(json => {
                setAllPhotos(json.map(item => ({...item, isInCart: false})))
            })
    },[])

    return (
        <PhotosContext.Provider value={{allPhotos, toggleFavorite, addToCart}}>
            {props.children}
        </PhotosContext.Provider>
    )
}

export {PhotosContext, PhotoContextProvider as Provider}
