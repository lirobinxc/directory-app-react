import React from 'react';
import CardList from '../components/CardList';
import Searchbox from '../components/Searchbox';
import Scroll from '../components/Scroll'
// import { robots } from './robots'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      robots: [],
      searchfield: ''
    }
  }
 
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({ robots: users }));
  }

  onSearchChange = event => {
    this.setState({ searchfield: event.target.value });  // Use this.setState to change the state object properties
  }

  render() {
    const {robots, searchfield} = this.state;  // Destructuring: robots = this.state.robots

    const filteredRobots = robots.filter(robot => {
      return robot.name.toLowerCase().includes(searchfield.toLowerCase())
    })

    let cardsSection;

    if (robots.length === 0) {
      cardsSection = <h1 className="tc moon-gray">Loading...</h1>;
    } else {
      cardsSection = <CardList robots={filteredRobots}/>;
    }
    return (
      <>
        <h1 className="tc moon-gray bggit-near-black pa3 ttu">Robofriends</h1>
        <Searchbox searchFxn={this.onSearchChange}/>
        <Scroll>
          {cardsSection}
        </Scroll>
      </>
    )
  }
}

export default App;