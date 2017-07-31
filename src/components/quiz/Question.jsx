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

    shuffleChoices(choices) {
        for (let index = choices.length - 1; index > 0; index--) {
            let index_2 = Math.floor(Math.random() * (index + 1))
            let temp = choices[index]
            choices[index] = choices[index_2]
            choices[index_2] = temp
        }
        return choices
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
                            this.shuffleChoices(question.choices).map((choice, index) => {
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