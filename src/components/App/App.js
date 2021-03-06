import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CurrentNewStar from '../currentNewStar/currentNewStar';
import StarList from '../starList/starList';
import NewStarForm from '../newStarForm/newStarForm'


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
  this.handleSubmit = this.handleSubmit.bind(this);


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

handleSubmit(event) {
  console.log('entered');
  event.preventDefault();
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
      {/* <form onSubmit={this.handleSubmit}>
        <input value={this.state.newStar.name} onChange={this.handleChangeFor('name')} />
        <input value={this.state.newStar.diameter} onChange={this.handleChangeFor('diameter')} />
        <input type="submit" value="Submit New Star"/>
      </form> */}

          <NewStarForm newStar={this.state.newStar} handleChangeFor={this.handleChangeFor}  
          handleSubmit={this.handleSubmit} />
          <CurrentNewStar newStar={this.state.newStar} />
          <StarList starList={this.state.starList} />
      </div>
    );
  }
}

export default App;
