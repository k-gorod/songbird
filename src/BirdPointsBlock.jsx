import React, { PureComponent, Component } from 'react';
import { render } from '@testing-library/react';
import birdsData from './const/birdsData'


class BirdPointsBlock extends Component {
  constructor(props) {
    super(props)
    this.birdPoints = [];
    this.birdList = props.birdList;
    this.answer = props.answer;
  }
  componentWillMount(){
    this.birdList = this.birdList.map((bird)=>{
      return <Point key={bird.id} id={bird.id} name={bird.name} stateOnClick={bird.id==this.answer?'green':'red'}/> 
    })
    // for (let i = 0; i < this.birdList.length; i++) {
    //   this.birdPoints.push(
    //     <Point key={i} id={this.birdList[i].id}>{this.birdList[i].name} </Point>
    //   )
    // }

    this.props.test(
      'hello'
    );
  }
  render() {
    console.log(this.birdList)
    return (
      <div className='birdPointsBlock'>
        {this.birdList}

      </div>)
  }

}
class Point extends PureComponent {
  constructor(props) {
    super(props)
    this.id = props.id;
    this.name = props.name
    this.stateOnClick = props.stateOnClick;
  }
  state = {
    clicked:false
  }
  clickHandler = () => {
      this.setState(
        {clicked:true}
      )
  }
  render() {
    return (
      <div className='birdPointsBlock__point point' onClick={this.clickHandler}>
        <span className="birdPointsBlock__marker" style={{background:this.state.clicked?this.stateOnClick:'grey'}}></span>
        {this.name}
      </div>
    )
  }
}
export default BirdPointsBlock;
