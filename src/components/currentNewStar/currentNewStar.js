import React, { Component } from 'react';

class CurrentNewStar extends Component {
render(){
    return (
        <div>
           HELLO THINGS 
            <p>The star {this.props.newStar.name} is {this.props.newStar.diameter} in diameter</p> 
        </div>
    );
    }
}

export default CurrentNewStar;