import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import QuestionList from './quiz/questionList.jsx'

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            questions: [
                {
                    id: 1,
                    text: 'What is your name?',
                    choices: [
                        {
                            id: 'a',
                            text: 'Dave'
                        },
                        {
                            id: 'b',
                            text: 'Tony'
                        },
                        {
                            id: 'c',
                            text: 'Jim'
                        }
                    ],
                    correct: 'b',
                },
                {
                    id: 2,
                    text: "What is your mother's name?",
                    choices: [
                        {
                            id: 'a',
                            text: 'Deborah'
                        },
                        {
                            id: 'b',
                            text: 'Allison'
                        },
                        {
                            id: 'c',
                            text: 'Julie'
                        }
                    ],
                    correct: 'a',
                }, {
                    id: 3,
                    text: "What is your friend's name?",
                    choices: [
                        {
                            id: 'a',
                            text: 'Eddie'
                        },
                        {
                            id: 'b',
                            text: 'Chris'
                        },
                        {
                            id: 'c',
                            text: 'Matt'
                        }
                    ],
                    correct: 'c',
                },
            ],
            score: 0,
            current: 1
        }
    }

    setCurrent(current) {
        this.setState({ current })
    }

    setScore(score) {
        this.setState({ score })
    }

    render() {
        return (
            <div>
                <QuestionList
                    {...this.state}
                    setCurrent={this.setCurrent.bind(this)}
                    setScore={this.setScore.bind(this)}
                />
            </div>
        )
    }
}

export default App