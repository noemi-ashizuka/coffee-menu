import React, { Component } from 'react';
import { CardList } from './components/card-list/card-list.component'
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      myCoffees: []
    };
  }

  componentDidMount() {
    fetch('https://raw.githubusercontent.com/CoffeeJson/json/gh-pages/coffee.json')
    .then(response => response.json())
      // console.log(coffees)
    .then(coffees => this.setState({ myCoffees: coffees["coffees"] }));
    
  }

  render() {
    return (
      <div className="App">
        <CardList coffees={this.state.myCoffees} />
      </div>
    );
  }
}

export default App;
