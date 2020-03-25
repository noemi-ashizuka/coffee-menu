import React, { Component } from 'react';
import { CardList } from './components/card-list/card-list.component'
import { SearchBox } from './components/search-box/search-box.component'

import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      myCoffees: [],
      searchField: ''
    };
  }

  componentDidMount() {
    fetch('https://raw.githubusercontent.com/CoffeeJson/json/gh-pages/coffee.json')
    .then(response => response.json())
      // console.log(coffees)
    .then(coffees => this.setState({ myCoffees: coffees["coffees"] }));
    
  }

  handleChange = e => {
    this.setState({ searchField: e.target.value });
  };

  render() {
    const { myCoffees, searchField } = this.state;
    const filteredCoffees = myCoffees.filter(coffee => 
      coffee.name.toLowerCase().includes(searchField.toLowerCase())
      );
    
    return (
      <div className="App">
        <h1>Coffee Menu</h1>
        <SearchBox
          placeholder='search coffees'
          handleChange={ this.handleChange }
        />
        <CardList coffees={filteredCoffees} />
      </div>
    );
  }
}

export default App;
