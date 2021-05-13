import React, {Component} from 'react'



export default class SongForm extends Component {
    
    state = {
        songName: '',
        artist: '',
        album: ''
    }

    handleSongNameChange = event => {
        this.setState({
          songName: event.target.value
        })
    }
      
    handleArtistChange = event => {
        this.setState({
          artist: event.target.value
        })
    }

    handleAlbumChange = event => {
        this.setState({
          album: event.target.value 
        })
    }

    handleSubmit = event => {
        event.preventDefault()
        fetch('http://localhost:3001/songs', {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(this.state)
        })
        .then(res => res.json())
        .then(resp => {
          this.props.addNewSong(resp)
        })
            .catch(function(error) {
                document.body.innerHTML = error.message;
              });
        
    }

    render() {
        return (
          <form onSubmit={event => this.handleSubmit(event)}>
            <label for="name">Song Name:</label><br/>
            <input
              name="name"
              type="text"
              onChange={event => this.handleSongNameChange(event)}
              value={this.state.songName}
            />
            <br/>
            <label for="artist">Artist:</label><br/>
            <input
              name="artist"
              type="text"
              onChange={event => this.handleArtistChange(event)}
              value={this.state.artist}
            />
            <br/>
            <label for="album">Album:</label><br/>
            <input
              name="album"
              type="text"
              onChange={event => this.handleAlbumChange(event)}
              value={this.state.album}
            />
            <div>
            <button type="submit">Add Song</button>
            </div>
          </form>
        )
      }


}


// songName, artist, album