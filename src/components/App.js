import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import FavSong from './FavSong';
import SongForm from './SongForm';
import SongPage from './SongPage';
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
  
  render() {
    return (
      <Router>
        <div>
          <NavBar />
          <Route exact path="/" render={() => <div>Home</div>}/>
          <Route exact path="/song-list" render={routerProps => <SongPage {...routerProps} songList={this.state.songList}/>}/>
          <Route exact path="/song-form" component={SongForm}/>
          <Route path={`/song-list/:songId`} render={routerProps => <FavSong {...routerProps} songList={this.state.songList}/> }/>
        </div>
      </Router>
    );
  };
}
