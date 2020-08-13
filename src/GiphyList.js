import React, { Component } from 'react';
import GiphyForm from './GiphyForm';
import './App.css';

class GiphyList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            gifs: []
        }
    }

    clearGifs() {
        this.setState({
            gifs: []
        })
    }

    render() {
        return (
            <div>
                <GiphyForm handleSearch={this.props.handleSearch} removeGifs={this.clearGifs} />
            </div>
        );
    }
}

export default GiphyList;