
/*----- app's state (variables) -----*/

var QUESTIONS = [
    {
        image: "https://imgur.com/qgczFSr.jpg", 
        q:  "What was Roy's catch pharse on the show?", 
        answers:[ "Make it so", "Have you tried turning it on and off again", "You shall not pass", "Live long and prosper"], 
        correct: 1,
        guess: -1,
    },
    {
        image: "https://imgur.com/PUozVHR.jpg", 
        q: "Why did Phillip ask Jen out?", 
        answers: ["She looks like a man", "She loves musicals", "He wanted to hangout with Moss and Roy", "It was a work outing"], 
        correct: 0,
        guess: -1,
    },
    {
        image: "https://imgur.com/frXfz6X.jpg", 
        q: "What happened to Moss when he wanted to learn German cuisine?", 
        answers: ["He meet Aunt Irma", "His instructor was a cannibal", "He burned the building down", "German food just wasn't for him"],
        correct: 1, 
        guess: -1,
    },
    { 
        image: "https://imgur.com/VyXvUmz.jpg", 
        q: "What did Roy's date think was on his forehead?", 
        answers: ["Chocolate", "Poop", "He's self-respect", "Computer Gunk"], 
        correct: 1, 
        guess: -1,
    },
    { 
        image: "https://imgur.com/BvMKE5y.jpg", 
        q: "What was the word that won Moss the Countdown teapot?", 
        answers: ["Promiscuous", "Mandem", "Tnetennba", "Vista"], 
        correct: 2, 
        guess: -1,
    },
    {
        image: "https://imgur.com/cS6gFg2.jpg", 
        q: "People what a bunch of ___________.", 
        answers: ["Cows", "Arseholed", "Nimrods", "Bastards"], 
        correct: 3, 
        guess: -1,
    }, 
    {
        image: "https://imgur.com/eivqY5R.jpg", 
        q: "What happened to Roy's girlfriends parents at Sea Parks?", 
        answers: ["They were murdered", "They died in a fire", "They got married", "They've been stuck there ever since"], 
        correct: 1, 
        guess: -1,
    }, 
    {
        image: "https://imgur.com/OkeaB2w.jpg", 
        q: "What was Jen's boyfriends name?", 
        answers: ["Peter File", "File Peter", "Pedo File", "Mister Love"], 
        correct: 0, 
        guess: -1,
    }, 
    {
        image: "https://imgur.com/y77aH93.jpg", 
        q: "What was the emergency number changed too?", 
        answers: ["0118-999-881-879-165-435-3", "999", "Dear Sir stroke Madam", "0118-999-881-999-119-725-3"], 
        correct: 3, 
        guess: -1,
    },     
    {
        image: "https://imgur.com/WU41tqa.jpg", 
        q: "Why was Richmond demoted?", 
        answers: ["He was bad at his job", "He become goth", "He was found laundering money", "He was put into witness protection"], 
        correct: 1, 
        guess: -1,
    }, 
    {
        image: "https://imgur.com/hODJxS7.jpg", 
        q: "Where did Moss and Roy take the sex workers?", 
        answers: ["Amsterdam", "To the carnival", "On a cruise ship", "To the elders of the internet"], 
        correct: 1, 
        guess: -1,
    }, 
]

let currQuestion;
let wrongAnswers = 0;
let numCorrect = [];


/*----- cached element references -----*/

let imageEl = document.getElementById("images"); 
let qboxEl = document.getElementById("qbox"); 
let buttons = document.querySelectorAll(".button");
let buttonEl = document.getElementById("buttons");
let prevBtnEl = document.getElementById("prev-btn");
let nextBtnEl = document.getElementById("next-btn");
let startEl = document.getElementById("start-btn");  
let modalEl = document.getElementById("modal"); 
let tryAgainEl = document.getElementById("tryagain"); 
let tryAgainBtn = document.getElementById("tryagain-btn");
let playAgainEl = document.getElementById("congrats"); 
let playAgainBtn = document.getElementById("playagain-btn"); 
let audio = document.getElementById("audio"); 


/*----- event listeners -----*/
nextBtnEl.addEventListener('click', nextQuestion)
prevBtnEl.addEventListener('click', prevQuestion)
buttonEl.addEventListener('click',correctAnswer)
startEl.addEventListener('click', start) 
tryAgainBtn.addEventListener('click', tryAgain)
playAgainBtn.addEventListener('click', playAgain)



/*----- functions -----*/

init() 

function tryAgain(){
    wrongAnswers = 0; 
    numCorrect = []; 
    tryAgainEl.style.display = 'none';
    reset(); 
    QUESTIONS = shuffle(); 
    currQuestion = 0;
    render(); 
    audio.play(); 
}

