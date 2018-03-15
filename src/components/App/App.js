import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


class App extends Component {

constructor(props){
  super(props);

  this.state = {
     newStar: {
       name:'', 
       diameter:''
     },
    
    
    starList: [
       {name:'Gacrux',
        diameter: '19,617,314.03 km'},
        {name: 'Hadar',
          diameter: '13,158,098.34 km'},
        {name: 'Fomalhaut',
        diameter:'12,814,794.00 km'}
      ], 
    };

    // this.handleNameChange = this.handleNameChange.bind(this);
    // this.handleDiameterChange = this.handleDiameterChange.bind(this);
  this.handleClick = this.handleClick.bind(this);


}


// handleNameChange(event){
//     this.setState({
//       newStar: {
//         ...this.state.newStar,
//         name: event.target.value,
//       }
//     });
// }

//   handleDiameterChange(event) {
//     this.setState({
//       newStar: {
//         ...this.state.newStar,
//         diameter: event.target.value,
//       }
//     });
//   }
  
handleChangeFor = propertyName => event => {
  this.setState({
    newStar: {
      ...this.state.newStar,
      [propertyName]: event.target.value,
    }
  });

}

handleClick(){
  console.log('clicked!');
  this.setState({
    newStar: {
      name: '',
      diameter: ''
    },
    starList: [...this.state.starList, this.state.newStar],
  })
  
  
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

  
    //const starListItemArray = this.state.starList.map( star => <p key={star}> {star.name} is {star.diameter} in diameter</p> );

    return (

    
      <div className="App">
        <input value={this.state.newStar.name} onChange={this.handleChangeFor('name')} />
        <input value={this.state.newStar.diameter} onChange={this.handleChangeFor('diameter')} />
        <button onClick={this.handleClick}>Submit</button>
        <div>
          <p>The star {this.state.newStar.name} is {this.state.newStar.diameter} in diameter</p>
          {this.state.starList.map( star => <p key={star.name}> The star {star.name} is {star.diameter} in diameter</p>)}
        </div>
      </div>
    );
  }
}

export default App;
