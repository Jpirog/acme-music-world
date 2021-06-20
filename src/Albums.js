import React from 'react';

const Albums = (props) => {
  const { albums } = props;
  return (
    <div>
      <ul id='albumslist'>
        {
          albums.map(c => {
            return(
              <li key={c.id}>{c.name}
                <ul className="abc"><li>{c.artist.name}</li></ul>
              </li>
            )
          })
        }
      </ul>
    </div>
  )
} 

export default Albums;