function playAgain(){
    wrongAnswers = 0; 
    numCorrect = []; 
    playAgainEl.style.display = 'none';
    reset(); 
    QUESTIONS = shuffle(); 
    currQuestion = 0;
    render(); 
    audio.play(); 
    }


function reset(){
    buttons.forEach(function(button){
        button.classList.remove("fail"); 
        button.classList.remove("success"); 
        button.disabled = false; 
    }); 
    QUESTIONS.forEach(function(question){
        question.guess = -1; 
    }); 
}


function shuffle(){
var currentIndex = QUESTIONS.length; 
var tempValue = null;
var randomIndex = null; 
while (0 !== currentIndex){
    randomIndex = Math.floor(Math.random() * currentIndex); 
    currentIndex -= 1; 
    tempValue = QUESTIONS[currentIndex];
    QUESTIONS[currentIndex] = QUESTIONS[randomIndex]; 
    QUESTIONS[randomIndex] = tempValue; 

}
return QUESTIONS
}


function start() {
   modalEl.style.display = 'none'; 
   audio.play(); 

}


function correctAnswer(event){
    if (event.target.id == "buttons"){
        return; 
    }

    if (QUESTIONS[currQuestion].guess !== -1) {
        return;
    }

    let guessId = parseInt(event.target.id.replace('button', ''))
    if (isNaN(guessId)) return;

    QUESTIONS[currQuestion].guess = guessId
    if (wrongAnswers < 3) {
        wrongAnswers = QUESTIONS.reduce((wrongCount, question) => {
            if (question.guess !== -1 && question.guess !== question.correct) {
                wrongCount += 1
            }
            return wrongCount
        }, 0)
    } else {
        wrongAnswers = 0;
    }


    console.log (event.target)


    if (event.target.value == QUESTIONS[currQuestion].correct){
      numCorrect.push(QUESTIONS[currQuestion].correct)
    } 

    render() 
}
   
function nextQuestion(evt) {
    currQuestion++
    render(); 
    audio.play(); 
}


function prevQuestion() {
    currQuestion--
    render()
}


function init() {
    currQuestion = 0; 
    render();  
}

function render() {
    imageEl.src = QUESTIONS[currQuestion].image;
    qbox.textContent = QUESTIONS[currQuestion].q;
    for (let i = 0; i < buttons.length; i++) {
        let btnEl = buttons[i]
        let guess = QUESTIONS[currQuestion].guess
        let correct = QUESTIONS[currQuestion].correct
        btnEl.textContent= QUESTIONS[currQuestion].answers[i];

        // if this question has been guessed
        if (guess !== -1) {
            // if the button we are on (in the loop) is the guess we made
            if (guess === i) {
                // if guess is correct answer
                if (correct === guess) {
                    // make sure its the success class on the button
                    btnEl.classList.remove("fail")
                    btnEl.classList.add("success")
                } else {
                    // if not correct answer, make sure it is fail class on button
                    btnEl.classList.remove("success")
                    btnEl.classList.add("fail")
                };
                // since this button was the guess, make sure it isn't disabled
                btnEl.disabled = false; 
            } else {
                // if this is a non guess button for a answered question
                // we remove success and fail and disable
                btnEl.classList.remove("success")
                btnEl.classList.remove("fail")
                btnEl.disabled = true; 
            }
        } else {
            // if the question has not been answered, button remain white and clickable
            btnEl.classList.remove("success");
            btnEl.classList.remove("fail");
            btnEl.disabled = false; 
        }
    }

    // renders the previous or next buttons
    prevBtnEl.style.display = currQuestion === 0 ? 'none' : 'inline'; 
    nextBtnEl.style.display = currQuestion === QUESTIONS.length - 1 ? 'none' : 'inline'; 

    // congrats 
    // show the congrats answer modal
    if (numCorrect.length == 9 && wrongAnswers < 2){
        playAgainEl.style.display = 'none'; 
    } else if(numCorrect.length == 9 && wrongAnswers == 2){
        playAgainEl.style.display = 'block'
    } else if(numCorrect.length == 11){
        playAgainEl.style.display = 'block'
    } else if (numCorrect.length == 10 && wrongAnswers == 1){
       playAgainEl.style.display = 'block'
    }
    else {
        playAgainEl.style.display = 'none'; 
    }; 

  // if wrong answers = 3
    // show the wrong answer modal
    if (wrongAnswers < 3){
        tryAgainEl.style.display ='none';
    } else if (wrongAnswers == 3) {
        tryAgainEl.style.display ='block'; 
    }; 

}













