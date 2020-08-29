import React from 'react';
import Player from './Player.jsx'
import birdsData from './const/birdsData'
import { Component } from 'react';
import BirdPointsBlock from './BirdPointsBlock'
class App extends Component {
  state = {
    activeCategory: 2,
    randomBird: 3,
    passed: false
  }
  click(e){

  }
  test(a){
    this.a=a;
  }
  componentDidMount(){
    console.log(this.a)
  }
  render() {
    
    return (
      <div className="App" onClick={(e)=>this.click(e)}>
        <div className='wrapper'>
          <Header activeCategory={this.state.activeCategory}/>
          <CurrentQuestion bird={birdsData[this.state.activeCategory][this.state.randomBird]} passed={this.state.passed} />
          <BirdPointsBlock birdList={birdsData[this.state.activeCategory]} answer={this.state.randomBird} test= {(a)=>{this.test(a)}}/>
          <BirdInfoBlock />
        </div>


      </div>
    )
  }
}
function Header(props) {
  const categories = ['Разминка', 'Воробьиные', 'Лесные птицы', 'Певчие птицы', 'Хищные птицы', 'Морские птицы']
  const catArr = [];
  for (let i = 0; i < categories.length; i++) {
    catArr.push(<div className={`header__categoryPoint point ${(i+1)===props.activeCategory?'active':''}`} key={i}>{categories[i]}</div>)

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
    let img = this.props.passed ?
      <div className='currentQuestion__img' style={{ background: 'url(' + this.bird.image + ') center/cover no-repeat' }}></div> :
      <div className='currentQuestion__img' style={{ background: 'white' }}></div>

    return (
      <div className='currentQuestion'>
        {img}
        <h2 className='currentQuestion__birdName'>{this.props.passed ? this.bird.name : '*******'}</h2>
        <Player trackSrc={this.bird.audio} />
      </div>)
  }
}

function BirdInfoBlock(bird) {
  let info;
  if (bird.info) {
    info = (
      <div className='birdInfoBlock'>
        <div className='birdInfoBlock__img' style={{ background: 'url(' + bird.image + ') center/cover no-repeat' }}></div>
        <h2 className='birdInfoBlock__birdName'>{bird.name}</h2>
        <p className='birdInfoBlock__birdLatName'>{bird.species}</p>
        <Player trackSrc={bird.audio} />
        <div className='birdInfoBlock__info'>{bird.description}</div>
      </div>
    )
  } else {
    info = (<div className='birdInfoBlock'>
      Послушайте плеер. <br /> Выберите птицу из списка
    </div>)
  }
  return info;
}
export default App;
