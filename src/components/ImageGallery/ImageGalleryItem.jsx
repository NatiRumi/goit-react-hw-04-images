import React from 'react';
import { Component } from 'react';
import Modal from 'components/Modal/Modal';
import css from './GalleryStyle.module.css';
import PropTypes from 'prop-types';

class ImageGalleryItem extends Component {
  state = {
    showModal: false,
  };

  toggleModal = () => {
    this.setState(prevState => ({
      showModal: !prevState.showModal,
    }));
  };

  render() {
    return (
      <li className={css.galleryItem} onClick={this.toggleModal}>
        <img src={this.props.url} alt={this.props.alt} />
        {this.state.showModal && (
          <Modal
            onClose={this.toggleModal}
            href={this.props.href}
            alt={this.props.alt}
          />
        )}
      </li>
    );
  }
}

export default ImageGalleryItem;

ImageGalleryItem.propTypes = {
  url: PropTypes.string,
  alt: PropTypes.string,
  href: PropTypes.string,
};
