import React from 'react';
import css from './GalleryStyle.module.css'

const ImageGalleryItem = ({url, alt, href}) => {
    // console.log();
    return(
        <a className={css.photoCard} href={href}>
            <li className={css.galleryItem}>
                <img src={url} alt={alt} />
            </li>
        </a>
        
    )
}

export default ImageGalleryItem;