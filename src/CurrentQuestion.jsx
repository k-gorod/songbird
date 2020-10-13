import React, { Component } from 'react'
import Player from './Player.jsx';

class CurrentQuestion extends Component {
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
export default CurrentQuestion;