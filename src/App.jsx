import React, { Component } from 'react';
import birdsData from './const/birdsData';
import BirdPointsBlock from './BirdPointsBlock';
import Header from './Header';
import CurrentQuestion from './CurrentQuestion';
import BirdInfoBlock from './BirdInfoBlock'
import NextButton from './NextButton'
class App extends Component {
  constructor(props) {
    super(props)
    this.scorePoints = 5;
  }
  state = {
    activeCategory: 0,
    randomBird: Math.round(Math.random() * 5),
    passed: false,
    birdInfo: 0,
    score: 0
  }
  passed() {

    if (!this.state.passed) {
      this.setState({
        passed: true,
        score: this.state.score + this.scorePoints
      })
      this.scorePoints = 5;
      const sound = new Audio('./correct.mp3');
      sound.volume = 0.2;
      sound.play();
    }
  }
  scoreCounter = () => {
    if(!this.state.passed)this.scorePoints = this.scorePoints > 1 ? this.scorePoints - 1 : 1;
  }
  getBirdInfo(n) {
    this.setState({
      birdInfo: n
    })
  }
  gameEnd() {
    alert('Конец Игры')
  }
  nextCategory = () => {
    if (this.state.activeCategory < 5) {
      if (this.state.passed) {
        this.setState({
          randomBird: Math.round(Math.random() * 5),
          activeCategory: this.state.activeCategory + 1,
          passed: false,
          birdInfo: 0
        })
      }
    } else { this.gameEnd() }
  }
  render() {
    return (
      <div className="App" >
        <div className='wrapper'>
          <Header activeCategory={this.state.activeCategory + 1} score={this.state.score} />
          <CurrentQuestion bird={birdsData[this.state.activeCategory][this.state.randomBird]} passed={this.state.passed} />
          <BirdPointsBlock category={this.state.activeCategory} passed={() => { this.passed() }} birdList={birdsData[this.state.activeCategory]} answer={this.state.randomBird} getBirdInfo={(n) => { this.getBirdInfo(n) }} scoreCounter={() => { this.scoreCounter() }} />
          <BirdInfoBlock bird={birdsData[this.state.activeCategory][this.state.birdInfo - 1]} />
          <NextButton nextCategory={() => { this.nextCategory() }} />
        </div>


      </div>
    )
  }
}




export default App;
