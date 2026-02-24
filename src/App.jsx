import { useState,useEffect,useRef } from 'react'
import { v4 as uuidv4 } from 'uuid';
import './App.css';

function App() {
  const [filePath,setFilePath] = useState(null);

  function handleInput(e){
    const files = e.target.files;
    const filesArray = Array.from(files)
    console.log(filesArray[0]);
    setFilePath(filesArray);
  }

  return (
      <>
        <h2>Choose a song...</h2>
        <input type='file' accept='audio/*' webkitdirectory='true' multiple onChange={handleInput}>
        </input>
        {
        
          filePath && filePath.map(file => {
            return <>
              <label>{file.name}</label>
              <audio controls src={URL.createObjectURL(file)} key={uuidv4()}>{file.name}</audio>
              <br></br>
            </>

          })

        }
      </>
  )
}

export default App;
