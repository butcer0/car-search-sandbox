import React from 'react';
import './ImageList.css';

const ImageList = props => {
    const images = props.images.map( ({ description, id, urls }) => {
        // make sure the key attribute is set for performance
        return <img key={id} src={urls.regular} alt={description}/>
    });

    return <div className='image-list'>{images}</div>
};

export default ImageList;