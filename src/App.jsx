import React from 'react';
import Player from './Player.jsx'
import birdsData from './const/birdsData'
import { Component } from 'react';
function App() {
  return (
    <div className="App">
      <div className='wrapper'>
        <Header />
        <CurrentQuestion bird={birdsData[0][3]} />
        <BirdPointsBlock numbOfList={0}/>
        <BirdInfoBlock />
      </div>


    </div>
  );
}
const categories = ['Разминка', 'Воробьиные', 'Лесные птицы', 'Певчие птицы','Хищные птицы', 'Морские птицы']
function Header() {
  const catArr = [];
  for (let i = 0; i < categories.length; i++) {
    catArr.push(<div className='header__categoryPoint point'>{categories[i]}</div>)

  }
  return (
    <div className='header'>
      <div className='header__logo'></div>
      <div className='header__score'> Score: 0 </div>
      <div className='header__categories'>
        {catArr}
      </div>
    </div>)
}

class CurrentQuestion extends Component {
  constructor(props) {
    super(props)
    this.bird = props.bird;
  }
  render() {
    return (
      <div className='currentQuestion'>

        <div className='currentQuestion__img' style={{ background: 'url(' + this.bird.image + ') center/cover no-repeat' }}></div>
        <div className='currentQuestion__birdName'>{this.bird.name}</div>
        <Player trackSrc={this.bird.audio} />
      </div>)
  }
}
function BirdPointsBlock(props) {
  
  let birdPoints = [];
  for (let i = 0; i < birdsData[0].length; i++) {
    birdPoints.push(
      <div className='birdPointsBlock__point point'>{birdsData[props.numbOfList][i].name}</div>
    )
  }
  return (
    <div className='birdPointsBlock'>
      {birdPoints}
    </div>)
}
function BirdInfoBlock() {
  return (
    <div className='birdInfoBlock'>

    </div>)
}
export default App;
