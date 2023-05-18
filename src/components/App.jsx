import React from 'react';
import { useState } from 'react';
import Notiflix from 'notiflix';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';

function App() {
  const [searchText, setSearchText] = useState('');

  const getSearcText = request => {
    if (request.trim() === '') {
      Notiflix.Notify.warning('Введіть значення для пошуку');
      return;
    }
    setSearchText(request.trim());
  };

  return (
    <>
      <Searchbar onSubmit={getSearcText} />
      <ImageGallery searchText={searchText} />
    </>
  );
}

export default App;
