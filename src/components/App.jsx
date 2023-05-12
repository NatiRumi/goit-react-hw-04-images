import React from 'react';
import { Component } from 'react';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';

class App extends Component {
  state = {
    searchText: ''
  }

  getSearcText = (searchText) => {
    this.setState({ searchText: searchText })
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
