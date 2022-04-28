import axios from 'axios';
import React, { useEffect, useState } from 'react';




function App() {

    const [songs, setSongs] = useState = ([]);

    useEffect(() => {
      getAllSongs();
    }, []) 

    async function getAllSongs() {
      let response = await axios.get("http://127.0.0.1:8000/api/music")
      setSongs(response.data)

    }

    async function newSong() {
      let response = await axios.post("http://127.0.0.1:8000/api/music")
      if (response.status === 201){
        await getAllSongs();
      }
    }

  return (
    <div>
        <h3>With the 3rd pick in the 2022 NFL Draft, the Houston Texans select: Derek Stingley Jr. Cornerback LSU!</h3>
        <h3>With the 9th pick in the 2022 NFL Draft, the Houston Texans select: Garrett Wilson, Wide Reciever, Ohio State!</h3>
      
        </div>
  );
}

export default App;
