import React, { PureComponent } from 'react';
import TimeLine from './TimeLine.jsx';
import StopButton from './StopButton'

class Player extends PureComponent {
    constructor(props) {
        super(props)
        this.track = new Audio(this.props.trackSrc);
        // this.track = new Audio('https://www.xeno-canto.org/sounds/uploaded/BLMSIUFTFU/XC512582-190604_1087_Grus_tok.mp3');
        
    }
    state = {
        isPlaying: false,
        currentPoint: 0
    }
    componentDidMount() {

    }
    componentDidUpdate() {

    }
    soungPlaying = () => {
        this.setState({
            currentPoint: this.track.currentTime
        })
    }
    render() {
        return (
            <div className='player' onClick={this.handleClick}>
                <StopButton active={this.state.isPlaying} />
                <TimeLine currentPoint={this.state.currentPoint} isPlaying={this.state.isPlaying} duration={this.track.duration} />
            </div>)
    }
    handleClick = (e) => {
        if (e.target.classList.contains('player__stopButton')) {
            this.track.play().then(() => { console.log(this.track.duration) });
            
            const playingStatus = !this.state.isPlaying;
            this.setState({
                isPlaying: playingStatus,
                
            })
            if (playingStatus) {
                this.soungPlaying();
                this.playVar = setInterval(this.soungPlaying, 1000)
            } else {
                console.log('here')
                clearInterval(this.playVar)
                this.track.pause();
            }
        }
    }


}
export default Player;
