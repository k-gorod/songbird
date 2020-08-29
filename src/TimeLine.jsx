import React, { PureComponent } from 'react';
class TimeLine extends PureComponent {
    constructor(props) {
        super(props)
        this.currentPoint = this.props.currentPoint;
        this.state.isPlaying = this.props.isPlaying;
        this.state.duration = this.props.duration;
    }
    state = {
        currentPoint: 0,
        isPlaying: false
    }

    componentDidUpdate() {
        console.log(this.props.currentPoint, this.props.duration / 100)

        this.currentPoint = (this.props.currentPoint * (95 / this.props.duration));

    }

    render() {
        return (
            <div className='player__timeinfo'>
                <div className='player__timeline'>
                    <div className='player__pastTime' style={{ width: (this.currentPoint ) + '%' }}>
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
