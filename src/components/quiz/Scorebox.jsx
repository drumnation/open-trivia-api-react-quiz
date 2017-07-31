import React, { Component } from 'react'
import { Well } from 'react-bootstrap'

class Scorebox extends Component {
    render() {
        return (
            <Well>
                Question <strong>{this.props.current + 1}</strong> out of <strong>{this.props.questions.length}</strong>
                <span className="pull-right"><strong>Score: </strong>{this.props.score}</span>
            </Well>
        )
    }
}

export default Scorebox