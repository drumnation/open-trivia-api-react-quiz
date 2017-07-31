import React, { Component } from 'react'
import AnswerKey from './AnswerKey.jsx'
import { Button, Well } from 'react-bootstrap'

class Results extends Component {
    createScoreMessage(percent) {
        let message = ''
        if (percent === 100) {
            message = 'Perfect Score!'
        } else if (percent > 80) {
            message = 'Awesome Job!'
        } else if (percent < 80 && percent > 60) {
            message = 'You Did Ok!'
        } else {
            message = "Don't Quit your Day Job!"
        }
        return message
    }

    render() {
        var percent = (this.props.score / this.props.questions.length * 100)
        return (
            <div>
                <Well>
                    <h4>You Got {this.props.score} out of {this.props.questions.length} Correct</h4>
                    <h1>{percent}%</h1>
                    <hr />
                    <h2>{this.createScoreMessage(percent)}</h2>
                    <hr />
                    <Button bsStyle="success" href="/">Take Again</Button>
                </Well>
                <Well>
                    <h3>Answer Key</h3>
                    <hr />
                    <AnswerKey questions={this.props.questions} />
                </Well>
            </div >
        )
    }
}

export default Results