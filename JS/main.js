
/*----- constants -----*/

const QUESTIONS = [
    {
        image: "https://imgur.com/qgczFSr.jpg", 
        q:  "What was Roy's catch pharse on the show?", 
        answers:[ "Make it so", "Have you tried turning it on and off again.", "You shall not pass", "Live long and prosper."], 
        correct: 1, 
    }, 
    {
        image: "https://imgur.com/PUozVHR.jpg", 
        q: "Why did Phillip ask Jen out to the musical?", 
        answers: ["She looks like a man.", "She loves musicals.", "He wanted to hangout with Moss and Roy.", "It was a work outing."], 
        correct: 2, 
    },
    {
        image: "https://imgur.com/frXfz6X.jpg", 
        q: "What happened to Moss when he wanted to learn German cuisine?", 
        answers: ["He didn't like the food.", "He's instructor was a cannibal", "He loved it.", "German food just wasn't for him"],
        correct: 3, 
    },
    { 
        image: "https://imgur.com/VyXvUmz.jpg", 
        q: "What did Roy's date think was on his forehead?", 
        answers: ["Chocolate", "Poop", "He's self-respect", "Computer Gunk"], 
        correct: 4, 
    }
]


/*----- app's state (variables) -----*/

let currQuestion;

/*----- cached element references -----*/

let imageEl= document.getElementById("images"); 
let qboxEl= document.getElementById("qbox"); 
let buttons= document.querySelectorAll(".button");
let buttonEl= document.getElementById("buttons");
let prevBtnEl= document.getElementById("prev-btn");
let nextBtnEl= document.getElementById("next-btn");
let startEl= document.getElementsById("start-btn");  
let modalEl= document.getElementById("modal"); 



// images.src = QUESTIONS[sorting()].image; 
// qbox = QUESTIONS[sorting()].q; 
// buttons = QUESTIONS[0].answers[0];

  
/*----- event listeners -----*/
nextBtnEl.addEventListener('click', nextQuestion)
prevBtnEl.addEventListener('click', prevQuestion)
buttonEl.addEventListener('click',correctAnswer)
startEl.addEventListener('click', start) 


/*----- functions -----*/

init() 

function off(event){
    if(event.target.value == startEl){
        modalEl.style.display= "none"; 
    }
}
function start(event){
    if(event)
}


window.onload(); 





function correctAnswer(event){
   if(event.target.id == "buttons"){
       return; 
   }
    if(event.target.value == QUESTIONS[currQuestion].correct){
        event.target.classList.add("success")
        buttons.forEach(function(cb){
            cb.disabled = true;
         }); 
         event.target.disabled = false
    } else{
        event.target.classList.add("fail")
        }; 

}



    //     event.target.style.backgroundColor = 'green'; 
    //     buttonEl.removeEventListener('click',correctAnswer
    // } 
    // buttons.forEach(function(cb){
    //     cb.classList.add("success", "fail"); 
    // }); 
   



function nextQuestion() {
    currQuestion++
    render(); 
    
        buttons.forEach(function(cb) {
            cb.classList.remove("success")
            cb.classList.remove("fail")
            cb.disabled = false;
        }); 
         
}


function prevQuestion() {
    currQuestion--
    render()
}


function init() {
  
    currQuestion = 0
    render(); 
}

function render() {
    imageEl.src = QUESTIONS[currQuestion].image;
    qbox.textContent = QUESTIONS[currQuestion].q;
    for (let i = 0; i < buttons.length; i++){
        buttons[i].textContent= QUESTIONS[currQuestion].answers[i]; 
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