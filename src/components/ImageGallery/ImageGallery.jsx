import React from 'react';
import { Component } from 'react';
import ImageGalleryItem from './ImageGalleryItem';
// import GetArtikles from 'components/API/Api';
// import axios from "axios";
// import css from './GalleryStyle.module.css'

class ImageGallery extends Component {

    state = {
        articles: null,
        error: 'error'
    }

    componentDidUpdate(prevProps, prevState) {
        // console.log(this.props.searchText)
        // GetArtikles(this.props.searchText)
    }

    render() {
        return(
            <ul className="gallery">
                <ImageGalleryItem />
            </ul>
        )
    }
}

export default ImageGallery;