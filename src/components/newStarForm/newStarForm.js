import React, { Component } from 'react';

class NewStarForm extends Component {
    render() {
        return (
            <div>
                <form onSubmit={this.props.handleSubmit}>
                    <input value={this.props.newStar.name} onChange={this.props.handleChangeFor('name')} />
                    <input value={this.props.newStar.diameter} onChange={this.props.handleChangeFor('diameter')} />
                    <input type="submit" value="Submit New Star" />
                </form>
            </div>    
        );
    }
}

export default NewStarForm;