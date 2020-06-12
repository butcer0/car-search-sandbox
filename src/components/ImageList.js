import React from 'react';
import './ImageList.css';
import ImageCard from "./ImageCard";

const ImageList = props => {
    const images = props.images.map( image => {
        // make sure the key attribute is set for performance
        // return <img key={id} src={urls.regular} alt={description}/>
        return <ImageCard key={image.id} image={image} />
    });

    return <div className='image-list'>{images}</div>
};

export default ImageList;