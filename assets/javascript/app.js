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

    // Timer variable and countdown
    var timer = 10;


    // Function to decrease the timer on the page
    function decrement() {
        timer--;
        $('#timeRemaining').html("<h3 id='timeRemaining'> Time remaining: " + timer + '</h3>');

        // If the timer runs out, you clear the variable that was tied to your interval so the timer stops
        if (timer === 0) {
            clearInterval(intervalVar);
        }
    }


    // Track index of questionBank
    var i = 0


    // Function to display the question on the page
    function displayQuestion(i) {
        $('#timeRemaining').html("<h3 id='timeRemaining'> Time remaining: " + timer + '</h3>');
        $('#gameContent').html('<h3>' + questionBank[i].question + '</h3>');
        $('#gameContent').append("<button class='btn btn-primary' id='wrong'>" + questionBank[i].answer1 + "</button>");
        $('#gameContent').append("<button class='btn btn-primary' id='wrong'>" + questionBank[i].answer2 + "</button>");
        $('#gameContent').append("<button class='btn btn-primary' id='wrong'>" + questionBank[i].answer3 + "</button>");
        $('#gameContent').append("<button class='btn btn-primary' id='correct'>" + questionBank[i].correctAnswer + "</button>");

    }

    // Present information if the timer runs out (probably adjust score variables and such here too since the player won't get points)
    function timeUp() {
        $('#timeRemaining').html("<h3 id='timeRemaining'>Time's Up!</h3>");
        $('#gameContent').html("Info about the question")
    }

    // Define intervalVar on the outer scope so it can be used in 'decrement' function
    var intervalVar;

    // Function to initialize the game once the startGame button is clicked
    function initGame() {

        // Variables for my timers so I can disable them on certain conditions (intervalVar defined on outer scope above)
        intervalVar = setInterval(decrement, 1000);
        var timeoutVar = setTimeout(timeUp, 1000 * 10);

        // Remove the 'Click button to begin!' text
        $('h4').remove();

        // Remove the 'Start Game' button
        $('#startGame').remove();

        // Present the question on the page
        displayQuestion(i);


        intervalVar;

        timeoutVar;

        $(".btn").on('click', function () {
            clearTimeout(timeoutVar);
            clearInterval(intervalVar);
            $('#timeRemaining').html("<h3 id='timeRemaining'>Your guess is right/wrong</h3>");
            $('#gameContent').html("You clicked a button for the question");
        })
    }

    $('#startGame').on('click', function () {
        initGame();
    })


})();