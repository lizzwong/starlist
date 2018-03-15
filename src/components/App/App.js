import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


class App extends Component {

constructor(props){
  super(props);

  this.state = {
     starList: [
       {name:'Gacrux',
        diameter: '19,617,314.03 km'},
        {name: 'Hadar',
          diameter: '13,158,098.34 km'},
        {name: 'Fomalhaut',
        diameter:'12,814,794.00 km'}
      ], 
    };

    this.handleChange = this.handleChange.bind(this);

}

  handleChange(event) {
    console.log(event.target.value);

    const name = event.target.name;

    if (name === 'star') {
      this.setState({ user: { ...this.state.starList, star: event.target.value } });
    }

    else {
      console.log(event.target.value);
      this.setState({ user: { ...this.state.starList, diameter: event.target.value } });

    }

  }


  render() {

    //let starListItemArray = [];

    // for(let i = 0; i < this.state.starList.length; i++){
    //   starListItemArray.push(<li>{this.state.starList[i]}</li>);
    // }

    // this.state.starList.forEach(star =>{
    //   const newStar = (<li>{star}</li>);
    //   starListItemArray.push(newStar);
    // })

    // const starListItemArray = this.state.starList.map(star =>{
    //   const newStar = (<li>{star}</li>);
    //   return newStar;
    // })

    // const starListItemArray = this.state.starList.map(star =>{
    //   return (<li>{star}</li>);
    // })

    const starListItemArray = this.state.starList.map( star => <p key={star}> {star.name} is {star.diameter} in diameter</p> );

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <input name="star" onChange={this.handleChange} />
        <input name="diameter" onChange={this.handleChange} />
        <div>
          <p>{this.state.starList.name} is {this.state.starList.diameter} in diameter</p>
         {starListItemArray}
        </div>
      </div>
    );
  }
}

export default App;
