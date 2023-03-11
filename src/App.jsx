import React from 'react';
import './App.css';
import AudioPlayer from './components/AudioPlayer'

const tracks = [
  {
    title: "File_1.mp3",
    src: "https://trickwish.com/Lake/File_1.mp3"
  },
  {
    title: "File_2.mp3",
    src: "https://trickwish.com/Lake/File_2.mp3"
  },
  {
    title: "File_3.mp3",
    src: "https://trickwish.com/Lake/File_3.mp3"
  },
  {
    title: "File_4..mp3",
    src: "https://trickwish.com/Lake/File_4..mp3"
  },
]

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <AudioPlayer tracks={tracks} />
      </header>
    </div>
  );
}

export default App;
