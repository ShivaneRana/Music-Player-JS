import { useState,useEffect,useRef } from 'react'
import './App.css';

function App() {
  const [audioURL,setAudioURL] = useState(null);
  const audioRef = useRef(null);

  function handleInput(e){
    const url = (e.target.files[0]);
    if(url){
      setAudioURL(URL.createObjectURL(url));
    }
  }

  return (
      <>
        <h2>Choose a song...</h2>
        <input type='file' accept='audio/*' onChange={handleInput}>
        </input>
          {audioURL && (
            <>
            <br></br>
            <audio ref={audioRef} controls src={audioURL}></audio>
            </>
          )}
      </>
  )
}

export default App;
