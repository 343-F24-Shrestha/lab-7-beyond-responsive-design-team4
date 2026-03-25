console.log('questions', questions)
let current = 0; // Index of the current question

const scoreBoard = {
    correct: 0, // Number of questions answered correctly
    incorrect: 0, // Number of questions answered incorrectly
}

// ----------- DO NOT MODIFY ANYTHING ABOVE THIS LINE

// Use get a reference to the element that is the parent of all the <button> elements
// Example:
// const btnContainer = document...

// TODO
const btnContainer = document.querySelector("#answers")

// Show the first question and update all display text
showQuestion();
updateScoreDisplays();


// TODO
// We need an event handler (or "listener") for when the answer buttons are clicked.
// Rather than (a) making such a function for each button or (b) registering the same function 4 times (once for each button),
// Let's rely on event bubbling 🫧 (see 9.3.4) and instead register a single function on the parent of the buttons.
// When clicked, it should first determine which button was the target (if any!), and should then call the answer function with the appropriate choice.
// Example:
// btnContainer.addEventListener("click", function(ev) {
//  console.log('ev', ev)
//  console.log('ev.target', ev.target)
//  // get out of this if something other than a button was clicked
//  const answerClicked = ... // something that results in "A"
//     answer(answerClicked);
// });

btnContainer.addEventListener("click", function (ev) {
    if (ev.target.tagName !== "BUTTON") return;
    const answerClicked = ev.target.dataset.answerChoice;
    answer(answerClicked);
});




// TODO
// This function should change the question text and button texts based on the current question
// Each button's text should have the format "A: answer text", "B: answer text", etc.
function showQuestion() {
    const questionObj = questions[current];

    const questionText = document.getElementById("question");
    questionText.textContent = questionObj.question;

    const buttons = document.querySelectorAll("#answers button");

    buttons.forEach(button => {
        const choice = button.dataset.answerChoice;  
        const answerText = questionObj.responses[choice].text;

        button.textContent = `${choice}: ${answerText}`;
    });

}


// TODO
// The function should take in a string representing the selected choice ("A", "B", etc.)
// It should:
// 1. Check if the choice is correct and update the score accordingly
//    * Hint: Don't forget that you can access properties using square brackets: responses["A"]
//      (This lets you provide an expression to use as the "key," which could be a variable or literal)
// 2. Update the score display (by calling updateScoreDisplays())
// 3. Move to the next question (don't forget to show it!)
// 4. If there are no more questions, call endGame()
function answer(choice) {
    const q = questions[current];

   
    if (q.responses[choice].correct) {
        scoreBoard.correct++;
    } else {
        scoreBoard.incorrect++;
    }

    updateScoreDisplays();

    current++;

    if (current >= questions.length) {
        endGame();
    } else {
        showQuestion();
    }
}


// This function should change the text in the right/wrong displays based on the current counts
function updateScoreDisplays() {
    
    const correctDisplay = document.querySelector(".correct");
    const incorrectDisplay = document.querySelector(".incorrect");

    correctDisplay.textContent = scoreBoard.correct;
    incorrectDisplay.textContent = scoreBoard.incorrect;
}


// This function should hide the quiz, show the win message, and update the final score percentage
// (How to hide/show elements: https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/hidden)
// percentify() is provided below in case you'd like to use it.
function endGame() {
   const quiz = document.querySelector("#quiz-container");
    const endScreen = document.querySelector("#win-message");
    const finalScore = document.querySelector("#win-message p span");

    quiz.hidden = true;

    
    endScreen.hidden = false;

    const total = scoreBoard.correct + scoreBoard.incorrect;
    const percent = total === 0 ? 0 : scoreBoard.correct / total;

    
    finalScore.textContent = percentify(percent);

}

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toLocaleString#using_options
function percentify(fl) {
    return Number(fl).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 1 }); //use default locale
}