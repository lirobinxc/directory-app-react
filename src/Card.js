import React, { Component } from 'react';

class Card extends Component {
  render() {
    return (
      <div className="bg-light-blue w5 dib br2 pa3 ma2 tc grow">
        <h1>Contact</h1>
        <img alt="Robin Li" src="https://robohash.org/test" />
        <div>
          <h2>Robin Li</h2>
          <p>lirobinxc@gmail.com</p>
        </div>
      </div>
    )
  }
}

export default Card;