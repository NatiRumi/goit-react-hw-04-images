import React from 'react';
import { Component } from 'react';
// import ImageGalleryItem from './ImageGalleryItem';
import GetArtikles from 'components/API/Api';
// import axios from "axios";
// import css from './GalleryStyle.module.css'

class ImageGallery extends Component {

    state = {
        articles: null,
        error: 'error'
    }

    componentDidUpdate(prevProps, prevState) {
        this.setState({articles: GetArtikles(this.props.searchText)});
        console.log(this.state.articles.hits)
    }

    render() {
        
        return(
        {this.state.articles !== null && (
            <ul className="gallery">
            {this.state.articles.hits.map((item) => (<ImageGalleryItem item={item}/>))}
            </ul>
        )}
        
     )
    }   
}

export default ImageGallery;