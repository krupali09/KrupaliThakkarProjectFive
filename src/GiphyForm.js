//Allow the users to select the images
//Allow users to clear the images from the page
//Pass the function back to App.js

import React, { Component } from 'react';
import './App.css';

class GiphyForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            search: ''
        }
    }

    handleChange = (event) => {
        this.setState({
            search: event.target.value
        });
    }

    render() {
        return (
            <div className="wrapper">
                <form className="form" onSubmit={(event) => { this.props.handleSearch(event, this.state.search) }}>
                    <input className="inputText" type="text" placeholder="Keep On Giffing" name="search" value={this.state.search} onChange={this.handleChange} autoComplete="off" />
                    <input type="submit" value="Search" />
                    <button className="button" onClick={this.props.handleSearch}>Clear All</button>
                </form>
            </div>
        );
    }
}

export default GiphyForm;