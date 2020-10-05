import React, { Component } from 'react';
class TimeLine extends Component {
    constructor(props) {
        super(props)
        this.track = new Audio(this.props.trackSrc);
        this.playingStatus = this.props.playingStatus;
    }
    state = {
        currentTime: 0,
        duration:0
    }
    componentDidMount(){
        
    }
    componentDidUpdate() {
        if (this.track.src !== new Audio(this.props.trackSrc).src) {
            if (this.props.playingStatus) {
                this.track.pause();
                this.props.changePlayingStatus();
            }
            this.track = new Audio(this.props.trackSrc)
            
            this.setState({
                currentTime: 0
            })
        }
        if (this.playingStatus !== this.props.playingStatus) {
            this.playingStatus = this.props.playingStatus;
            this.props.playingStatus ? this.startPlaying() : this.stopPlaying();
        }

    }

    startPlaying = () => {
        this.track.play();
        this.playingEvent = setInterval(() => {
            console.log('a')
            this.setState({
                currentTime: this.track.currentTime
            })
        }, 100);
    }
    stopPlaying = () => {
        this.track.pause();
        if (this.playingEvent !== undefined) {
            clearInterval(this.playingEvent);
        }

    }

    render() {
        this.track.addEventListener('loadedmetadata', (e) => {
                this.setState({
                    duration:e.target.duration
                })
            })
        const currentTime = Math.floor(Math.round(this.state.currentTime) / 60) + ':' + Math.round(this.state.currentTime) % 60
        const currentDuration = Math.floor(Math.round(this.state.duration) / 60) + ':' + Math.round(this.state.duration) % 60;
        const currentWidth = isNaN(this.state.duration)?0:(this.state.currentTime * (100 / this.state.duration));
        return (
            <div className='player__timeinfo'>
                <div className='player__timeline'>
                    <div className='player__pastTime' style={{ width: currentWidth + '%' }}>
                        <div className='player__currentPoint'></div>
                    </div>
                    <div className='player__trackCurrentTime'>{currentTime}</div>
                    <div className='player__trackDuration'>{currentDuration}</div>
                </div>
            </div>

        )
    }
}
export default TimeLine;
