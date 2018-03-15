
import React, { Component } from 'react';

class StarList extends Component {
    render() {
        return (
            <div>
                {this.props.starList.map(star => <p key={star.name}> The star {star.name} is {star.diameter} in diameter</p>)}
            </div> 
        );
    }
}


export default StarList;