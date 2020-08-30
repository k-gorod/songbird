import React, { PureComponent, Component } from 'react';



class BirdPointsBlock extends Component {
  constructor(props) {
    super(props)
    this.birdPoints = [];
    this.answer = props.answer;
  }
  componentWillMount() {
    // for (let i = 0; i < this.birdList.length; i++) {
    //   this.birdPoints.push(
    //     <Point key={i} id={this.birdList[i].id}>{this.birdList[i].name} </Point>
    //   )
    // }


  }
  render() {
    const category = this.props.category;
    let birdList = this.props.birdList.map((bird) => {
      return <Point
        passed={() => { this.props.passed() }}
        key={bird.id} id={bird.id} name={bird.name}
        stateOnClick={bird.id == this.answer + 1 ? 'green' : 'red'}
        getBirdInfo={(n) => { this.props.getBirdInfo(n) }}
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
    this.id = this.props.id;
    this.name = this.props.name
    this.category = this.props.category;
  }
  state = {
    clicked: false
  }
  clickHandler = () => {
    this.setState(
      { clicked: true }
    )
    if (this.props.stateOnClick == 'green') {
      this.props.passed();
    }
    this.props.getBirdInfo(this.id)
  }
  componentDidUpdate() {
    if (this.props.category != this.category) {
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
