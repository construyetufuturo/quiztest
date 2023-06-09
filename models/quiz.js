
import { Question } from "./question.js"
export class Quiz{
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
