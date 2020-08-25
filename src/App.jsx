import React from 'react';
import Player from './Player.jsx'

function App() {
  return (
    <div className="App">
      <Header />
      <CurrentQuestion />
      <BirdPointsBlock />
      <BirdInfoBlock />

    </div>
  );
}
function Header() {
  return (
    <div className='header'>
      <div></div>
      <div></div>
      <div></div>
    </div>)
}
function BirdPointsBlock() {
  return (
    <div className='birdPointsBlock'>

    </div>)
}
function CurrentQuestion() {
  return (
    <div className='currentQuestion'>
      <Player trackSrc={'track01.mp3'} />
    </div>)
}
function BirdInfoBlock() {
  return (
    <div className='birdInfoBlock'>

    </div>)
}
export default App;
