import React from 'react';

const Artists = (props) => {
  const { artists } = props;
  return (
    <div>
      <ul id='artistslist'>
        {
          artists.map(c => {
            return (
              <li key={c.id}>{c.name}</li>
            )
          })
        }
      </ul>
    </div>
  )
} 

export default Artists;