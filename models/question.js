export class Question{
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
// const question1 = new Question('cuales es un lenguaje de programacion',['html','css','java'],'java')

// console.log(question1)
// console.log(question1.correctAnswer('java'))
