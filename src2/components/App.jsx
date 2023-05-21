import { useEffect, useState } from 'react';

import Button from 'components/LoadMore/Button';
import ImageGallery from './ImageGallery/ImageGallery';
import Loader from 'components/LoadMore/Loader';
import Notiflix from 'notiflix';
import React from 'react';
import Searchbar from './Searchbar/Searchbar';
import getArticles from 'api/api';

function App() {
  const [ searchText, setSearchText ] = useState('');
  const [ articles, setArticles ] = useState([]);
  const [ page, setPage ] = useState(1);
  const [ total, setTotal ] = useState(1);
  const [ loading, setLoading ] = useState(false);


  useEffect(() => {
    async function fetchArtikles() {
      setLoading(true)
      const response = await getArticles(searchText, page);
      setArticles(response.hits);
      setTotal(response.totalHits);
      setLoading(false);
    }

    if (searchText) {
      fetchArtikles();
    }
  }, [ searchText, page ]);


  const handleLoadMore = async () => {
    setPage(page + 1);
  };

  const handleSearch = request => {
    if (!request.trim()) {
      Notiflix.Notify.warning('Введіть значення для пошуку');
      return;
    }
    if (request.trim() !== searchText) {
      setPage(1);
      setTotal(0);
      setArticles([])
    }
    setSearchText(request.trim());
  };

  return (
    <>
      <Searchbar onSubmit={ handleSearch } />
      <ImageGallery articles={ articles } />
      { loading && <Loader /> }

      { total > 12 && page < Math.ceil(Number(total / 12)) && (
        <Button onClick={ handleLoadMore } />
      ) }
    </>
  );
}

export default App;
