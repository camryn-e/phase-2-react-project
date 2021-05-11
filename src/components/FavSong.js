import React from 'react';
 
const FavSong = ({match, songList}) => {
    const song = songList.find(elem => elem.id == match.params.songId)
  return (
    <div>
        <h1>Favorite Song</h1>
      <h3>{ song.songName }</h3>
      <p> artist: { song.artist } </p>
      <p> album: { song.album } </p>

    </div>
  );
}

export default FavSong;