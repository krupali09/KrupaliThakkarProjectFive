import React, { Component } from 'react';
import axios from 'axios';

class App extends Component {

  constructor() {
    super();
    this.state = {
      gifs: [],
      loading: true
    };
  }

  componentDidMount() {
    this.performSearch();
  }

  performSearch = (query) => {
    console.log('please work');
    axios({
      method: 'GET',
      url: `https://api.giphy.com/v1/gifs/search`,
      dataResponse: 'json',
      params: {
        api_key: `dAuwo6dniKEMHLAGEmCjv6bYaWyVN5em`,
        q: 'query',
        limit: 6
      }
    }).then((response) => {
      this.setState({
        gifs: response.data.data,
        loading: false
      });
    })
  }

  render() {
    console.log('display data on page');
    return (
      <div>
        <h1>Show me some Gifs</h1>
        {
          this.state.gifs.map((giphy) => {
            return (
              <div key={giphy.id}>
                <h2>{giphy.title}</h2>
                <img src={giphy.images.downsized_large.url} alt={giphy.title} />
              </div>
            );
          })
        }
      </div>
    );
  }
}

export default App;