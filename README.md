# Favorite Song List

## Description
This React App allows users to store a list of their favorite songs in a JSON mock backend database. Users are able to fill out a controlled form and enter information about the song name, artist, and album the song appears on. After submitting the form, the data is added to the database via POST request. The user is then able to click on a link that will lead them to the list of the songs they have added. Then, the user has the ability to click on any of the song titles within the list and view the album and artist information on another page.


## Installation
This app can be installed by typing (or copy/pasting) the following into the command line: 
```git clone https://github.com/camryn-e/phase-2-react-project.git```

After cloning the repo, type:
```npm install -g npm```
to install node package manager.

## Running the App
First, type ```json-server --watch db.json --port 3001``` to start up the JSON server on your machine.
Second, type ```npm start``` to start the app.

You will now be able to use the app to create and add to a list of your favorite songs!

## Roadmap
Future improvements to this app could include:
  - Adding form inputs for the year released, song producers, record label, the users favorite lyrics, etc.
  - Preventing the user from adding duplicates to the song list
  - Allowing the user to filter songs by album/artist
