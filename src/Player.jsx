import React, { PureComponent } from 'react';
import TimeLine from './TimeLine.jsx';
import StopButton from './StopButton'

class Player extends PureComponent {
    constructor(props) {
        super(props)
        this.track = new Audio(this.props.trackSrc);
    }
    state = {
        isPlaying: false,
        currentPoint: 0
    }
    componentWillMount() {

    }
    
    componentWillUpdate() {
        if (this.track.src != this.props.trackSrc) {
            this.setState({
                isPlaying: false,
            })
            this.track.pause();
            this.track.remove();
            this.track = new Audio(this.props.trackSrc);
        }

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
                this.playVar = setInterval(this.soungPlaying, 100)
            } else {
                clearInterval(this.playVar)
                this.track.pause();
            }
        }
    }


}
export default Player;
