import ImageGalleryItem from './ImageGalleryItem';
import PropTypes from 'prop-types';
import React from 'react';
import css from './GalleryStyle.module.css';
function ImageGallery({ articles }) {
  return (
    <>
      { articles.length > 0 ? (
        <ul className={ css.gallery }>
          { articles.map(item => (
            <ImageGalleryItem
              url={ item.webformatURL }
              alt={ item.tags }
              href={ item.largeImageURL }
              key={ item.id }
            />
          )) }
        </ul>
      ) : <div className={ css.notify }>
        За вашим запитом не знайдено жодного зображення
      </div>
      }
    </>
  );
}

export default ImageGallery;

ImageGallery.propTypes = {
  articles: PropTypes.array,
};
