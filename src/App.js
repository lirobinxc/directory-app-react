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
 
  onSearchChange = event => {
    this.setState = ({ searchfield: event.target.value });
    const filteredRobots = this.state.robots.filter(robot => {
      return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
    })
    console.log(filteredRobots);
  }

  render() {
    return (
      <>
        <h1 className="tc moon-gray bg-near-black pa3 ttu">Robofriends</h1>
        <Searchbox searchChange={this.onSearchChange}/>
        <CardList robots={ this.state.robots }/>
      </>
    )
  }
}

export default App;