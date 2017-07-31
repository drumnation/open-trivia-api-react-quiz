import React, { Component } from 'react'
import { Button, ListGroup, ListGroupItem, Well } from 'react-bootstrap'

var wrong = ''

class Question extends Component {
    onChange(choice, event) {
        event.preventDefault()
        const { setCurrent, setScore, question } = this.props
        if (choice === question.correct) {
            setScore(this.props.score + 1)
        } else {
            if (wrong === '') {
                wrong = 'X'
                setCurrent(this.props.current + 1)
            } else {
                wrong = wrong + ' X'
                setCurrent(this.props.current + 1)
            }
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
                {
                    wrong === ''
                        ? null
                        : <Well bsStyle="small">
                            <span className="wrong-x">{wrong}</span>
                        </Well>
                }
            </div>
        )
    }
}

export default Question