import React from 'react';
import { useState, useEffect } from 'react';
import ImageGalleryItem from './ImageGalleryItem';
import GetArtikles from '../Api';
import css from './GalleryStyle.module.css';
import Button from 'components/LoadMore/Button';
import { nanoid } from 'nanoid';
import Loader from 'components/LoadMore/Loader';
import PropTypes from 'prop-types';

function ImageGallery({ searchText }) {
  const [articles, setArticles] = useState(null);
  const [page, setPage] = useState(1);
  const [per_page] = useState(12);
  const [total, setTotal] = useState(1);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchArtikles() {
      const response = await GetArtikles(searchText, page, per_page);
      setArticles(response.hits);
      setTotal(response.totalHits);
      setLoading(false);
    }

    if (searchText) {
      setPage(1);
      setLoading(true);
      fetchArtikles();
    }
  }, [searchText]);

  const updateGallery = async () => {

    setPage(prevState => {
      return page + 1;
    });

    setLoading(true);
    const response = await GetArtikles(searchText, page, per_page);
    setLoading(false);
    setArticles(prevState => {
      return [...articles, ...response.hits];
    });
  };

  return (
    <>
      {articles !== null && articles !== '' && (
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

      {articles !== null && articles.length === 0 && (
        <div className={css.notify}>
          За вашим запитом не знайдено жодного зображення
        </div>
      )}

      {loading && <Loader />}

      {total > per_page && page < Math.ceil(Number(total / per_page)) && (
        <Button onClick={updateGallery} />
      )}
    </>
  );
}

// class ImageGallery extends Component {

//   async componentDidUpdate(prevProps, prevState) {
//     const text = this.props.searchText.trim();
//     if (prevProps.searchText !== text && text) {
//       this.setState({ page: 1, loading: true });
//       const response = await GetArtikles(
//         text,
//         this.state.page,
//         this.state.per_page
//       );
//       this.setState({
//         articles: response.hits,
//         total: response.totalHits,
//         loading: false,
//       });
//     }
//   }

//   updateGallery = async () => {
//     this.setState(prevState => ({ page: prevState.page + 1 }));
//     this.setState({ loading: true });
//     const response = await GetArtikles(
//       this.props.searchText.trim(),
//       this.state.page,
//       this.state.per_page
//     );
//     this.setState({ loading: false });
//     this.setState(prevState => ({
//       articles: [...prevState.articles, ...response.hits],
//     }));
//   };

//   render() {
//     return (
//       <>
//         {this.state.articles !== null && (
//           <ul className={css.gallery}>
//             {this.state.articles.map(item => (
//               <ImageGalleryItem
//                 url={item.webformatURL}
//                 alt={item.tags}
//                 href={item.largeImageURL}
//                 key={nanoid()}
//               />
//             ))}
//           </ul>
//         )}

//         {this.state.articles !== null && this.state.articles.length === 0 && (
//           <div className={css.notify}>
//             За вашим запитом не знайдено жодного зображення
//           </div>
//         )}

//         {this.state.loading && <Loader />}

//         {this.state.total > this.state.per_page &&
//           this.state.page <
//             Math.ceil(Number(this.state.total / this.state.per_page)) && (
//             <Button onClick={this.updateGallery} />
//           )}
//       </>
//     );
//   }
// }

export default ImageGallery;

ImageGallery.propTypes = {
  searchText: PropTypes.string,
};
