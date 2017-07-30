import React, { Component } from 'react'

class Results extends Component {
    render() {
        var percent = (this.props.score / this.props.questions.length * 100)
        switch (percent) {
            case (percent > 80):
                var message = 'Awesome Job!'; break
            case (percent <= 80 && percent <= 60):
                var message = 'You Did Ok!'; break
            default:
                var message = 'You Did Horrible!'; break
        }
        return (
            <div className="well">
                <h4>You Got {this.props.score} out of {this.props.questions.length} Correct</h4>
                <h1>{percent}% - {message}</h1>
                <hr />
                <a href="/app">Take Again</a>
            </div>
        )
    }
}

export default Results