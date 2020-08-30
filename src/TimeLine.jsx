import React, { Component } from 'react';
class TimeLine extends Component {
    constructor(props) {
        super(props)
    }
    
    render() {
        const currentWidth = (this.props.currentPoint * (100 / this.props.duration));

        return (
            <div className='player__timeinfo'>
                <div className='player__timeline'>
                    <div className='player__pastTime' style={{ width: currentWidth + '%' }}>
                        <div className='player__currentPoint'></div>
                    </div>
                    <div className='player__trackCurrentTime'>{Math.floor(Math.round(this.props.currentPoint) / 60) + ':' + Math.round(this.props.currentPoint) % 60}</div>
                    <div className='player__trackDuration'>{Math.floor(Math.round(this.props.duration) / 60) + ':' + Math.round(this.props.duration) % 60}</div>
                </div>
            </div>

        )
    }
}
export default TimeLine;
