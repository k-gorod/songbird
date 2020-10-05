import React, { PureComponent } from 'react';
import TimeLine from './TimeLine.jsx';
import StopButton from './StopButton'

class Player extends PureComponent {
    state = {
        isPlaying: false,
    }
    changePlayingStatus = () => {
        this.setState({
            isPlaying: !this.state.isPlaying
        })

    }
    render() {
        return (
            <div className='player' onClick={this.handleClick}>
                <StopButton active={this.state.isPlaying} changePlayingStatus={()=>{this.changePlayingStatus()}}/>
                <TimeLine
                    playingStatus={this.state.isPlaying}
                    trackSrc={this.props.trackSrc}
                    changePlayingStatus={() => { this.changePlayingStatus() }}
                    
                />
            </div>)
    }
    handleClick = () => {
        
    }


}
export default Player;
