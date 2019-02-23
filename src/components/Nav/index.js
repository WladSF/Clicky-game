import React, { Component } from 'react';

class Navbar extends Component {
    render() {
        return(
            <nav className="navbar">
                <div>
                    <a className="logo" href="/">Reset</a>
                </div>
                <div className="navMessage">{this.props.navMessage}</div>
                <div className="score">
                    <p>Score: {this.props.score}</p>
                    <p>Highest Score: {this.props.highest}</p>
                </div>
            </nav>
        )
    }
}

export default Navbar