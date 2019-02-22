import React, { Component } from 'react';

class Title extends Component {
    render() {
        return(
            <header className="header">
                <h1>React memory game</h1>
                <h2>Don'y click the same image twice and you'll win!</h2>
            </header>
        )
    }
}

export default Title