import React, { Component } from 'react'

class Scorebox extends Component {
    render() {
        return (
            <div className="well">
                Question <strong>{this.props.current + 1}</strong> out of <strong>{this.props.questions.length}</strong>
                <span className="pull-right"><strong>Score: </strong>{this.props.score}</span>
            </div>
        )
    }
}

export default Scorebox