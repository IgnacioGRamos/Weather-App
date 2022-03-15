import React from 'react';
import './Cards.css';

import Card from './Card.jsx';

export default function Cards({cities, onClose}) {
  return (
    <div className='cards'>
      {cities.length? cities.map(c => <Card
          id={c.id}
          key={c.id}
          max={c.max}
          min={c.min}
          name={c.name}
          img={c.img}
          onClose={() => onClose(c.id)}
        /> )
        : 
        <div className='data'>Busca cualquier ciudad del mundo que quieras visitar y obtene su información meteorológica</div>
      }
    </div>
  );
}
