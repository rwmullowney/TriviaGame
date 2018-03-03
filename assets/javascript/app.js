(function () {

    // Play music
    var audio = new Audio("assets/music/bgm.mp3");
    audio.onloadeddata = function () {
        audio.play();
    }

    // Create the array that stores the 'question' objects
    var questionBank = [

        question1 = {
            buttonName: 'q1',
            question: "This is question 1",
            answer1: 'answer1.1',
            answer2: 'answer1.2',
            answer3: 'answer1.3',
            correctAnswer: 'correctAnswer1'
        },

        question2 = {
            buttonName: 'q2',
            question: "This is question 2",
            answer1: 'answer2.1',
            answer2: 'answer2.2',
            answer3: 'answer2.3',
            correctAnswer: 'correctAnswer2'
        },

        question3 = {
            buttonName: 'q3',
            question: "This is question 3",
            answer1: 'answer3.1',
            answer2: 'answer3.2',
            answer3: 'answer3.3',
            correctAnswer: 'correctAnswer3'
        },

        question4 = {
            buttonName: 'q4',
            question: "This is question 4",
            answer1: 'answer4.1',
            answer2: 'answer4.2',
            answer3: 'answer4.3',
            correctAnswer: 'correctAnswer4'
        }
    ]

    var timer = 60; // Defines variable to track timer
    var points = 0; // Defines variable to track score

    var i = 0 // Track index of questionBank

    var intervalVar; // Defines this variable on outer scope for use in 'decrement()' & 'buttonClicked()' function 




    function decrement() { // Function to decrease the timer on the page
        timer--;
        $('#timeRemaining').html("<h3 id='timeRemaining'> Time remaining: " + timer + '</h3>');

        if (timer === 0) { // If the timer runs out, you clear the variable that was tied to your interval so the timer stops
            clearInterval(intervalVar);
            gameResults();
        }
    }


    
    function displayQuestion(i) { // Function to display the question on the page
        $('#gameContent').append("<h3 class='border-top pt-3'>" + questionBank[i].question + '</h3>');
        $('#gameContent').append("<input type='radio' name='" + questionBank[i].buttonName + "' class='wrong'>" + questionBank[i].answer1);
        $('#gameContent').append("<input type='radio' name='" + questionBank[i].buttonName + "' class='wrong'>" + questionBank[i].answer2);
        $('#gameContent').append("<input type='radio' name='" + questionBank[i].buttonName + "' class='wrong'>" + questionBank[i].answer3);
        $('#gameContent').append("<input type='radio' name='" + questionBank[i].buttonName + "' class='correctAnswer'>" + questionBank[i].correctAnswer);
    }


    function initGame() { // Function to initialize the game once the startGame button is clicked
        $('h3').remove(); // Remove the 'Click button to begin!' text
        $('#startGame').remove(); // Remove the 'Start Game' button

        $('#timeRemaining').html("<h3 id='timeRemaining'> Time remaining: " + timer + '</h3>'); // Add the game clock
        intervalVar = setInterval(decrement, 1000); // Start counting down the game clock
        for (var i = 0; i < questionBank.length; i++) { // for loop cycles through the questions in the questionBank
            displayQuestion(i); // ...and then displays each question and it's answers on the page
        }
        $('#gameContent').append("<br><button class='btn btn-primary mt-3 mb-4' id='done'>Done</button>")
    }


    function score() {
        $(document).ready(function() {
            $('input:radio').change(function(){
                return points = $('.correct:checked').length
            })
        $('#playerScore').html("Your Score: " + points)
        });
        // for (var i = 0; i < questionBank.length; i++) {
        //     if ($(".correct" + (i+1)).is(':checked')){
        //         console.log("It's correct!"); 
            // if q1 && isclass(correct1) {score++}
            // subtract correct from the total number of questions (questionBank.length?) to find the incorrect

            // ????
            // if ($('#q' + (i + 1)).val === 'wrong') {
            //     console.log("It's wrong")
            // }
        // }
    }

    function gameResults() { // Function to display the results of the game upon it ending
        $('#timeRemaining').remove(); // Removes the timer and game content
        $('#gameContent').remove();

        score();
    }



    $('#startGame').on('click', function () {
        initGame();
        $("#done").on('click', function () {
            clearInterval(intervalVar) // Stops the timer
            gameResults(); // Displays the game results
        })
    })



})();