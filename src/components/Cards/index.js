import React, { Component } from 'react';


class Cards extends Component {
    
    render() {
        console.log(this.props.image);
        return(
            <div 
                className="card" 
                id={this.props.id}
                onClick={() => this.props.scoreChecker(this.props.id)}
            >
                <div className="img-container">
                    <img src={this.props.image} alt={this.props.name}/>
                </div>
            </div>
        )
    }
}

export default Cards