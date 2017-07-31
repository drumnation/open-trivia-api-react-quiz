import React, { Component } from 'react'
import { Button, ListGroup, ListGroupItem, Well, Panel } from 'react-bootstrap'

class Question extends Component {
    onChange(questionText, event) {
        event.preventDefault()
        const { setCurrent, setScore, question } = this.props
        let chosen = questionText
        if (chosen === question.correct) {
            setScore(this.props.score + 1)
        }
        setCurrent(this.props.current + 1)
    }

    shuffleChoices(array) {
        for (let i = array.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1))
            let temp = array[i]
            array[i] = array[j]
            array[j] = temp
        }
        return array
    }

    showFeedback() {

    }

    render() {
        const { question } = this.props
        return (
            <div>
                <Well>
                    <h3>{question.text}</h3>
                    <hr />
                    <ListGroup>
                        {
                            this.shuffleChoices(this.props.question.choices).map((choice, index) => {
                                const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')
                                return (
                                    <ListGroupItem key={alphabet[index]}>
                                        <Button
                                            bsStyle={'primary'}
                                            onClick={this.onChange.bind(this, choice.text)}
                                            name={question.id}
                                            value={choice.id}
                                        >
                                            {alphabet[index]}
                                        </Button>
                                        <span className="choice">{choice.text}</span>
                                    </ListGroupItem>
                                )
                            })
                        }
                    </ListGroup>
                    <strong>Category: </strong>{question.category}
                    <span className="difficulty pull-right">{question.difficulty}</span><br />
                </Well>
            </div>
        )
    }
}

const styles = {
    neutral: {},
    correct: {},
    wrong: {}     
}


export default Question