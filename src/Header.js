import React from 'react';

const Header = (props) => {
  const { artists, albums, changeView } = props;
  console.log('props', props);
  return (
    <div>
      <ul id='menu'>
        <li id="home" onClick={() => changeView('home')}>Home</li>
        <li id="artists" onClick={() => changeView('artists')}>Artists ({artists.length})</li>
        <li id="albums" onClick={() => changeView('albums')}>Albums ({albums.length})</li>
      </ul>
    </div>
  )
} 

export default Header;