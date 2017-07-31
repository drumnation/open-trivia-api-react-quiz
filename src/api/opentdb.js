import axios from 'axios'

const getQuestionsFromAPI = async () => {
    try {
        const response = await axios.get('https://opentdb.com/api.php?amount=10')
        return response.data.results
    } catch (err) {
        console.log(err)
    }
}

const convertCharsToLiteral = string => {
    return (
        string.replace(/&quot;/g, '"')
            .replace(/&#039;/g, "'")
            .replace(/&uuml;/g, "ü")
            .replace(/&Uuml;/g, "Ü")
            .replace(/&amp;/g, "&")
            .replace(/&ouml;/g, "ö")
            .replace(/&prime;/g, "´")
            .replace(/&rsquo;/g, "’")
    )
}

const formatChoices = choices => {
    return choices.map((choice, index) => {
        return { text: convertCharsToLiteral(choice.trim()) }
    })
}
const combineAllChoices = question => question.correct_answer.split(',').concat(question.incorrect_answers)

const formatQuestion = (question, index) => {
    return {
        id: index,
        category: question.category,
        type: question.type,
        difficulty: question.difficulty,
        text: convertCharsToLiteral(question.question),
        choices: formatChoices(combineAllChoices(question)),
        correct: convertCharsToLiteral(question.correct_answer.trim()),
        incorrect: question.incorrect_answers
    }
}

const formatAPIQuizData = questions => {
    return questions.map((question, index) => {
        return formatQuestion(question, index)
    })
}

const createQuizData = async () => {
    try {
        const questions = await getQuestionsFromAPI()
        const formattedQuestions = await formatAPIQuizData(questions)
        return formattedQuestions
    } catch (err) {
        console.log(err)
    }
}

export { createQuizData }