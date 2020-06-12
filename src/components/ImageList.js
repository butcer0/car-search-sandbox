import React from 'react';

const ImageList = props => {
    const images = props.images.map( ({ description, id, urls }) => {
        // make sure the key attribute is set for performance
        return <img key={id} src={urls.regular} alt={description}/>
    });

    return <div>{images}</div>
};

export default ImageList;