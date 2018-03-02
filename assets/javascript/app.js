(function () {

    // Create the array that stores the 'question' objects
var questionBank = [

    question1 = {
        question : "This is question 1",
        answer1 : 'answer1.1',
        answer2 : 'answer1.2',
        answer3 : 'answer1.3',
        correctAnswer : 'correctAnswer1'
    },

    question2 = {
        question : "This is question 2",
        answer1 : 'answer2.1',
        answer2 : 'answer2.2',
        answer3 : 'answer2.3',
        correctAnswer : 'correctAnswer2'
    },

    question3 = {
        question : "This is question 3",
        answer1 : 'answer3.1',
        answer2 : 'answer3.2',
        answer3 : 'answer3.3',
        correctAnswer : 'correctAnswer3'
    },

    question4 = {
        question : "This is question 4",
        answer1 : 'answer4.1',
        answer2 : 'answer4.2',
        answer3 : 'answer4.3',
        correctAnswer : 'correctAnswer4'
    }
]

// Test looping through array of question objects
// for (var i = 0; i < questionBank.length; i++){
//     console.log(questionBank[i].question)
//     console.log(questionBank[i].answer3)
//     console.log(questionBank[i].correctAnswer)
//     console.log('----------------')
// }

// Function to initialize the game once the startGame button is clicked
function initGame(){
    $('#startGame').remove();

    // probably add loop here to cycle through questions
    $('#gameContent').html('<h3>' + questionBank[0].question + '</h3>')
    $('#gameContent').append("<button class='btn btn-primary'>" + questionBank[0].answer1 + "</button>")
    $('#gameContent').append("<button class='btn btn-primary'>" + questionBank[0].answer2 + "</button>")
    $('#gameContent').append("<button class='btn btn-primary'>" + questionBank[0].answer3 + "</button>")
    $('#gameContent').append("<button class='btn btn-primary'>" + questionBank[0].correctAnswer + "</button>")

    $('#gameContent').append("<br><button class='btn btn-primary'>Continue</button>")
}

$('#startGame').on('click', function(){
    initGame();
})


})();