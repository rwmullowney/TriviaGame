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


    var timer = 3; // Defines variable to track timer
    var score = 0; // Defines variable to track score
    var loopTimer = 1000 * 4; // Defines length of time for each loop iteration (adjust in buttonClicked() so it sets to 5 after answer is guessed)
    var results = false; // Switch that changes when questions are completed, so the program knows to go to the results page

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
        $('#timeRemaining').html("<h3 id='timeRemaining'> Time remaining: " + timer + '</h3>');
        $('#gameContent').html('<h3>' + questionBank[i].question + '</h3>');
        $('#gameContent').append("<button class='btn btn-primary' id='wrong'>" + questionBank[i].answer1 + "</button>");
        $('#gameContent').append("<button class='btn btn-primary' id='wrong'>" + questionBank[i].answer2 + "</button>");
        $('#gameContent').append("<button class='btn btn-primary' id='wrong'>" + questionBank[i].answer3 + "</button>");
        $('#gameContent').append("<button class='btn btn-primary' id='correct'>" + questionBank[i].correctAnswer + "</button>");
        $('#playerScore').html("Your score: " + score)
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
        clearTimeout(timeoutVar);
        clearInterval(intervalVar);
        return forLoop();
        // loopTimer = 1000 * 5;
        // return loopTimer;

        if ($(clicked).attr('id') === 'wrong') {
            $('#timeRemaining').html("<h3 id='timeRemaining'>Your guess is wrong</h3>");
            $('#gameContent').html("Info about the question");
            return forLoop(); // Attempt to make a button click re-run the forLoop
        } else {
            $('#timeRemaining').html("<h3 id='timeRemaining'>Your guess is right</h3>");
            $('#gameContent').html("Info about the question");
            score++;
            $('#playerScore').html("Your score: " + score);
            return forLoop(); // Attempt to make a button click re-run the forLoop
        }
    }





    function forLoop() { //  create a loop function
        setTimeout(function () { //  call a 3s setTimeout when the loop is called
            timer = 10
            intervalVar = setInterval(decrement, 1000);
            timeoutVar = setTimeout(timeUp, 1000 * 10);


            // Present the question on the page
            displayQuestion(i);

            // intervalVar;
            // timeoutVar;

            $(".btn").on('click', function () {
                buttonClicked(this);
            });
            i++; //  increment the counter
            if (i <=questionBank.length) { //  if the counter is less than the length of the questionBank array, call the loop function
                forLoop(); //  ..  again which will trigger another             
            } //  ..  setTimeout()
            // else { // Otherwise, display the results page
            //     resultsPage()
            // }
        }, 1000 * 10);
    }


    // function resultsPage() {
    //     $('#timeRemaining').html("<h3 id='timeRemaining'>Thanks for playing!</h3>");
    //     $('#gameContent').html('You finished the game!')
    //     $('#playerScore').html("Your final score: " + score)
    // }








    // Function to initialize the game once the startGame button is clicked
    function initGame() {
        // Variables for my timers so I can disable them on certain conditions (intervalVar defined on outer scope above)

 
    }

    $('#startGame').on('click', function () {
               // Remove the 'Click button to begin!' text
               $('h4').remove();

               // Remove the 'Start Game' button
               $('#startGame').remove();
       
               // Loop through the question info
               forLoop();
    })

    // if  (results === true){
    //     resultsPage()
    // };



})();