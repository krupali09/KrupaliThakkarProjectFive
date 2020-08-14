import React, { Component } from 'react';
import './App.css';

class Footer extends Component {
    render() {
        return (
            <footer>
                <div class="footer wrapper">
                <h3> &copy; 2020 Krupali Thakkar</h3>
                <h3>Created at <a target="_blank" class="footerLink" href="https://junocollege.com/">Juno College</a></h3>
                </div>
            </footer>           
        );
    }
}

export default Footer;