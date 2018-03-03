(function () {

    // Create the array that stores the 'question' objects
    var questionBank = [

        question1 = {
            question: "This is question 1",
            answer1: 'answer1.1',
            answer2: 'answer1.2',
            answer3: 'answer1.3',
            correctAnswer: 'correctAnswer1'
        },

        question2 = {
            question: "This is question 2",
            answer1: 'answer2.1',
            answer2: 'answer2.2',
            answer3: 'answer2.3',
            correctAnswer: 'correctAnswer2'
        },

        question3 = {
            question: "This is question 3",
            answer1: 'answer3.1',
            answer2: 'answer3.2',
            answer3: 'answer3.3',
            correctAnswer: 'correctAnswer3'
        },

        question4 = {
            question: "This is question 4",
            answer1: 'answer4.1',
            answer2: 'answer4.2',
            answer3: 'answer4.3',
            correctAnswer: 'correctAnswer4'
        }
    ]


    var timer = 30; // Defines variable to track timer
    var score = 0; // Defines variable to track score

    var i = 0 // Track index of questionBank

    var intervalVar; // Defines this variable on outer scope for use in 'decrement()' & 'buttonClicked()' function 
    var timeoutVar; // Defines this variable on outer scope for use in 'buttonClicked()' function




    function decrement() { // Function to decrease the timer on the page
        timer--;
        $('#timeRemaining').html("<h3 id='timeRemaining'> Time remaining: " + timer + '</h3>');

        if (timer === 0) { // If the timer runs out, you clear the variable that was tied to your interval so the timer stops
            clearInterval(intervalVar);
        }
    }



    function displayQuestion(i) { // Function to display the question on the page
        $('#gameContent').append('<h3>' + questionBank[i].question + '</h3>');
        $('#gameContent').append("<input type='radio' name='' value='wrong'>" + questionBank[i].answer1);
        $('#gameContent').append("<input type='radio' name='' value='wrong'>" + questionBank[i].answer2);
        $('#gameContent').append("<input type='radio' name='' value='wrong'>" + questionBank[i].answer3);
        $('#gameContent').append("<input type='radio' name='' value='wrong'>" + questionBank[i].correctAnswer);
    }



    function timeUp() { // Present information if the timer runs out (probably adjust score variables and such here too since the player won't get points)
        $('#timeRemaining').html("<h3 id='timeRemaining'>Time's Up!</h3>");
        $('#gameContent').html("Info about the question")
        // loopTimer = 1000 * 5;
        // return loopTimer;
    }


    // Function to determine what happens when a button is clicked
    // Passes 'this' of the button clicked into the function under the variable 'clicked'
    function buttonClicked(clicked) {

    }


    // Function to initialize the game once the startGame button is clicked
    function initGame() {
        // Variables for my timers so I can disable them on certain conditions (intervalVar defined on outer scope above)


    }

    $('#startGame').on('click', function () {
        $('h4').remove(); // Remove the 'Click button to begin!' text
        $('#startGame').remove(); // Remove the 'Start Game' button

        $('#timeRemaining').html("<h3 id='timeRemaining'> Time remaining: " + timer + '</h3>'); // Add the game clock
        intervalVar = setInterval(decrement, 1000); // Start counting down the game clock
        for (var i = 0; i < questionBank.length; i++) {
            displayQuestion(i);
        }
    })

})();