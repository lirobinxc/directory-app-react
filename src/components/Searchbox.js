import React from 'react';

const Searchbox = ({ searchFxn }) => {
  return (
    <div className="tc ma3 pa2">
      <input
        className="bg-lightest-blue"
        type="search" 
        placeholder="Search robots"
        onChange={searchFxn}
      />
    </div>
  )
}

export default Searchbox;