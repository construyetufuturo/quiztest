"use strict"
export class UI{
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