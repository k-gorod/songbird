import React from 'react';

const StopButton = (props) => {
    return <div className={`player__stopButton ${props.active ? 'playing' : 'stoped'}`} onClick={() => { props.changePlayingStatus() }}></div>
}

export default StopButton;