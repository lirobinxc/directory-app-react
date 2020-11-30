import React from 'react';
import CardList from './CardList';
import Searchbox from './Searchbox';
import { robots } from './robots'

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      robots: robots,
      searchfield: ''
    }
  }
 
  onSearchChange(event) {
    console.log(event.target.value);
  }

  render() {
    return (
      <>
        <h1 className="tc moon-gray bg-near-black pa3 ttu">Robofriends</h1>
        <Searchbox searchChange={this.onSearchChange}/>
        <CardList robots={this.state.robots}/>
      </>
    )
  }
}

export default App;