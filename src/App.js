// import React, { Component } from "react";
// import Cards from "./components/Friends";
// import Nav from "./components/Nav";
// import Footer from "./components/Footer";
// import Title from "./components/Title";
// import Wrapper from "./components/Wrapper";
// import Characters from "./characters.jsx";

import React, { Component } from 'react';
import Footer from './components/Footer'
import Title from './components/Title'
import Navbar from './components/Nav'
import Wrapper from './components/Wrapper'
import Friends from './components/Friends'
import Characters from './characters.jsx'

class App extends Component {
    state = {
        Characters,
        clicked: [],
        score: 0,
        highest: 0,
        navMessage: "Click an image to begin!"
    }

    scoreChecker = id => {
        let character = this.state.clicked
        if(character.length !== 0 && character.includes(id)) {
            this.setState({
                clicked: [],
                score: 0,
                navMessage: "Incorrect guess!"
            })
        } else {
            character.push(id)
            this.setState({
                score: this.state.score += 1,
                navMessage: "Correct!",
                clicked: character
            })
            if (this.state.score > this.state.highest) {
                this.setState({
                    highest: this.state.score
                })
            }
        }
    }

    shuffleArray = array => {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            const tempStore = array[i];
            array[i] = array[j];
            array[j] = tempStore;
        }
        return array;
    }

    render() {
        const shuffledCharacters = this.shuffleArray(this.state.Characters)
        return (
            <Wrapper>
                <Navbar
                    navMessage={this.state.navMessage}
                    score={this.state.score}
                    highest={this.state.highest}
                />
                <Title />
                <div className="card-container"> 
                    {shuffledCharacters.map(character => (
                        <Friends
                            score={this.state.score}
                            highest={this.state.highest}
                            id={character.id}
                            key={character.key}
                            name={character.name}
                            image={character.image}
                            scoreChecker={this.scoreChecker}
                        />
                    ))}
                </div>
                <Footer />
            </Wrapper>
        )
    }
}

export default App