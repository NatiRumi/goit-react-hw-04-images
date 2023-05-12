import React from 'react';

const ImageGalleryItem = (item) => {
    return(
        <li className="gallery-item" key={item.id}>
            <img src={item.webformatURL} alt={item.tags} />
        </li>
    )
}

export default ImageGalleryItem;