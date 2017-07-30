import axios from 'axios'

function getQuestionsFromAPI() {
    axios.get('https://opentdb.com/api.php?amount=10')
        .then(res => console.log(res.data.results))
}

function formatAPIQuizData() {

}

export { getQuestionsFromAPI }