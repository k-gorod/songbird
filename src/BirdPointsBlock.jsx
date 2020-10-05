import React, { PureComponent, Component } from 'react';



class BirdPointsBlock extends Component {
  render() {
    console.log()
    const category = this.props.category;
    let birdList = this.props.birdList.map((bird) => {
      return <Point
        passed={() => { this.props.passed() }}
        key={bird.id} id={bird.id} name={bird.name}
        stateOnClick={bird.id === this.props.answer + 1 ? 'green' : 'red'}
        getBirdInfo={(n) => { this.props.getBirdInfo(n) }}
        scoreCounter={() => { this.props.scoreCounter() }}
        
        category={category} />
    })
    return (
      <ul className='birdPointsBlock'>
        {birdList}
      </ul>)
  }

}
class Point extends PureComponent {
  constructor(props) {
    super(props)
    this.category = this.props.category;
  }
  state = {
    clicked: false
  }
  clickHandler = () => {
    this.setState(
      { clicked: true }
    )
    if (this.props.stateOnClick === 'green') {
      this.props.passed();
    }else{
      this.props.scoreCounter();
    }
     
    
    this.props.getBirdInfo(this.props.id)
  }
  componentDidUpdate() {
    
    if (this.props.category !== this.category) {
      this.category = this.props.category;
     this.setState({
       clicked:false
     })
    }
  }
  render() {
    const name = this.props.name;
    const stateOnClick = this.props.stateOnClick;
    return (
      <li className='birdPointsBlock__point point' onClick={this.clickHandler}>
        <span className="birdPointsBlock__marker" style={{ background: this.state.clicked ? stateOnClick : 'grey' }}></span>
        {name}
      </li>
    )
  }
}
export default BirdPointsBlock;
