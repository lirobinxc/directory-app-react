import React from 'react';
import Card from './Card';

const CardList = ({ robots }) =>
    <div className="tc">
      {
        robots.map((user, i) => {
          return (
            <Card
              key={i}
              id={user.id}
              name={user.name}
              email={user.email}
              />
          );
        })
      }
    </div>

export default CardList;