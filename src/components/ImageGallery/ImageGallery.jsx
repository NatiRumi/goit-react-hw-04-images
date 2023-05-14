import React from 'react';
import { Component } from 'react';
import ImageGalleryItem from './ImageGalleryItem';
import GetArtikles from 'components/API/Api';
import css from './GalleryStyle.module.css';
import Button from 'components/LoadMore/Button';
import { nanoid } from 'nanoid';
import Loader from 'components/LoadMore/Loader';
import PropTypes from 'prop-types';

class ImageGallery extends Component {
  state = {
    articles: null,
    page: 1,
    per_page: 12,
    total: 1,
    loading: false,
  };

  async componentDidUpdate(prevProps, prevState) {
    const text = this.props.searchText.trim();
    if (prevProps.searchText !== text && text) {
      this.setState({ page: 1, loading: true });
      const response = await GetArtikles(
        text,
        this.state.page,
        this.state.per_page
      );
      this.setState({
        articles: response.hits,
        total: response.totalHits,
        loading: false,
      });
    }
  }

  updateGallery = async () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
    this.setState({ loading: true });
    const response = await GetArtikles(
      this.props.searchText.trim(),
      this.state.page,
      this.state.per_page
    );
    this.setState({ loading: false });
    this.setState(prevState => ({
      articles: [...prevState.articles, ...response.hits],
    }));
  };

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
                key={nanoid()}
              />
            ))}
          </ul>
        )}

        {this.state.articles !== null && this.state.articles.length === 0 && (
          <div className={css.notify}>
            За вашим запитом не знайдено жодного зображення
          </div>
        )}

        {this.state.loading && <Loader />}

        {this.state.total > this.state.per_page &&
          this.state.page <
            Math.ceil(Number(this.state.total / this.state.per_page)) && (
            <Button onClick={this.updateGallery} />
          )}
      </>
    );
  }
}

export default ImageGallery;

ImageGallery.propTypes = {
  searchText: PropTypes.string,
};
