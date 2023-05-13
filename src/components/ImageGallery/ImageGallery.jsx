import React from 'react';
import { Component } from 'react';
// import Notiflix from 'notiflix';
import ImageGalleryItem from './ImageGalleryItem';
import GetArtikles from 'components/API/Api';
import css from './GalleryStyle.module.css';
import Button from 'components/LoadMore/Button';
// import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";



class ImageGallery extends Component {
  state = {
    articles: null,
    page: 1,
    per_page: 12,
    total: 1,
    error: 'error',
  };

//   let lightbox = new SimpleLightbox('.gallery a');


  async componentDidUpdate(prevProps, prevState) {
    const text = this.props.searchText.trim();
    if (prevProps.searchText !== text && text) {
      const response = await GetArtikles(text, this.state.page, this.state.per_page);
      this.setState({ articles: response.hits, total: response.totalHits });
    //   lightbox.refresh()
    //   console.log(response);
    }
  }

  async updateGallery() {
    await this.setState(prevState => ({page: prevState.page + 1}));
    const response = await GetArtikles(this.props.searchText.trim(), this.state.page, this.state.per_page);
    this.setState({ articles: response.hits })
  }

  render() {
    return (
        <>
        {this.state.articles !== null && (
          <ul className={css.gallery}>
            {this.state.articles.map(item => (
              <ImageGalleryItem
                url={item.webformatURL}
                alt={item.tags}
                href={item.largeImageURL}
                key={item.id}
              />
            ))}
          </ul>
        )}

        {(this.state.articles !== null && this.state.articles.length === 0) && (
            <div className={css.notify}>За вашим запитом не знайдено жодного зображення</div>
        )}

        {this.state.total > this.state.per_page &&(
            <Button onClick={this.updateGallery}/>
        )}
        </>
    )
  }
}

export default ImageGallery;
