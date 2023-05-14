import React from 'react';
import { Component } from 'react';
import Notiflix from 'notiflix';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';

class App extends Component {
  state = {
    searchText: ''
  }

  getSearcText = (request) => {
    if (request.trim() === "") {
      Notiflix.Notify.warning("Введіть значення для пошуку");
      return;
    } 
    this.setState({ searchText: request });
  }


  render() {
    return(
      <>
        <Searchbar onSubmit={this.getSearcText}/>
        <ImageGallery searchText={this.state.searchText}/>
      </>
      
  )
}
}

export default App;
