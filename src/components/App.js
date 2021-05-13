import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import FavSong from './FavSong';
import SongForm from './SongForm';
import SongList from './SongList'
import NavBar from './NavBar'


export default class App extends Component {

  state = {
    songList: []
  }

  componentDidMount() {
    fetch('http://localhost:3001/songs')
      .then(response => response.json())
      .then(songData => this.setState({ songList: songData }))
  }

  addNewSong = (newSong) => {
    this.setState({ songList: [...this.state.songList, newSong]},() => console.log(this.state.songList))
  }
  
  render() {
    return (
      <Router>
        <div>
          <NavBar />
          <Route exact path="/" render={() => <h1>Home</h1>}/>
          <Route exact path="/song-list" render={routerProps => <SongList {...routerProps} songList={this.state.songList}/>}/>
          <Route exact path="/song-form" render={routerProps => <SongForm {...routerProps} addNewSong={this.addNewSong}/>}/>
          <Route path={`/song-list/:songId`} render={routerProps => <FavSong {...routerProps} songList={this.state.songList}/>}/>
        </div>
      </Router>
    );
  };
}
