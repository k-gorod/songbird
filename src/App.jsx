import React from 'react';
import Player from './Player.jsx'
import birdsData from './const/birdsData'
import { Component , PureComponent} from 'react';
import BirdPointsBlock from './BirdPointsBlock'
class App extends Component {
  state = {
    activeCategory: 0,
    randomBird: 0,
    passed: false,
    birdInfo: 0
  }
  click(e) {

  }
  passed(a) {
    this.setState({
      passed: true
    })
    const sound = new Audio('./correct.mp3')
    sound.play();
  }
  getBirdInfo(n) {
    console.log('asd')
    this.setState({
      birdInfo: n
    })
  }
  componentWillMount() {
    this.randomAnswer();
  }
  nextCategory(){
    if(this.state.passed){
      this.setState({
        activeCategory:this.state.activeCategory+1,
        
        passed: false,
      })
    }
    this.randomAnswer();
  }
  randomAnswer(){
    this.state.randomBird = Math.floor(Math.random()*5)
  }
  render() {

    return (
      <div className="App" onClick={(e) => this.click(e)}>
        <div className='wrapper'>
          <Header activeCategory={this.state.activeCategory + 1} />
          <CurrentQuestion bird={birdsData[this.state.activeCategory][this.state.randomBird]} passed={this.state.passed} />
          <BirdPointsBlock category={this.state.activeCategory} passed={() => { this.passed() }} birdList={birdsData[this.state.activeCategory]} answer={this.state.randomBird} getBirdInfo={(n) => { this.getBirdInfo(n) }} />
          <BirdInfoBlock bird={birdsData[this.state.activeCategory][this.state.birdInfo - 1]} />
          <NextButton nextCategory= {()=>{this.nextCategory()}}/>
        </div>


      </div>
    )
  }
}
function Header(props) {
  const categories = ['Разминка', 'Воробьиные', 'Лесные птицы', 'Певчие птицы', 'Хищные птицы', 'Морские птицы']
  const catArr = [];
  for (let i = 0; i < categories.length; i++) {
    catArr.push(<li className={`header__categoryPoint point ${(i + 1) === props.activeCategory ? 'active' : ''}`} key={i}>
      {categories[i]}
    </li>)

  }
  return (
    <div className='header'>
      <div className='header__logo'></div>
      <div className='header__score'> Score: 0 </div>
      <ul className='header__categories'>
        {catArr}
      </ul>
    </div>)
}

class CurrentQuestion extends Component {
  constructor(props) {
    super(props)

  }
  render() {
    const bird = this.props.bird;
    let img = this.props.passed ?
      <div className='currentQuestion__img' style={{ background: 'url(' + bird.image + ') center/cover no-repeat' }}></div> :
      <div className='currentQuestion__img' style={{ background: 'white' }}></div>

    return (
      <div className='currentQuestion'>
        {img}
        <h2 className='currentQuestion__birdName'>{this.props.passed ? bird.name : '*******'}</h2>
        <Player trackSrc={bird.audio} />
      </div>)
  }
}
class BirdInfoBlock extends PureComponent {
  constructor(props) {
    super(props)
    this.bird = this.props.bird;
  }
  render() {
    let info;

    if ( this.bird != undefined ||  this.bird!=this.props.bird) {
    this.bird = this.props.bird;
    info = (
      <div className='birdInfoBlock'>
        <div className='birdInfoBlock__img' style={{ background: 'url(' +  this.bird.image + ') center/cover no-repeat' }}></div>
        <h2 className='birdInfoBlock__birdName'>{ this.bird.name}</h2>
        <p className='birdInfoBlock__birdLatName'>{ this.bird.species}</p>
        <Player trackSrc={ this.bird.audio} />
        <div className='birdInfoBlock__info'>{ this.bird.description}</div>
      </div>
    )
    } else {
      
      info = (
        <div className='birdInfoBlock'>
          <p className='birdInfoBlock__defaultInfo'>Послушайте плеер. <br /> Выберите птицу из списка.</p>

        </div>)
    }
    return info;
  }
}
class NextButton extends PureComponent{
  constructor(props){
    super(props)
  }
  clickHandler = () => {
    this.props.nextCategory();
  }
  render(){
    return (
      <div className='nextButton' onClick={this.clickHandler}>Next</div>
    )
  }
  
}
export default App;
