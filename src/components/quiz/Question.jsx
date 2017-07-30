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
        for (var i = array.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1))
            var temp = array[i]
            array[i] = array[j]
            array[j] = temp
        }
        return array
    }

    render() {
        const { question } = this.props
        console.log(question.text)
        return (
            <div className="well">
                <h3>{question.text}</h3>
                <hr />
                <ul className="list-group">
                    {
                        this.props.question.choices.map(choice => {
                            return (
                                <li className="list-group-item" key={choice.id}>
                                    <span>{choice.id}</span>
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
            </div>
        )
    }
}

export default Question