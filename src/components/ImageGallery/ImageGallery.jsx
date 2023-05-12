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

    async componentDidUpdate(prevProps, prevState) {
        const text = this.props.searchText.trim();
        if (prevProps.searchText !== text && text) {
            const response = await GetArtikles(text)
            await this.setState({articles: response});
            console.log(this.state.articles)
        }  
    }

    render() {
        
        return(
        {this.state.articles !== null && (
            <ul className="gallery">
                {this.state.articles.hits.map((item) => (<ImageGalleryItem item={item}/>))}
            </ul>
        )}
        // <div>ppp</div>
     )
    }   
}

export default ImageGallery;