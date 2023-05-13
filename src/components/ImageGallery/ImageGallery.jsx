import React from 'react';
import { Component } from 'react';
import Notiflix from 'notiflix';
import ImageGalleryItem from './ImageGalleryItem';
import GetArtikles from 'components/API/Api';
import css from './GalleryStyle.module.css';

class ImageGallery extends Component {
  state = {
    articles: null,
    error: 'error',
  };

  async componentDidUpdate(prevProps, prevState) {
    const text = this.props.searchText.trim();
    if (prevProps.searchText !== text && text) {
      const response = await GetArtikles(text);
      if (response.length === 0) {
        Notiflix.Notify.info('За вашим запитом не знайдено жодного зображення');
        return;
      }
      this.setState({ articles: response });
    //   console.log(this.state.articles);
    }
  }

  render() {
    return (
        <>
        {this.state.articles !== null &&(
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

        {/* {this.state.articles.length === 0 && (
            <p>За вашим запитом не знайдено жодного зображення</p>
        )} */}
        </>
    )
  }

//   render() {
//     if (this.state.articles !== null) return (
//         <ul className={css.gallery}>
//             {this.state.articles.map(item => (
//               <ImageGalleryItem
//                 url={item.webformatURL}
//                 alt={item.tags}
//                 href={item.largeImageURL}
//                 key={item.id}
//               />
//             ))}
//           </ul>
//     )

//     if (this.state.articles.length === 0) return(
//         <p>За вашим запитом не знайдено жодного зображення</p>
//     )
//   }
}

export default ImageGallery;
