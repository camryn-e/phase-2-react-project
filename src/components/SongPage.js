
import React, {Component} from 'react'
import FavSong from './FavSong'
// import SongForm from './SongForm'
import SongList from './SongList'
import {
    BrowserRouter as Router,
    Route
  } from 'react-router-dom';

const SongPage = ({ match, songList }) => (
    <div>
      <SongList songList={songList} />
      {/* <Route path={`/song-list/:songId`} render={routerProps => <FavSong {...routerProps} songList={songList}/> }/> */}
    </div>
  )
  
  export default SongPage