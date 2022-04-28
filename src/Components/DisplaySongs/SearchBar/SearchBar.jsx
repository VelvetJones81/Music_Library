import React, { useState } from 'react';



const SearchBar = (props) => {
    const [searchSong, setSearchSong] = useState("");

    function searchResults(event) {
        event.preventDefault();
        let response = props.songs.filter((song) => {
          if (songs.album.includes(songSearch)) {
            return true;
          } else if (songs.artist.includes(songSearch)) {
            return true;
          } else if (songs.title.includes(songSearch)) {
            return true;
          } else if (songs.genre.includes(songSearch)) {
            return true;
          } else if (songs.release_date.includes(songSearch)) {
            return true;
          }
        });
        props.setSongs(response);
        setSongSearch("")
      if (songSearch === "") {
        props.getAllSongs()
      }
}}