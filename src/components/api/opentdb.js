import axios from 'axios'

const getQuestionsFromAPI = async () => {
    try {
        const response = await axios.get('https://opentdb.com/api.php?amount=10')
        return response.data.results
    } catch (err) {
        console.log(err)
    }
}

const formatAPIQuizData = async (questions) => {
    try {
        let formattedQuestions = await questions.map((question, i) => {
            console.log(question)
            let choices = question.correct_answer.split(',').concat(question.incorrect_answers)
            let formattedChoices = choices.map((choice, j) => {
                const letters = ['A. ', 'B. ', 'C. ', 'D. ', 'E. ', 'F. ']
                return { id: letters[j], text: choice.trim() }
            })
            const formattedQuestion = {
                id: i,
                category: question.category,
                type: question.type,
                difficulty: question.difficulty,
                text: question.question.replace(/&quot;/g, '"').replace(/&#039;/g, "'"),
                choices: formattedChoices,
                correct: question.correct_answer,
                incorrect: question.incorrect_answers
            }
            return formattedQuestion
        })
        return formattedQuestions
    } catch (err) {
        console.log(err)
    }
}

const quizData = async () => {
    try {
        const questions = await getQuestionsFromAPI()
        const formattedQuestions = await formatAPIQuizData(questions)
        return formattedQuestions
    } catch (err) {
        console.log(err)
    }
}

export { quizData }