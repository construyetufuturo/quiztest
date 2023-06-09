const data = [
    {
        question: 'Cual es la siguientes opciones no es un edicitor de codigo',
        choices: [
            'vim',
            'vscode',
            'emacs',
            'word'
        ],
        answer: 'word'
    },
    {
        question: 'Que lenguaje no es orientado a objetos?',
        choices: [
            'Java',
            'haskell',
            'c++',
            'Python'
        ],
        answer: 'haskell'
    },
    {
        question: 'Que lenguaje no sirve para estilizar sitios web?',
        choices: [
            'stylus',
            'less',
            'sass',
            'postcss',
            'NextCSS'
        ],
        answer: 'postcss'
    },
];

class Question{
    /**
     * 
     * @param {string} text this represent the text of the question
     * @param {string[]} choices 
     * @param {string} answer 
     */
    constructor(text,choices,answer){
        this.text=text;
        this.choices= choices;
        this.answer=answer;
    }
    /**
     * 
     * @param {string} choice text as opcion
     * @returns {boolean} return true if the answer is right
     */
    correctAnswer(choice) {
        return choice == this.answer;
    }
}
const questions = data.map(question => new Question(question.question,question.choices,question.answer))
class Quiz{
    questionIndex =0
    score = 0
    constructor(questions){
        this.questions =questions;
    }
    /**
     * 
     * @returns {Question} the question found
     */
    getQuestionIndex(){
        return this.questions[this.questionIndex]
    }
    isEnded(){
        return this.questions.length == this.questionIndex
    }
    /**
     * 
     * @param {string} answer 
     */
    guess(answer){
        console.log(answer)
        if(this.getQuestionIndex().correctAnswer(answer)){
            this.score++;
        }
        this.questionIndex++;
    }
}
class UI{
    constructor(){
    
    }
    /**
     * 
     * @param {string} text 
     */
    showQuestion(text){
        const questionTitle = document.getElementById('question')
        questionTitle.innerText=text;
        console.log(questionTitle)
    }
    /**
     * 
     * @param {string[]} choices the choices of that question
     */ 
    showChoices(choices,callback){
        const choicesContainer = document.getElementById("choices")
        // console.log(choicesContainer)
        choicesContainer.innerHTML = '';
        for(let i=0; i<choices.length; i++){
            const button = document.createElement('button');
            button.innerText= choices[i];
            button.className = 'button';
            button.addEventListener('click',()=> callback(choices[i]))
            choicesContainer.append(button)
        }
    }
    /**
     * 
     * @param {number} score 
     */
    showScore(score){
        const quizendHTML = `
        <h1> Result</h1>
        <h2> Your Score: ${score}</h2>

        `
        const element = document.getElementById('quiz')
        element.innerHTML = quizendHTML;
    }
    /**
     * 
     * @param {number} currentIndex 
     * @param {number} total total questions 
     */
    showProgress(currentIndex,total){
        const element = document.getElementById('progress')
        element.innerHTML= ` Question ${currentIndex} of ${total}`
    }
}
console.log(questions)
console.log("hello")
/**
 * 
 * @param {Quiz} quiz quiz object 
 * @param {UI} ui ui object 
 */
const renderPage= (quiz,ui)=>{
    if (quiz.isEnded()){
        ui.showScore(quiz.score)
    }else{
        ui.showQuestion(quiz.getQuestionIndex().text)
        ui.showChoices(quiz.getQuestionIndex().choices,
        (currentChoice)=> {
            quiz.guess(currentChoice),
            renderPage(quiz,ui)
        }
        );
        ui.showProgress(quiz.questionIndex+1,quiz.questions.length);
    }
    
}
function main(){
    const quiz = new Quiz(questions);
    const ui = new UI();
    renderPage(quiz,ui)
}
main();