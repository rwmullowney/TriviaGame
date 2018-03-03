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
            question: "Leonardo Dicaprio received the Oscar for Best Actor for his performance in what movie?",
            answer1: 'Wolf of Wall Street',
            answer2: 'The Departed',
            answer3: 'Blood Diamond',
            correctAnswer: 'The Revenant'
        },

        question2 = {
            buttonName: 'q2',
            question: "Adjusted for inflation, what is the highest grossing film of all time?",
            answer1: 'Avatar',
            answer2: 'The Sound of Music',
            answer3: 'Titanic',
            correctAnswer: 'Gone With The Wind'
        },

        question3 = {
            buttonName: 'q3',
            question: "Which movie won the Oscar for Best Picture in 2011?",
            answer1: 'Hugo',
            answer2: 'Moneyball',
            answer3: 'The Descendants',
            correctAnswer: 'The Artist'
        },

        question4 = {
            buttonName: 'q4',
            question: "What movie was mistakenly announced as the winner of the 2016 Oscar for Best Picture, when the real winner was Moonlight?",
            answer1: 'Manchester by the Sea',
            answer2: 'Arrival',
            answer3: 'Hell or High Water',
            correctAnswer: 'La La Land'
        }
    ]

    var timer = 90; // Defines variable to track timer
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
        $('#gameContent').append("<h4 class='border-top'>" + questionBank[i].question + '</h4>');
        $('#gameContent').append("<input type='radio' name='" + questionBank[i].buttonName + "' class='wrong'>" + questionBank[i].answer1);
        $('#gameContent').append("<input type='radio' name='" + questionBank[i].buttonName + "' class='wrong'>" + questionBank[i].answer2);
        $('#gameContent').append("<input type='radio' name='" + questionBank[i].buttonName + "' class='wrong'>" + questionBank[i].answer3);
        $('#gameContent').append("<input type='radio' name='" + questionBank[i].buttonName + "' class='correctAnswer'>" + questionBank[i].correctAnswer);
    }


    function initGame() { // Function to initialize the game once the startGame button is clicked
        $('h3').remove(); // Remove the 'Click button to begin!' text
        $('#startGame').remove(); // Remove the 'Start Game' button

        $('#timeRemaining').html("<h3  id='timeRemaining'> Time remaining: " + timer + '</h3>'); // Add the game clock
        intervalVar = setInterval(decrement, 1000); // Start counting down the game clock
        for (var i = 0; i < questionBank.length; i++) { // for loop cycles through the questions in the questionBank
            displayQuestion(i); // ...and then displays each question and it's answers on the page
        }
        $('#gameContent').append("<br><button class='btn btn-primary my-4' id='done'>Done</button>")
    }


    function score() {
        points = $('input:correctAnswer:checked').length
        $('#playerScore').html("Your Score: " + points)
        };
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