
/*----- constants -----*/
const QUESTIONS = [
    {
        image: "https://imgur.com/qgczFSr.jpg", 
        q:  "What was Roy's catch pharse on the show?", 
        answers:[ "Make it so", "Have you tried turning it on and off again.", "You shall not pass", "Live long and prosper."], 
    }, 
    {
        image: "https://imgur.com/PUozVHR.jpg", 
        q: "Why did Phillip ask Jen out to the musical?", 
        answers: ["She looks like a man.", "She loves musicals.", "He wanted to hangout with Moss and Roy.", "It was a work outing."], 
    },
    {
        image: "https://imgur.com/frXfz6X.jpg", 
        q: "What happened to Moss when he wanted to learn German cuisine?", 
        answers: ["He didn't like the food.", "He's instructor was a cannibal", "He loved it.", "German food just wasn't for him"],
    },
    { 
        image: "https://imgur.com/VyXvUmz.jpg", 
        q: "What did Roy's date think was on his forehead?", 
        answers: ["Chocolate", "Poop", "He's self-respect", "Computer Gunk"], 
    }
]


/*----- app's state (variables) -----*/

let currQuestion;

/*----- cached element references -----*/

let imageEl = document.getElementById("images"); 
let qboxEl = document.getElementById("qbox"); 
let buttons = document.querySelectorAll(".button");
let prevBtnEl = document.getElementById('prev-btn');
let nextBtnEl = document.getElementById('next-btn');

// images.src = QUESTIONS[sorting()].image; 
// qbox = QUESTIONS[sorting()].q; 
// buttons = QUESTIONS[0].answers[0];

  
/*----- event listeners -----*/
nextBtnEl.addEventListener('click', nextQuestion)
prevBtnEl.addEventListener('click', prevQuestion)

/*----- functions -----*/

init() 

function nextQuestion() {
    currQuestion++
    render()
}

function prevQuestion() {
    currQuestion--
    render()
}


function init() {
    currQuestion = 0
    render()
}

function render() {
    imageEl.src = QUESTIONS[currQuestion].image;
    qbox.textContent = QUESTIONS[currQuestion].q;
    for (let i = 0; i < buttons.length; i++){
        buttons[i].textContent = QUESTIONS[currQuestion].answers[i]
    }
    prevBtnEl.style.display = currQuestion === 0 ? 'none' : 'inline'
    nextBtnEl.style.display = currQuestion === QUESTIONS.length - 1 ? 'none' : 'inline'
}


// function currentQuestion(){
//     qbox.textContent = QUESTIONS[nextQuestion].q;
//     images.src = QUESTIONS[nextQuestion].image; 
//     for(let i = 0; i < buttons.length; i++){
//     buttons[i].textContent = QUESTIONS[nextQuestion].answers[i]
//     }
//     nextQuestion++ 
// }
// currentQuestion();  

























// function sorting(){
//       return Math.floor(Math.random() * Math.floor(QUESTIONS.length)); 
     
// }


// console.log(QUESTIONS[sorting()]); 


 

















// let image1 = document.createElement("img"); 
// image1.src = "https://i.imgur.com/MlKNB0e.jpg";

// let image2 = document.createElement("img").src; 
// image2.src = "https://i.imgur.com/AM9buKu.jpg"; 

// let slides = document.getElementById("slides");
// slides.src = 'https://i.imgur.com/MlKNB0e.jpg';

// let i = 0 
// let images = []; 

// images[0]= image1; 
// //images[1]= image2; 

// //images in synchronous

// function uploadImage(){
//     if (i < images.length - 1){
//       return i++ }}
//     } else {
//         i = 0; 
//     }
// }

// setTimeout(uploadImage(), 3000); 

// uploadImage();   