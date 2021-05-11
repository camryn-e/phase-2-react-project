
import React from 'react'
import SongList from './SongList'

const SongPage = ({ match, songList }) => (
    <div>
      <SongList songList={songList} />
    </div>
  )
  
  export default SongPage