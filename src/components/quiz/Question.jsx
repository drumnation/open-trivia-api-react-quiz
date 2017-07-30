import React, { Component } from 'react'

class Question extends Component {
    onChange(questionText, event) {
        event.preventDefault()
        const { setCurrent, setScore, question } = this.props
        let selected = questionText
        if (selected === question.correct) {
            setScore(this.props.score + 1)
        }

        setCurrent(this.props.current + 1)
    }

    shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1))
            let temp = array[i]
            array[i] = array[j]
            array[j] = temp
        }
        return array
    }

    render() {
        const { question } = this.props
        return (
            <div className="well">
                <h3>{question.text}</h3>
                <hr />
                <ul className="list-group">
                    {
                        this.shuffleArray(this.props.question.choices).map((choice, index) => {
                            const letters = ['A. ', 'B. ', 'C. ', 'D. ', 'E. ', 'F. ']
                            return (
                                <li className="list-group-item" key={letters[index]}>
                                    <span className="choice-id">{letters[index]}</span>
                                    <input
                                        type="radio"
                                        onChange={this.onChange.bind(this, choice.text)}
                                        name={question.id}
                                        value={choice.id}
                                    />
                                    <span className="choice">{choice.text}</span>
                                </li>
                            )
                        })
                    }
                </ul>
                <strong>Category: </strong>{question.category}
                <span className="difficulty pull-right">{question.difficulty}</span><br />
            </div>
        )
    }
}

export default Question