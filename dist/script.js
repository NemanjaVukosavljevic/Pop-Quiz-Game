import { quizQuestions, randomQuestionsArray, shuffleArray } from "./data.js";


console.log(`All questions picked with the random sort are ${randomQuestionsArray}`);

// HERO DIV
let heroDiv = document.createElement(`div`);
heroDiv.className = `h-screen w-full flex flex-col  items-center px-5 py-2 bg-gray-800`;

// HeroDivTitle
let heroTitle = document.createElement(`h1`);
heroTitle.className = `text-white text-bold text-4xl`
heroTitle.innerText = `QUIZ`;

// questionRow

let shownQuestions = randomQuestionsArray.slice(0, 5);

console.log(`shown questions should be ${shownQuestions}`);
let tickler = [];
const makeQuestionRow = (parent) => {
    
    // flagger for radio buttons
    let radioFlagger = 0;

    parent.innerHTML = '';

    let correctAnswer = []

    // givenAnswers

    let givenAnswers = [];

    
    for (let i = 0; i < shownQuestions.length; i++){

        let questionIndex = shownQuestions[i];
        console.log(questionIndex);

        // row div
        let rowDiv = document.createElement(`div`);
        rowDiv.className = `rowka w-[96%] lg:w-[50%] h-[20%] lg:h-[20%] flex flex-col my-3 lg:hover:bg-gray-900 transition-colors duration-200 border border-white rounded-lg`;
        
            // question div
            let questionDiv = document.createElement(`div`);
            questionDiv.className = ` h-[35%] text-white text-center`;
        
                // title 
                let questionTitle = document.createElement(`h1`);
                questionTitle.className = `flex justify-center items-center text-white h-full text-center  text-xs`;
                questionTitle.innerText = quizQuestions[questionIndex].question;
                console.log(`Question title is ${questionTitle.innerText}`);
        
        // answers div
        let answersDiv = document.createElement(`div`);
        answersDiv.className = `flex flex-wrap text-white justify-center items-center h-full w-full`;
        
        // answers
        let imageNumber = 0;

        // correctAnswers
        
        correctAnswer.push(quizQuestions[questionIndex].answers[quizQuestions[questionIndex].correctIndex])
        console.log(correctAnswer);

        
        

        for (let j = 0; j < 4; j++){

                // main div
                let oneDiv = document.createElement(`div`);
                oneDiv.className = `flex flex-row justify-start items-center w-[50%] h-[50%] lg:hover:bg-yellow-900 transition-colors duration-200 rounded-md cursor-pointer`;

                    // image
                    let image = document.createElement(`img`);
                    image.src = `../images/${imageNumber}.png`;
                    imageNumber++;
                    image.className = `w-[1rem] ml-[18%] lg:ml-[30%]`;
                    

                    // radio button
                    let radioButton = document.createElement(`input`);
                    radioButton.className = `mx-3 radioButton`
                    radioButton.type = `radio`;
                    radioButton.name = `radios${radioFlagger}`;
                    radioButton.id = quizQuestions[questionIndex].answers[j];


                    if (j == 0){
                        radioButton.checked = true;
                        givenAnswers.push(radioButton.id);
                        if (givenAnswers[i] == correctAnswer[i]){
                            tickler.push(0);
                        } else {
                            tickler.push(1);
                        }
                    }

                    


                    

                    

                    // answer paragraph
                    let answer = document.createElement(`p`);
                    answer.className = `text-xs`
                    answer.innerText = quizQuestions[questionIndex].answers[j];
                
                    oneDiv.addEventListener(`click`, (event) => {
                        radioButton.checked = true;
                        givenAnswers[i] = radioButton.id;
                        console.log(`zapravo ${givenAnswers}`);
                        if (givenAnswers[i] == correctAnswer[i]){
                            tickler[i] = 0;
                        } else {
                            tickler[i] = 1;
                        }
                        console.log(`Ovo je NOVI NOVI tikler ${tickler}`);
                    });

                    

                answersDiv.append(oneDiv);
                    oneDiv.append(image);
                    oneDiv.append(radioButton);
                    oneDiv.append(answer);


            };

            
            
            radioFlagger++;
            
            parent.append(rowDiv);
            rowDiv.append(questionDiv);
            questionDiv.append(questionTitle);
            rowDiv.append(answersDiv);
            // 4 divs (for at 39)
            
        }

        console.log(givenAnswers);
        console.log(`Ovo je tikler ${tickler}`);
}

// buttons 
let buttonsDiv = document.createElement(`div`);
buttonsDiv.className = `flex flex-row justify-center h-[10%] w-full gap-3 text-white`;

for (let i = 0; i < 2; i++){
    let button = document.createElement(`button`);
    button.type = `button`;
    if (i == 0){
        button.className = `sender w-[46%] lg:w-[25%] bg-red-600 lg:hover:bg-red-800 transition-colors duration-200 rounded-md`;
        button.innerText = `Pošalji odgovore`
    } else if (i == 1){
        button.className = `sender w-[46%] lg:w-[25%] bg-green-600 lg:hover:bg-green-800 transition-colors duration-200 rounded-md`;
        button.innerText = `Nova pitanja`;
    }

    buttonsDiv.append(button);

}

// even listeneri za button-e

let paragraphDiv = document.createElement(`div`);
buttonsDiv.addEventListener(`click`, (event) => {
    const senderButton = event.target.closest(`.sender`);

    if (senderButton.innerText == `Pošalji odgovore`) {
        console.log(`Kliknuto je crveno dugme!`);
        
        // Disable all radio buttons
        document.querySelectorAll('.radioButton').forEach((radioButton) => {
            radioButton.disabled = true;
        });

        paragraphDiv.className = `flex flex-col justify-center items-start`;

        for (let i = 0; i < tickler.length; i++){
            let paragraph = document.createElement(`p`);
            for (let j = 0; j < tickler.length; j++){
                if(tickler[i] == 0){
                    paragraph.className = `text-green-500 text-xl`;
                    paragraph.innerText = `Pitanje broj ${i+1} je odgovoreno tacno!`
                } else if(tickler[i] == 1){
                    paragraph.className = `text-red-500 text-xl`
                    paragraph.innerText = `Pitanje broj ${i+1} je odgovoreno netacno!`
                }
            }

            paragraphDiv.append(paragraph);

        }
    } else if (senderButton.innerText == `Nova pitanja`) {
        shuffleArray(quizQuestions);

        shownQuestions = randomQuestionsArray.slice(0, 5);
        tickler = [];
        paragraphDiv.innerHTML = ``;

        makeQuestionRow(heroDiv);
        heroDiv.append(buttonsDiv)
        heroDiv.append(paragraphDiv);
    }
});












document.body.append(heroDiv);
    heroDiv.append(heroTitle);
    makeQuestionRow(heroDiv) // appended to heroDiv
    heroDiv.append(buttonsDiv);
    heroDiv.append(paragraphDiv);