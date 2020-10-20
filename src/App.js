import React, { Fragment, useState, useEffect } from 'react';
import Form from './components/Form';
import axios from 'axios';


function App() {

  //Definir state 
  const [searchLyrics, setSearchLyrics] = useState({});
  const [lyrics, setLyrics] = useState('');

  useEffect(() => {
   if(Object.keys(searchLyrics).length === 0) return; //forma de verificar si un objeto esta vacio
   const lyricsAPI = async () =>{
     const {artist, song} = searchLyrics;
     const url = `https://api.lyrics.ovh/v1/${artist}/${song}`;
  
     const result = await axios(url);
     setLyrics(result.data.lyrics);
   }
   lyricsAPI();
  }, [searchLyrics])
  return (
    <Fragment>
      <Form 
        setSearchLyrics = {setSearchLyrics}
      />

    </Fragment>
  );
}

export default App;
