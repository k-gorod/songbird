import React, { PureComponent } from 'react';

class StopButton extends PureComponent {
    constructor(props) {
        super(props)
        this.state.active = this.props.active
    }
    state = {
        active: true
    }
    componentDidUpdate() {
        this.setState({
            active: this.props.active
        })
    }
    render() {
        return (
            <div className={`player__stopButton ${this.state.active ? 'playing' : 'stoped'}`}></div>
        )
    }

}

export default StopButton;