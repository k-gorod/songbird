import React, { PureComponent } from 'react';
import Player from './Player.jsx';

class BirdInfoBlock extends PureComponent {
    constructor(props) {
        super(props)
        this.bird = this.props.bird;
    }
    render() {
        let info;
        if (this.props.bird !== undefined) {
            this.bird = this.props.bird;
            info = (
                <div className='birdInfoBlock'>
                    <div className='birdInfoBlock__img' style={{ background: 'url(' + this.bird.image + ') center/cover no-repeat' }}></div>
                    <h2 className='birdInfoBlock__birdName'>{this.bird.name}</h2>
                    <p className='birdInfoBlock__birdLatName'>{this.bird.species}</p>
                    <Player trackSrc={this.bird.audio} />
                    <div className='birdInfoBlock__info'>{this.bird.description}</div>
                </div>
            )
        } else {
            info = (
                <div className='birdInfoBlock'>
                    <p className='birdInfoBlock__defaultInfo'>Послушайте плеер. <br /> Угадайте что за птица.</p>
                </div>)
        }
        return info;
    }
}
export default BirdInfoBlock;