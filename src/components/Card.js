import React from 'react';

const Card = ({ name, email, id }) => { //* Notice we use destructuring to replace the (props) parameter to props.name, props.email, props.id*/ {
  return (
    <div className="bg-light-blue dib br2 pa3 ma2 tc grow">
      <h1>Contact</h1>
      <img alt={`${name}`} src={`https://robohash.org/${id}?200x200`} />
      <div>
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </div>);
}

export default Card;