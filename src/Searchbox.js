import React from 'react';

const Searchbox = ({ searchfield, searchChange }) => {
  return (
    <div className="tc ma3 pa2">
      <input
        className="bg-lightest-blue"
        type="search" 
        placeholder="Search robots"
        onChange={searchChange}
      />
    </div>
  )
}

export default Searchbox;