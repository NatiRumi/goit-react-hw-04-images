import React from 'react';
import ImageGalleryItem from './ImageGalleryItem';
import css from './GalleryStyle.module.css';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';

function ImageGallery({ articles, total }) {
  return (
    <>
      {articles.length > 0 && (
        <ul className={css.gallery}>
          {articles.map(item => (
            <ImageGalleryItem
              url={item.webformatURL}
              alt={item.tags}
              href={item.largeImageURL}
              key={nanoid()}
            />
          ))}
        </ul>
      )}
      {total === 0 && (
        <div className={css.notify}>
          За вашим запитом не знайдено жодного зображення
        </div>
      )}
    </>
  );
}

export default ImageGallery;

ImageGallery.propTypes = {
  searchText: PropTypes.string,
};
