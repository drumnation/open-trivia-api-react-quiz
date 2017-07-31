import React, { Component } from 'react'
import { Well } from 'react-bootstrap'

class Scorebox extends Component {
    render() {
        return (
            <Well className="scorebox">
                Question <strong>{this.props.current + 1}</strong> out of <strong>{this.props.questions.length}</strong>
                <span className="pull-right">
                    <strong>Score: </strong>
                    <span className="score">{this.props.score}</span>
                </span>
            </Well>
        )
    }
}

export default Scorebox