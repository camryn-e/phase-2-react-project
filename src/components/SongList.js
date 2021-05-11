import React from 'react';
import { Link } from 'react-router-dom';

const SongList = ({ songList }) => {
  const renderSongs = songList.map(song =>
    <div>
    <Link key={song.id} to={`/song-list/${song.id}`}>{song.songName}</Link>
    <br/>
    </div>
  );

  return (
    <div>
      {renderSongs}
    </div>
  );
};

export default SongList;