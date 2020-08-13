//get a list of giphy from API and save them in state
//Print them on the page with .map
//Install Axios and form for getting user selection
//Run the constructor and set initial properties on the component
//get functions from GiphyList.js & GiphyForm.js
//Render the method after the constructor
//Render the images on the page



import React, { Component } from 'react';
import axios from 'axios';
import GiphyList from './GiphyList';
import './App.css';

class App extends Component {

  constructor() {
    super();
    this.state = {
      gif: []
    }
  }

  handleSearch = (event, userSelection) => {
    event.preventDefault()
    axios({
      url: `https://api.giphy.com/v1/gifs/search?`,
      method: `GET`,
      responseType: `JSON`,
      params: {
        api_key: `dAuwo6dniKEMHLAGEmCjv6bYaWyVN5em`,
        q: userSelection,
        limit: 6
      }
    }).then((response) => {
      console.log(response.data.data);
      this.setState({
        gif: response.data.data
      })
    });
  }

  removeGifs = (event) => {
    event.preventDefault()
    this.setState({
      gif: ''
    })
  }


  render() {
    return (
      <div className="wrapper">
        <h1>Search Your Favourite Gif</h1>
        <GiphyList handleSearch={this.handleSearch} />
        <div className="gifParent">
        
        {
          this.state.gif.map((giphy) => {
            return ( 
                <img src={giphy.images.downsized_large.url} alt={giphy.title} />
            );
          })
        }
        </div>
      </div>
    );
  }
}

export default App;