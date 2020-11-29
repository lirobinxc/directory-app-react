import React from 'react';
import CardList from './CardList';
import Searchbox from './Searchbox';
import { robots } from './robots'

const App = () => {
  return (
    <>
      <h1 className="tc moon-gray bg-near-black pa3 ttu">Robofriends</h1>
      <Searchbox />
      <div className="tc"><CardList robots={ robots }/></div>
    </>
  )
}

export default App;