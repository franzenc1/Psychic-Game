
// Scorekeeping variables;
    var wins = 0;
    var losses = 0;
    var guessesLeft = 9;
    var guessesSoFar = [];

    var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

    
    var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

    

    // This function is run whenever the user presses a key.
    document.onkeyup = function(event) {
      // Determines which key was pressed.
      var userGuess = event.key.toLowerCase();

      console.log(userGuess);

      guessesSoFar.push(userGuess);
      
      // Randomly chooses a choice from the options array. This is the Computer's guess.
      
      
    

        

        // Alerts out TV show as we loop through
    
      // }



      // // Alerts the Computer's guess.
      // alert("Computer guess: " + computerGuess);
      // alert("Your guess: " + userGuess);
      // alert("Computer guess: " + computerGuess);

      if ((userGuess == "a") || (userGuess == "b") || (userGuess == "c") || (userGuess == "d") || (userGuess == "e") || (userGuess == "f") || (userGuess == "g") || (userGuess == "h") || (userGuess == "i") || (userGuess == "j") || (userGuess == "k") || (userGuess == "l") || (userGuess == "m") || (userGuess == "n") || (userGuess == "o") || (userGuess == "p") || (userGuess == "q") || (userGuess == "r") || (userGuess == "s") || (userGuess == "t") || (userGuess == "u") || (userGuess == "v") || (userGuess == "w") || (userGuess == "x") || (userGuess == "y") || (userGuess == "z")) {

        if ((userGuess === "a") && (computerGuess === "a")) {
             alert("You Win!"); wins ++; guessesLeft = 9; guessesSoFar = [];
        }
        else if (((userGuess === "a") && (computerGuess === "b")) || 
                ((userGuess === "a") && (computerGuess === "c")) || 
                ((userGuess === "a") && (computerGuess === "d")) || 
                ((userGuess === "a") && (computerGuess === "e")) || 
                ((userGuess === "a") && (computerGuess === "f")) || 
                ((userGuess === "a") && (computerGuess === "g")) || 
                ((userGuess === "a") && (computerGuess === "h")) || 
                ((userGuess === "a") && (computerGuess === "i")) || 
                ((userGuess === "a") && (computerGuess === "j")) || 
                ((userGuess === "a") && (computerGuess === "k")) || 
                ((userGuess === "a") && (computerGuess === "l")) || 
                ((userGuess === "a") && (computerGuess === "m")) || 
                ((userGuess === "a") && (computerGuess === "n")) || 
                ((userGuess === "a") && (computerGuess === "o")) || 
                ((userGuess === "a") && (computerGuess === "p")) || 
                ((userGuess === "a") && (computerGuess === "q")) || 
                ((userGuess === "a") && (computerGuess === "r")) || 
                ((userGuess === "a") && (computerGuess === "s")) || 
                ((userGuess === "a") && (computerGuess === "t")) || 
                ((userGuess === "a") && (computerGuess === "u")) || 
                ((userGuess === "a") && (computerGuess === "v")) || 
                ((userGuess === "a") && (computerGuess === "w")) || 
                ((userGuess === "a") && (computerGuess === "x")) || 
                ((userGuess === "a") && (computerGuess === "y")) || 
                ((userGuess === "a") && (computerGuess === "z"))) {
          // alert("Nope!  Try Again!");
          guessesLeft --; 
        }

        if ((userGuess === "b") && (computerGuess === "b")) {
             alert("You Win!"); wins ++; guessesLeft = 9; guessesSoFar = [];
        }
        else if (((userGuess === "b") && (computerGuess === "a")) || 
                ((userGuess === "b") && (computerGuess === "c")) || 
                ((userGuess === "b") && (computerGuess === "d")) || 
                ((userGuess === "b") && (computerGuess === "e")) || 
                ((userGuess === "b") && (computerGuess === "f")) || 
                ((userGuess === "b") && (computerGuess === "g")) || 
                ((userGuess === "b") && (computerGuess === "h")) || 
                ((userGuess === "b") && (computerGuess === "i")) || 
                ((userGuess === "b") && (computerGuess === "j")) || 
                ((userGuess === "b") && (computerGuess === "k")) || 
                ((userGuess === "b") && (computerGuess === "l")) || 
                ((userGuess === "b") && (computerGuess === "m")) || 
                ((userGuess === "b") && (computerGuess === "n")) || 
                ((userGuess === "b") && (computerGuess === "o")) || 
                ((userGuess === "b") && (computerGuess === "p")) || 
                ((userGuess === "b") && (computerGuess === "q")) || 
                ((userGuess === "b") && (computerGuess === "r")) || 
                ((userGuess === "b") && (computerGuess === "s")) || 
                ((userGuess === "b") && (computerGuess === "t")) || 
                ((userGuess === "b") && (computerGuess === "u")) || 
                ((userGuess === "b") && (computerGuess === "v")) || 
                ((userGuess === "b") && (computerGuess === "w")) || 
                ((userGuess === "b") && (computerGuess === "x")) || 
                ((userGuess === "b") && (computerGuess === "y")) || 
                ((userGuess === "b") && (computerGuess === "z"))) {
          // alert("Nope!  Try Again!");
          guessesLeft --; 
        }

        if ((userGuess === "c") && (computerGuess === "c")) {
             wins ++; alert("You Win!"); guessesLeft = 9; guessesSoFar = [];
        }
        else if (((userGuess === "c") && (computerGuess === "b")) || 
                ((userGuess === "c") && (computerGuess === "a")) || 
                ((userGuess === "c") && (computerGuess === "d")) || 
                ((userGuess === "c") && (computerGuess === "e")) || 
                ((userGuess === "c") && (computerGuess === "f")) || 
                ((userGuess === "c") && (computerGuess === "g")) || 
                ((userGuess === "c") && (computerGuess === "h")) || 
                ((userGuess === "c") && (computerGuess === "i")) || 
                ((userGuess === "c") && (computerGuess === "j")) || 
                ((userGuess === "c") && (computerGuess === "k")) || 
                ((userGuess === "c") && (computerGuess === "l")) || 
                ((userGuess === "c") && (computerGuess === "m")) || 
                ((userGuess === "c") && (computerGuess === "n")) || 
                ((userGuess === "c") && (computerGuess === "o")) || 
                ((userGuess === "c") && (computerGuess === "p")) || 
                ((userGuess === "c") && (computerGuess === "q")) || 
                ((userGuess === "c") && (computerGuess === "r")) || 
                ((userGuess === "c") && (computerGuess === "s")) || 
                ((userGuess === "c") && (computerGuess === "t")) || 
                ((userGuess === "c") && (computerGuess === "u")) || 
                ((userGuess === "c") && (computerGuess === "v")) || 
                ((userGuess === "c") && (computerGuess === "w")) || 
                ((userGuess === "c") && (computerGuess === "x")) || 
                ((userGuess === "c") && (computerGuess === "y")) || 
                ((userGuess === "c") && (computerGuess === "z"))) {
          // alert("Nope!  Try Again!");
          guessesLeft --; 
        }

         if ((userGuess === "d") && (computerGuess === "d")) {
             wins ++; alert("You Win!"); guessesLeft = 9; guessesSoFar = [];
        }
        else if (((userGuess === "d") && (computerGuess === "a")) || 
                ((userGuess === "d") && (computerGuess === "b")) || 
                ((userGuess === "d") && (computerGuess === "c")) || 
                ((userGuess === "d") && (computerGuess === "e")) || 
                ((userGuess === "d") && (computerGuess === "f")) || 
                ((userGuess === "d") && (computerGuess === "g")) || 
                ((userGuess === "d") && (computerGuess === "h")) || 
                ((userGuess === "d") && (computerGuess === "i")) || 
                ((userGuess === "d") && (computerGuess === "j")) || 
                ((userGuess === "d") && (computerGuess === "k")) || 
                ((userGuess === "d") && (computerGuess === "l")) || 
                ((userGuess === "d") && (computerGuess === "m")) || 
                ((userGuess === "d") && (computerGuess === "n")) || 
                ((userGuess === "d") && (computerGuess === "o")) || 
                ((userGuess === "d") && (computerGuess === "p")) || 
                ((userGuess === "d") && (computerGuess === "q")) || 
                ((userGuess === "d") && (computerGuess === "r")) || 
                ((userGuess === "d") && (computerGuess === "s")) || 
                ((userGuess === "d") && (computerGuess === "t")) || 
                ((userGuess === "d") && (computerGuess === "u")) || 
                ((userGuess === "d") && (computerGuess === "v")) || 
                ((userGuess === "d") && (computerGuess === "w")) || 
                ((userGuess === "d") && (computerGuess === "x")) || 
                ((userGuess === "d") && (computerGuess === "y")) || 
                ((userGuess === "d") && (computerGuess === "z"))) {
          // alert("Nope!  Try Again!");
          guessesLeft --; 
        }

        if ((userGuess === "e") && (computerGuess === "e")) {
             wins ++; alert("You Win!"); guessesLeft = 9; guessesSoFar = [];
        }
        else if (((userGuess === "e") && (computerGuess === "a")) || 
                ((userGuess === "e") && (computerGuess === "b")) || 
                ((userGuess === "e") && (computerGuess === "c")) || 
                ((userGuess === "e") && (computerGuess === "d")) || 
                ((userGuess === "e") && (computerGuess === "f")) || 
                ((userGuess === "e") && (computerGuess === "g")) || 
                ((userGuess === "e") && (computerGuess === "h")) || 
                ((userGuess === "e") && (computerGuess === "i")) || 
                ((userGuess === "e") && (computerGuess === "j")) || 
                ((userGuess === "e") && (computerGuess === "k")) || 
                ((userGuess === "e") && (computerGuess === "l")) || 
                ((userGuess === "e") && (computerGuess === "m")) || 
                ((userGuess === "e") && (computerGuess === "n")) || 
                ((userGuess === "e") && (computerGuess === "o")) || 
                ((userGuess === "e") && (computerGuess === "p")) || 
                ((userGuess === "e") && (computerGuess === "q")) || 
                ((userGuess === "e") && (computerGuess === "r")) || 
                ((userGuess === "e") && (computerGuess === "s")) || 
                ((userGuess === "e") && (computerGuess === "t")) || 
                ((userGuess === "e") && (computerGuess === "u")) || 
                ((userGuess === "e") && (computerGuess === "v")) || 
                ((userGuess === "e") && (computerGuess === "w")) || 
                ((userGuess === "e") && (computerGuess === "x")) || 
                ((userGuess === "e") && (computerGuess === "y")) || 
                ((userGuess === "e") && (computerGuess === "z"))) {
          // alert("Nope!  Try Again!");
          guessesLeft --; 
        }

        if ((userGuess === "f") && (computerGuess === "f")) {
             wins ++; alert("You Win!"); guessesLeft = 9; guessesSoFar = [];
        }
        else if (((userGuess === "f") && (computerGuess === "a")) || 
                ((userGuess === "f") && (computerGuess === "b")) || 
                ((userGuess === "f") && (computerGuess === "c")) || 
                ((userGuess === "f") && (computerGuess === "d")) || 
                ((userGuess === "f") && (computerGuess === "e")) || 
                ((userGuess === "f") && (computerGuess === "g")) || 
                ((userGuess === "f") && (computerGuess === "h")) || 
                ((userGuess === "f") && (computerGuess === "i")) || 
                ((userGuess === "f") && (computerGuess === "j")) || 
                ((userGuess === "f") && (computerGuess === "k")) || 
                ((userGuess === "f") && (computerGuess === "l")) || 
                ((userGuess === "f") && (computerGuess === "m")) || 
                ((userGuess === "f") && (computerGuess === "n")) || 
                ((userGuess === "f") && (computerGuess === "o")) || 
                ((userGuess === "f") && (computerGuess === "p")) || 
                ((userGuess === "f") && (computerGuess === "q")) || 
                ((userGuess === "f") && (computerGuess === "r")) || 
                ((userGuess === "f") && (computerGuess === "s")) || 
                ((userGuess === "f") && (computerGuess === "t")) || 
                ((userGuess === "f") && (computerGuess === "u")) || 
                ((userGuess === "f") && (computerGuess === "v")) || 
                ((userGuess === "f") && (computerGuess === "w")) || 
                ((userGuess === "f") && (computerGuess === "x")) || 
                ((userGuess === "f") && (computerGuess === "y")) || 
                ((userGuess === "f") && (computerGuess === "z"))) {
          // alert("Nope!  Try Again!");
          guessesLeft --; 
        }

        if ((userGuess === "g") && (computerGuess === "g")) {
             wins ++; alert("You Win!"); guessesLeft = 9; guessesSoFar = [];
        }
        else if (((userGuess === "g") && (computerGuess === "a")) || 
                ((userGuess === "g") && (computerGuess === "b")) || 
                ((userGuess === "g") && (computerGuess === "c")) || 
                ((userGuess === "g") && (computerGuess === "d")) || 
                ((userGuess === "g") && (computerGuess === "e")) || 
                ((userGuess === "g") && (computerGuess === "f")) || 
                ((userGuess === "g") && (computerGuess === "h")) || 
                ((userGuess === "g") && (computerGuess === "i")) || 
                ((userGuess === "g") && (computerGuess === "j")) || 
                ((userGuess === "g") && (computerGuess === "k")) || 
                ((userGuess === "g") && (computerGuess === "l")) || 
                ((userGuess === "g") && (computerGuess === "m")) || 
                ((userGuess === "g") && (computerGuess === "n")) || 
                ((userGuess === "g") && (computerGuess === "o")) || 
                ((userGuess === "g") && (computerGuess === "p")) || 
                ((userGuess === "g") && (computerGuess === "q")) || 
                ((userGuess === "g") && (computerGuess === "r")) || 
                ((userGuess === "g") && (computerGuess === "s")) || 
                ((userGuess === "g") && (computerGuess === "t")) || 
                ((userGuess === "g") && (computerGuess === "u")) || 
                ((userGuess === "g") && (computerGuess === "v")) || 
                ((userGuess === "g") && (computerGuess === "w")) || 
                ((userGuess === "g") && (computerGuess === "x")) || 
                ((userGuess === "g") && (computerGuess === "y")) || 
                ((userGuess === "g") && (computerGuess === "z"))) {
          // alert("Nope!  Try Again!");
          guessesLeft --; 
        }

        if ((userGuess === "h") && (computerGuess === "h")) {
             wins ++; alert("You Win!"); guessesLeft = 9; guessesSoFar = [];
        }
        else if (((userGuess === "h") && (computerGuess === "a")) || 
                ((userGuess === "h") && (computerGuess === "b")) || 
                ((userGuess === "h") && (computerGuess === "c")) || 
                ((userGuess === "h") && (computerGuess === "d")) || 
                ((userGuess === "h") && (computerGuess === "e")) || 
                ((userGuess === "h") && (computerGuess === "f")) || 
                ((userGuess === "h") && (computerGuess === "g")) || 
                ((userGuess === "h") && (computerGuess === "i")) || 
                ((userGuess === "h") && (computerGuess === "j")) || 
                ((userGuess === "h") && (computerGuess === "k")) || 
                ((userGuess === "h") && (computerGuess === "l")) || 
                ((userGuess === "h") && (computerGuess === "m")) || 
                ((userGuess === "h") && (computerGuess === "n")) || 
                ((userGuess === "h") && (computerGuess === "o")) || 
                ((userGuess === "h") && (computerGuess === "p")) || 
                ((userGuess === "h") && (computerGuess === "q")) || 
                ((userGuess === "h") && (computerGuess === "r")) || 
                ((userGuess === "h") && (computerGuess === "s")) || 
                ((userGuess === "h") && (computerGuess === "t")) || 
                ((userGuess === "h") && (computerGuess === "u")) || 
                ((userGuess === "h") && (computerGuess === "v")) || 
                ((userGuess === "h") && (computerGuess === "w")) || 
                ((userGuess === "h") && (computerGuess === "x")) || 
                ((userGuess === "h") && (computerGuess === "y")) || 
                ((userGuess === "h") && (computerGuess === "z"))) {
          // alert("Nope!  Try Again!");
          guessesLeft --; 
        }

        if ((userGuess === "i") && (computerGuess === "i")) {
             wins ++; alert("You Win!"); guessesLeft = 9; guessesSoFar = [];
        }
        else if (((userGuess === "i") && (computerGuess === "a")) || 
                ((userGuess === "i") && (computerGuess === "b")) || 
                ((userGuess === "i") && (computerGuess === "c")) || 
                ((userGuess === "i") && (computerGuess === "d")) || 
                ((userGuess === "i") && (computerGuess === "e")) || 
                ((userGuess === "i") && (computerGuess === "f")) || 
                ((userGuess === "i") && (computerGuess === "g")) || 
                ((userGuess === "i") && (computerGuess === "h")) || 
                ((userGuess === "i") && (computerGuess === "j")) || 
                ((userGuess === "i") && (computerGuess === "k")) || 
                ((userGuess === "i") && (computerGuess === "l")) || 
                ((userGuess === "i") && (computerGuess === "m")) || 
                ((userGuess === "i") && (computerGuess === "n")) || 
                ((userGuess === "i") && (computerGuess === "o")) || 
                ((userGuess === "i") && (computerGuess === "p")) || 
                ((userGuess === "i") && (computerGuess === "q")) || 
                ((userGuess === "i") && (computerGuess === "r")) || 
                ((userGuess === "i") && (computerGuess === "s")) || 
                ((userGuess === "i") && (computerGuess === "t")) || 
                ((userGuess === "i") && (computerGuess === "u")) || 
                ((userGuess === "i") && (computerGuess === "v")) || 
                ((userGuess === "i") && (computerGuess === "w")) || 
                ((userGuess === "i") && (computerGuess === "x")) || 
                ((userGuess === "i") && (computerGuess === "y")) || 
                ((userGuess === "i") && (computerGuess === "z"))) {
          // alert("Nope!  Try Again!");
          guessesLeft --; 
        }

        if ((userGuess === "j") && (computerGuess === "j")) {
             wins ++; alert("You Win!"); guessesLeft = 9; guessesSoFar = [];
        }
        else if (((userGuess === "j") && (computerGuess === "a")) || 
                ((userGuess === "j") && (computerGuess === "b")) || 
                ((userGuess === "j") && (computerGuess === "c")) || 
                ((userGuess === "j") && (computerGuess === "d")) || 
                ((userGuess === "j") && (computerGuess === "e")) || 
                ((userGuess === "j") && (computerGuess === "f")) || 
                ((userGuess === "j") && (computerGuess === "g")) || 
                ((userGuess === "j") && (computerGuess === "h")) || 
                ((userGuess === "j") && (computerGuess === "i")) || 
                ((userGuess === "j") && (computerGuess === "k")) || 
                ((userGuess === "j") && (computerGuess === "l")) || 
                ((userGuess === "j") && (computerGuess === "m")) || 
                ((userGuess === "j") && (computerGuess === "n")) || 
                ((userGuess === "j") && (computerGuess === "o")) || 
                ((userGuess === "j") && (computerGuess === "p")) || 
                ((userGuess === "j") && (computerGuess === "q")) || 
                ((userGuess === "j") && (computerGuess === "r")) || 
                ((userGuess === "j") && (computerGuess === "s")) || 
                ((userGuess === "j") && (computerGuess === "t")) || 
                ((userGuess === "j") && (computerGuess === "u")) || 
                ((userGuess === "j") && (computerGuess === "v")) || 
                ((userGuess === "j") && (computerGuess === "w")) || 
                ((userGuess === "j") && (computerGuess === "x")) || 
                ((userGuess === "j") && (computerGuess === "y")) || 
                ((userGuess === "j") && (computerGuess === "z"))) {
          // alert("Nope!  Try Again!");
          guessesLeft --; 
        }


        if ((userGuess === "j") && (computerGuess === "j")) {
             wins ++; alert("You Win!"); guessesLeft = 9; guessesSoFar = [];
        }
        else if (((userGuess === "j") && (computerGuess === "a")) || 
                ((userGuess === "j") && (computerGuess === "b")) || 
                ((userGuess === "j") && (computerGuess === "c")) || 
                ((userGuess === "j") && (computerGuess === "d")) || 
                ((userGuess === "j") && (computerGuess === "e")) || 
                ((userGuess === "j") && (computerGuess === "f")) || 
                ((userGuess === "j") && (computerGuess === "g")) || 
                ((userGuess === "j") && (computerGuess === "h")) || 
                ((userGuess === "j") && (computerGuess === "i")) || 
                ((userGuess === "j") && (computerGuess === "k")) || 
                ((userGuess === "j") && (computerGuess === "l")) || 
                ((userGuess === "j") && (computerGuess === "m")) || 
                ((userGuess === "j") && (computerGuess === "n")) || 
                ((userGuess === "j") && (computerGuess === "o")) || 
                ((userGuess === "j") && (computerGuess === "p")) || 
                ((userGuess === "j") && (computerGuess === "q")) || 
                ((userGuess === "j") && (computerGuess === "r")) || 
                ((userGuess === "j") && (computerGuess === "s")) || 
                ((userGuess === "j") && (computerGuess === "t")) || 
                ((userGuess === "j") && (computerGuess === "u")) || 
                ((userGuess === "j") && (computerGuess === "v")) || 
                ((userGuess === "j") && (computerGuess === "w")) || 
                ((userGuess === "j") && (computerGuess === "x")) || 
                ((userGuess === "j") && (computerGuess === "y")) || 
                ((userGuess === "j") && (computerGuess === "z"))) {
          // alert("Nope!  Try Again!");
          guessesLeft --; 
        }

        if ((userGuess === "k") && (computerGuess === "k")) {
             wins ++; alert("You Win!"); guessesLeft = 9; guessesSoFar = [];
        }
        else if (((userGuess === "k") && (computerGuess === "a")) || 
                ((userGuess === "k") && (computerGuess === "b")) || 
                ((userGuess === "k") && (computerGuess === "c")) || 
                ((userGuess === "k") && (computerGuess === "d")) || 
                ((userGuess === "k") && (computerGuess === "e")) || 
                ((userGuess === "k") && (computerGuess === "f")) || 
                ((userGuess === "k") && (computerGuess === "g")) || 
                ((userGuess === "k") && (computerGuess === "h")) || 
                ((userGuess === "k") && (computerGuess === "i")) || 
                ((userGuess === "k") && (computerGuess === "j")) || 
                ((userGuess === "k") && (computerGuess === "l")) || 
                ((userGuess === "k") && (computerGuess === "m")) || 
                ((userGuess === "k") && (computerGuess === "n")) || 
                ((userGuess === "k") && (computerGuess === "o")) || 
                ((userGuess === "k") && (computerGuess === "p")) || 
                ((userGuess === "k") && (computerGuess === "q")) || 
                ((userGuess === "k") && (computerGuess === "r")) || 
                ((userGuess === "k") && (computerGuess === "s")) || 
                ((userGuess === "k") && (computerGuess === "t")) || 
                ((userGuess === "k") && (computerGuess === "u")) || 
                ((userGuess === "k") && (computerGuess === "v")) || 
                ((userGuess === "k") && (computerGuess === "w")) || 
                ((userGuess === "k") && (computerGuess === "x")) || 
                ((userGuess === "k") && (computerGuess === "y")) || 
                ((userGuess === "k") && (computerGuess === "z"))) {
          // alert("Nope!  Try Again!");
          guessesLeft --; 
        }

        if ((userGuess === "l") && (computerGuess === "l")) {
             wins ++; alert("You Win!"); guessesLeft = 9; guessesSoFar = [];
        }
        else if (((userGuess === "l") && (computerGuess === "a")) || 
                ((userGuess === "l") && (computerGuess === "b")) || 
                ((userGuess === "l") && (computerGuess === "c")) || 
                ((userGuess === "l") && (computerGuess === "d")) || 
                ((userGuess === "l") && (computerGuess === "e")) || 
                ((userGuess === "l") && (computerGuess === "f")) || 
                ((userGuess === "l") && (computerGuess === "g")) || 
                ((userGuess === "l") && (computerGuess === "h")) || 
                ((userGuess === "l") && (computerGuess === "i")) || 
                ((userGuess === "l") && (computerGuess === "j")) || 
                ((userGuess === "l") && (computerGuess === "k")) || 
                ((userGuess === "l") && (computerGuess === "m")) || 
                ((userGuess === "l") && (computerGuess === "n")) || 
                ((userGuess === "l") && (computerGuess === "o")) || 
                ((userGuess === "l") && (computerGuess === "p")) || 
                ((userGuess === "l") && (computerGuess === "q")) || 
                ((userGuess === "l") && (computerGuess === "r")) || 
                ((userGuess === "l") && (computerGuess === "s")) || 
                ((userGuess === "l") && (computerGuess === "t")) || 
                ((userGuess === "l") && (computerGuess === "u")) || 
                ((userGuess === "l") && (computerGuess === "v")) || 
                ((userGuess === "l") && (computerGuess === "w")) || 
                ((userGuess === "l") && (computerGuess === "x")) || 
                ((userGuess === "l") && (computerGuess === "y")) || 
                ((userGuess === "l") && (computerGuess === "z"))) {
          // alert("Nope!  Try Again!");
          guessesLeft --; 
        }

        if ((userGuess === "m") && (computerGuess === "m")) {
             wins ++; alert("You Win!"); guessesLeft === 9; guessesSoFar = [];
        }
        else if (((userGuess === "m") && (computerGuess === "a")) || 
                ((userGuess === "m") && (computerGuess === "b")) || 
                ((userGuess === "m") && (computerGuess === "c")) || 
                ((userGuess === "m") && (computerGuess === "d")) || 
                ((userGuess === "m") && (computerGuess === "e")) || 
                ((userGuess === "m") && (computerGuess === "f")) || 
                ((userGuess === "m") && (computerGuess === "g")) || 
                ((userGuess === "m") && (computerGuess === "h")) || 
                ((userGuess === "m") && (computerGuess === "i")) || 
                ((userGuess === "m") && (computerGuess === "j")) || 
                ((userGuess === "m") && (computerGuess === "k")) || 
                ((userGuess === "m") && (computerGuess === "l")) || 
                ((userGuess === "m") && (computerGuess === "n")) || 
                ((userGuess === "m") && (computerGuess === "o")) || 
                ((userGuess === "m") && (computerGuess === "p")) || 
                ((userGuess === "m") && (computerGuess === "q")) || 
                ((userGuess === "m") && (computerGuess === "r")) || 
                ((userGuess === "m") && (computerGuess === "s")) || 
                ((userGuess === "m") && (computerGuess === "t")) || 
                ((userGuess === "m") && (computerGuess === "u")) || 
                ((userGuess === "m") && (computerGuess === "v")) || 
                ((userGuess === "m") && (computerGuess === "w")) || 
                ((userGuess === "m") && (computerGuess === "x")) || 
                ((userGuess === "m") && (computerGuess === "y")) || 
                ((userGuess === "m") && (computerGuess === "z"))) {
          // alert("Nope!  Try Again!");
          guessesLeft --; 
        }

        if ((userGuess === "n") && (computerGuess === "n")) {
             wins ++; alert("You Win!"); guessesLeft = 9; guessesSoFar = [];
        }
        else if (((userGuess === "n") && (computerGuess === "a")) || 
                ((userGuess === "n") && (computerGuess === "b")) || 
                ((userGuess === "n") && (computerGuess === "c")) || 
                ((userGuess === "n") && (computerGuess === "d")) || 
                ((userGuess === "n") && (computerGuess === "e")) || 
                ((userGuess === "n") && (computerGuess === "f")) || 
                ((userGuess === "n") && (computerGuess === "g")) || 
                ((userGuess === "n") && (computerGuess === "h")) || 
                ((userGuess === "n") && (computerGuess === "i")) || 
                ((userGuess === "n") && (computerGuess === "j")) || 
                ((userGuess === "n") && (computerGuess === "k")) || 
                ((userGuess === "n") && (computerGuess === "l")) || 
                ((userGuess === "n") && (computerGuess === "m")) || 
                ((userGuess === "n") && (computerGuess === "o")) || 
                ((userGuess === "n") && (computerGuess === "p")) || 
                ((userGuess === "n") && (computerGuess === "q")) || 
                ((userGuess === "n") && (computerGuess === "r")) || 
                ((userGuess === "n") && (computerGuess === "s")) || 
                ((userGuess === "n") && (computerGuess === "t")) || 
                ((userGuess === "n") && (computerGuess === "u")) || 
                ((userGuess === "n") && (computerGuess === "v")) || 
                ((userGuess === "n") && (computerGuess === "w")) || 
                ((userGuess === "n") && (computerGuess === "x")) || 
                ((userGuess === "n") && (computerGuess === "y")) || 
                ((userGuess === "n") && (computerGuess === "z"))) {
          // alert("Nope!  Try Again!");
          guessesLeft --; 
        }

        if ((userGuess === "o") && (computerGuess === "o")) {
             wins ++; alert("You Win!"); guessesLeft = 9; guessesSoFar = [];
        }
        else if (((userGuess === "o") && (computerGuess === "a")) || 
                ((userGuess === "o") && (computerGuess === "b")) || 
                ((userGuess === "o") && (computerGuess === "c")) || 
                ((userGuess === "o") && (computerGuess === "d")) || 
                ((userGuess === "o") && (computerGuess === "e")) || 
                ((userGuess === "o") && (computerGuess === "f")) || 
                ((userGuess === "o") && (computerGuess === "g")) || 
                ((userGuess === "o") && (computerGuess === "h")) || 
                ((userGuess === "o") && (computerGuess === "i")) || 
                ((userGuess === "o") && (computerGuess === "j")) || 
                ((userGuess === "o") && (computerGuess === "k")) || 
                ((userGuess === "o") && (computerGuess === "l")) || 
                ((userGuess === "o") && (computerGuess === "m")) || 
                ((userGuess === "o") && (computerGuess === "n")) || 
                ((userGuess === "o") && (computerGuess === "p")) || 
                ((userGuess === "o") && (computerGuess === "q")) || 
                ((userGuess === "o") && (computerGuess === "r")) || 
                ((userGuess === "o") && (computerGuess === "s")) || 
                ((userGuess === "o") && (computerGuess === "t")) || 
                ((userGuess === "o") && (computerGuess === "u")) || 
                ((userGuess === "o") && (computerGuess === "v")) || 
                ((userGuess === "o") && (computerGuess === "w")) || 
                ((userGuess === "o") && (computerGuess === "x")) || 
                ((userGuess === "o") && (computerGuess === "y")) || 
                ((userGuess === "o") && (computerGuess === "z"))) {
          // alert("Nope!  Try Again!");
          guessesLeft --; 
        }

        if ((userGuess === "p") && (computerGuess === "p")) {
             wins ++; alert("You Win!"); guessesLeft = 9; guessesSoFar = [];
        }
        else if (((userGuess === "p") && (computerGuess === "a")) || 
                ((userGuess === "p") && (computerGuess === "b")) || 
                ((userGuess === "p") && (computerGuess === "c")) || 
                ((userGuess === "p") && (computerGuess === "d")) || 
                ((userGuess === "p") && (computerGuess === "e")) || 
                ((userGuess === "p") && (computerGuess === "f")) || 
                ((userGuess === "p") && (computerGuess === "g")) || 
                ((userGuess === "p") && (computerGuess === "h")) || 
                ((userGuess === "p") && (computerGuess === "i")) || 
                ((userGuess === "p") && (computerGuess === "j")) || 
                ((userGuess === "p") && (computerGuess === "k")) || 
                ((userGuess === "p") && (computerGuess === "l")) || 
                ((userGuess === "p") && (computerGuess === "m")) || 
                ((userGuess === "p") && (computerGuess === "n")) || 
                ((userGuess === "p") && (computerGuess === "o")) || 
                ((userGuess === "p") && (computerGuess === "q")) || 
                ((userGuess === "p") && (computerGuess === "r")) || 
                ((userGuess === "p") && (computerGuess === "s")) || 
                ((userGuess === "p") && (computerGuess === "t")) || 
                ((userGuess === "p") && (computerGuess === "u")) || 
                ((userGuess === "p") && (computerGuess === "v")) || 
                ((userGuess === "p") && (computerGuess === "w")) || 
                ((userGuess === "p") && (computerGuess === "x")) || 
                ((userGuess === "p") && (computerGuess === "y")) || 
                ((userGuess === "p") && (computerGuess === "z"))) {
          // alert("Nope!  Try Again!");
          guessesLeft --; 
        }

        if ((userGuess === "q") && (computerGuess === "q")) {
             wins ++; alert("You Win!"); guessesLeft = 9; guessesSoFar = [];
        }
        else if (((userGuess === "q") && (computerGuess === "a")) || 
                ((userGuess === "q") && (computerGuess === "b")) || 
                ((userGuess === "q") && (computerGuess === "c")) || 
                ((userGuess === "q") && (computerGuess === "d")) || 
                ((userGuess === "q") && (computerGuess === "e")) || 
                ((userGuess === "q") && (computerGuess === "f")) || 
                ((userGuess === "q") && (computerGuess === "g")) || 
                ((userGuess === "q") && (computerGuess === "h")) || 
                ((userGuess === "q") && (computerGuess === "i")) || 
                ((userGuess === "q") && (computerGuess === "j")) || 
                ((userGuess === "q") && (computerGuess === "k")) || 
                ((userGuess === "q") && (computerGuess === "l")) || 
                ((userGuess === "q") && (computerGuess === "m")) || 
                ((userGuess === "q") && (computerGuess === "n")) || 
                ((userGuess === "q") && (computerGuess === "o")) || 
                ((userGuess === "q") && (computerGuess === "p")) || 
                ((userGuess === "q") && (computerGuess === "r")) || 
                ((userGuess === "q") && (computerGuess === "s")) || 
                ((userGuess === "q") && (computerGuess === "t")) || 
                ((userGuess === "q") && (computerGuess === "u")) || 
                ((userGuess === "q") && (computerGuess === "v")) || 
                ((userGuess === "q") && (computerGuess === "w")) || 
                ((userGuess === "q") && (computerGuess === "x")) || 
                ((userGuess === "q") && (computerGuess === "y")) || 
                ((userGuess === "q") && (computerGuess === "z"))) {
          // alert("Nope!  Try Again!");
          guessesLeft --; 
        }

        if ((userGuess === "r") && (computerGuess === "r")) {
             wins ++; alert("You Win!"); guessesLeft = 9; guessesSoFar = [];
        }
        else if (((userGuess === "r") && (computerGuess === "a")) || 
                ((userGuess === "r") && (computerGuess === "b")) || 
                ((userGuess === "r") && (computerGuess === "c")) || 
                ((userGuess === "r") && (computerGuess === "d")) || 
                ((userGuess === "r") && (computerGuess === "e")) || 
                ((userGuess === "r") && (computerGuess === "f")) || 
                ((userGuess === "r") && (computerGuess === "g")) || 
                ((userGuess === "r") && (computerGuess === "h")) || 
                ((userGuess === "r") && (computerGuess === "i")) || 
                ((userGuess === "r") && (computerGuess === "j")) || 
                ((userGuess === "r") && (computerGuess === "k")) || 
                ((userGuess === "r") && (computerGuess === "l")) || 
                ((userGuess === "r") && (computerGuess === "m")) || 
                ((userGuess === "r") && (computerGuess === "n")) || 
                ((userGuess === "r") && (computerGuess === "o")) || 
                ((userGuess === "r") && (computerGuess === "p")) || 
                ((userGuess === "r") && (computerGuess === "q")) || 
                ((userGuess === "r") && (computerGuess === "s")) || 
                ((userGuess === "r") && (computerGuess === "t")) || 
                ((userGuess === "r") && (computerGuess === "u")) || 
                ((userGuess === "r") && (computerGuess === "v")) || 
                ((userGuess === "r") && (computerGuess === "w")) || 
                ((userGuess === "r") && (computerGuess === "x")) || 
                ((userGuess === "r") && (computerGuess === "y")) || 
                ((userGuess === "r") && (computerGuess === "z"))) {
          // alert("Nope!  Try Again!");
          guessesLeft --; 
        }

        if ((userGuess === "s") && (computerGuess === "s")) {
             wins ++; alert("You Win!"); guessesLeft = 9; guessesSoFar = [];
        }
        else if (((userGuess === "s") && (computerGuess === "a")) || 
                ((userGuess === "s") && (computerGuess === "b")) || 
                ((userGuess === "s") && (computerGuess === "c")) || 
                ((userGuess === "s") && (computerGuess === "d")) || 
                ((userGuess === "s") && (computerGuess === "e")) || 
                ((userGuess === "s") && (computerGuess === "f")) || 
                ((userGuess === "s") && (computerGuess === "g")) || 
                ((userGuess === "s") && (computerGuess === "h")) || 
                ((userGuess === "s") && (computerGuess === "i")) || 
                ((userGuess === "s") && (computerGuess === "j")) || 
                ((userGuess === "s") && (computerGuess === "k")) || 
                ((userGuess === "s") && (computerGuess === "l")) || 
                ((userGuess === "s") && (computerGuess === "m")) || 
                ((userGuess === "s") && (computerGuess === "n")) || 
                ((userGuess === "s") && (computerGuess === "o")) || 
                ((userGuess === "s") && (computerGuess === "p")) || 
                ((userGuess === "s") && (computerGuess === "q")) || 
                ((userGuess === "s") && (computerGuess === "r")) || 
                ((userGuess === "s") && (computerGuess === "t")) || 
                ((userGuess === "s") && (computerGuess === "u")) || 
                ((userGuess === "s") && (computerGuess === "v")) || 
                ((userGuess === "s") && (computerGuess === "w")) || 
                ((userGuess === "s") && (computerGuess === "x")) || 
                ((userGuess === "s") && (computerGuess === "y")) || 
                ((userGuess === "s") && (computerGuess === "z"))) {
          // alert("Nope!  Try Again!");
          guessesLeft --; 
        }

        if ((userGuess === "t") && (computerGuess === "t")) {
             wins ++; alert("You Win!"); guessesLeft = 9; guessesSoFar = [];
        }
        else if (((userGuess === "t") && (computerGuess === "a")) || 
                ((userGuess === "t") && (computerGuess === "b")) || 
                ((userGuess === "t") && (computerGuess === "c")) || 
                ((userGuess === "t") && (computerGuess === "d")) || 
                ((userGuess === "t") && (computerGuess === "e")) || 
                ((userGuess === "t") && (computerGuess === "f")) || 
                ((userGuess === "t") && (computerGuess === "g")) || 
                ((userGuess === "t") && (computerGuess === "h")) || 
                ((userGuess === "t") && (computerGuess === "i")) || 
                ((userGuess === "t") && (computerGuess === "j")) || 
                ((userGuess === "t") && (computerGuess === "k")) || 
                ((userGuess === "t") && (computerGuess === "l")) || 
                ((userGuess === "t") && (computerGuess === "m")) || 
                ((userGuess === "t") && (computerGuess === "n")) || 
                ((userGuess === "t") && (computerGuess === "o")) || 
                ((userGuess === "t") && (computerGuess === "p")) || 
                ((userGuess === "t") && (computerGuess === "q")) || 
                ((userGuess === "t") && (computerGuess === "r")) || 
                ((userGuess === "t") && (computerGuess === "s")) || 
                ((userGuess === "t") && (computerGuess === "u")) || 
                ((userGuess === "t") && (computerGuess === "v")) || 
                ((userGuess === "t") && (computerGuess === "w")) || 
                ((userGuess === "t") && (computerGuess === "x")) || 
                ((userGuess === "t") && (computerGuess === "y")) || 
                ((userGuess === "t") && (computerGuess === "z"))) {
          // alert("Nope!  Try Again!");
          guessesLeft --; 
        }

        if ((userGuess === "u") && (computerGuess === "u")) {
             wins ++; alert("You Win!"); guessesLeft = 9; guessesSoFar = [];
        }
        else if (((userGuess === "u") && (computerGuess === "a")) || 
                ((userGuess === "u") && (computerGuess === "b")) || 
                ((userGuess === "u") && (computerGuess === "c")) || 
                ((userGuess === "u") && (computerGuess === "d")) || 
                ((userGuess === "u") && (computerGuess === "e")) || 
                ((userGuess === "u") && (computerGuess === "f")) || 
                ((userGuess === "u") && (computerGuess === "g")) || 
                ((userGuess === "u") && (computerGuess === "h")) || 
                ((userGuess === "u") && (computerGuess === "i")) || 
                ((userGuess === "u") && (computerGuess === "j")) || 
                ((userGuess === "u") && (computerGuess === "k")) || 
                ((userGuess === "u") && (computerGuess === "l")) || 
                ((userGuess === "u") && (computerGuess === "m")) || 
                ((userGuess === "u") && (computerGuess === "n")) || 
                ((userGuess === "u") && (computerGuess === "o")) || 
                ((userGuess === "u") && (computerGuess === "p")) || 
                ((userGuess === "u") && (computerGuess === "q")) || 
                ((userGuess === "u") && (computerGuess === "r")) || 
                ((userGuess === "u") && (computerGuess === "s")) || 
                ((userGuess === "u") && (computerGuess === "t")) || 
                ((userGuess === "u") && (computerGuess === "v")) || 
                ((userGuess === "u") && (computerGuess === "w")) || 
                ((userGuess === "u") && (computerGuess === "x")) || 
                ((userGuess === "u") && (computerGuess === "y")) || 
                ((userGuess === "u") && (computerGuess === "z"))) {
          // alert("Nope!  Try Again!");
          guessesLeft --; 
        }

         if ((userGuess === "v") && (computerGuess === "v")) {
             wins ++; alert("You Win!"); guessesLeft = 9; guessesSoFar = [];
        }
        else if (((userGuess === "v") && (computerGuess === "a")) || 
                ((userGuess === "v") && (computerGuess === "b")) || 
                ((userGuess === "v") && (computerGuess === "c")) || 
                ((userGuess === "v") && (computerGuess === "d")) || 
                ((userGuess === "v") && (computerGuess === "e")) || 
                ((userGuess === "v") && (computerGuess === "f")) || 
                ((userGuess === "v") && (computerGuess === "g")) || 
                ((userGuess === "v") && (computerGuess === "h")) || 
                ((userGuess === "v") && (computerGuess === "i")) || 
                ((userGuess === "v") && (computerGuess === "j")) || 
                ((userGuess === "v") && (computerGuess === "k")) || 
                ((userGuess === "v") && (computerGuess === "l")) || 
                ((userGuess === "v") && (computerGuess === "m")) || 
                ((userGuess === "v") && (computerGuess === "n")) || 
                ((userGuess === "v") && (computerGuess === "o")) || 
                ((userGuess === "v") && (computerGuess === "p")) || 
                ((userGuess === "v") && (computerGuess === "q")) || 
                ((userGuess === "v") && (computerGuess === "r")) || 
                ((userGuess === "v") && (computerGuess === "s")) || 
                ((userGuess === "v") && (computerGuess === "t")) || 
                ((userGuess === "v") && (computerGuess === "u")) || 
                ((userGuess === "v") && (computerGuess === "w")) || 
                ((userGuess === "v") && (computerGuess === "x")) || 
                ((userGuess === "v") && (computerGuess === "y")) || 
                ((userGuess === "v") && (computerGuess === "z"))) {
          // alert("Nope!  Try Again!");
          guessesLeft --; 
        }

         if ((userGuess === "w") && (computerGuess === "w")) {
             wins ++; alert("You Win!"); guessesLeft = 9; guessesSoFar == [];
        }
        else if (((userGuess === "w") && (computerGuess === "a")) || 
                ((userGuess === "w") && (computerGuess === "b")) || 
                ((userGuess === "w") && (computerGuess === "c")) || 
                ((userGuess === "w") && (computerGuess === "d")) || 
                ((userGuess === "w") && (computerGuess === "e")) || 
                ((userGuess === "w") && (computerGuess === "f")) || 
                ((userGuess === "w") && (computerGuess === "g")) || 
                ((userGuess === "w") && (computerGuess === "h")) || 
                ((userGuess === "w") && (computerGuess === "i")) || 
                ((userGuess === "w") && (computerGuess === "j")) || 
                ((userGuess === "w") && (computerGuess === "k")) || 
                ((userGuess === "w") && (computerGuess === "l")) || 
                ((userGuess === "w") && (computerGuess === "m")) || 
                ((userGuess === "w") && (computerGuess === "n")) || 
                ((userGuess === "w") && (computerGuess === "o")) || 
                ((userGuess === "w") && (computerGuess === "p")) || 
                ((userGuess === "w") && (computerGuess === "q")) || 
                ((userGuess === "w") && (computerGuess === "r")) || 
                ((userGuess === "w") && (computerGuess === "s")) || 
                ((userGuess === "w") && (computerGuess === "t")) || 
                ((userGuess === "w") && (computerGuess === "u")) || 
                ((userGuess === "w") && (computerGuess === "v")) || 
                ((userGuess === "w") && (computerGuess === "x")) || 
                ((userGuess === "w") && (computerGuess === "y")) || 
                ((userGuess === "w") && (computerGuess === "z"))) {
          // alert("Nope!  Try Again!");
          guessesLeft --; 
        }

        if ((userGuess === "x") && (computerGuess === "x")) {
             wins ++; alert("You Win!"); guessesLeft = 9; guessesSoFar = [];
        }
        else if (((userGuess === "x") && (computerGuess === "a")) || 
                ((userGuess === "x") && (computerGuess === "b")) || 
                ((userGuess === "x") && (computerGuess === "c")) || 
                ((userGuess === "x") && (computerGuess === "d")) || 
                ((userGuess === "x") && (computerGuess === "e")) || 
                ((userGuess === "x") && (computerGuess === "f")) || 
                ((userGuess === "x") && (computerGuess === "g")) || 
                ((userGuess === "x") && (computerGuess === "h")) || 
                ((userGuess === "x") && (computerGuess === "i")) || 
                ((userGuess === "x") && (computerGuess === "j")) || 
                ((userGuess === "x") && (computerGuess === "k")) || 
                ((userGuess === "x") && (computerGuess === "l")) || 
                ((userGuess === "x") && (computerGuess === "m")) || 
                ((userGuess === "x") && (computerGuess === "n")) || 
                ((userGuess === "x") && (computerGuess === "o")) || 
                ((userGuess === "x") && (computerGuess === "p")) || 
                ((userGuess === "x") && (computerGuess === "q")) || 
                ((userGuess === "x") && (computerGuess === "r")) || 
                ((userGuess === "x") && (computerGuess === "s")) || 
                ((userGuess === "x") && (computerGuess === "t")) || 
                ((userGuess === "x") && (computerGuess === "u")) || 
                ((userGuess === "x") && (computerGuess === "v")) || 
                ((userGuess === "x") && (computerGuess === "w")) || 
                ((userGuess === "x") && (computerGuess === "y")) || 
                ((userGuess === "x") && (computerGuess === "z"))) {
          // alert("Nope!  Try Again!");
          guessesLeft --; 
        }

        if ((userGuess === "y") && (computerGuess === "y")) {
             wins ++; alert("You Win!"); guessesLeft = 9; guessesSoFar = [];
        }
        else if (((userGuess === "y") && (computerGuess === "a")) || 
                ((userGuess === "y") && (computerGuess === "b")) || 
                ((userGuess === "y") && (computerGuess === "c")) || 
                ((userGuess === "y") && (computerGuess === "d")) || 
                ((userGuess === "y") && (computerGuess === "e")) || 
                ((userGuess === "y") && (computerGuess === "f")) || 
                ((userGuess === "y") && (computerGuess === "g")) || 
                ((userGuess === "y") && (computerGuess === "h")) || 
                ((userGuess === "y") && (computerGuess === "i")) || 
                ((userGuess === "y") && (computerGuess === "j")) || 
                ((userGuess === "y") && (computerGuess === "k")) || 
                ((userGuess === "y") && (computerGuess === "l")) || 
                ((userGuess === "y") && (computerGuess === "m")) || 
                ((userGuess === "y") && (computerGuess === "n")) || 
                ((userGuess === "y") && (computerGuess === "o")) || 
                ((userGuess === "y") && (computerGuess === "p")) || 
                ((userGuess === "y") && (computerGuess === "q")) || 
                ((userGuess === "y") && (computerGuess === "r")) || 
                ((userGuess === "y") && (computerGuess === "s")) || 
                ((userGuess === "y") && (computerGuess === "t")) || 
                ((userGuess === "y") && (computerGuess === "u")) || 
                ((userGuess === "y") && (computerGuess === "v")) || 
                ((userGuess === "y") && (computerGuess === "w")) || 
                ((userGuess === "y") && (computerGuess === "x")) || 
                ((userGuess === "y") && (computerGuess === "z"))) {
          // alert("Nope!  Try Again!");
          guessesLeft --; 
        }

        if ((userGuess === "z") && (computerGuess === "z")) {
             wins ++; alert("You Win!"); guessesLeft = 9; guessesSoFar = [];
        }
        else if (((userGuess === "z") && (computerGuess === "a")) || 
                ((userGuess === "z") && (computerGuess === "b")) || 
                ((userGuess === "z") && (computerGuess === "c")) || 
                ((userGuess === "z") && (computerGuess === "d")) || 
                ((userGuess === "z") && (computerGuess === "e")) || 
                ((userGuess === "z") && (computerGuess === "f")) || 
                ((userGuess === "z") && (computerGuess === "g")) || 
                ((userGuess === "z") && (computerGuess === "h")) || 
                ((userGuess === "z") && (computerGuess === "i")) || 
                ((userGuess === "z") && (computerGuess === "j")) || 
                ((userGuess === "z") && (computerGuess === "k")) || 
                ((userGuess === "z") && (computerGuess === "l")) || 
                ((userGuess === "z") && (computerGuess === "m")) || 
                ((userGuess === "z") && (computerGuess === "n")) || 
                ((userGuess === "z") && (computerGuess === "o")) || 
                ((userGuess === "z") && (computerGuess === "p")) || 
                ((userGuess === "z") && (computerGuess === "q")) || 
                ((userGuess === "z") && (computerGuess === "r")) || 
                ((userGuess === "z") && (computerGuess === "s")) || 
                ((userGuess === "z") && (computerGuess === "t")) || 
                ((userGuess === "z") && (computerGuess === "u")) || 
                ((userGuess === "z") && (computerGuess === "v")) || 
                ((userGuess === "z") && (computerGuess === "w")) || 
                ((userGuess === "z") && (computerGuess === "x")) || 
                ((userGuess === "z") && (computerGuess === "y"))) {
          // alert("Nope!  Try Again!");
          guessesLeft --; 
        }
        
    }

        if (guessesLeft < 1) {
            alert ("Game over!  Please play again.");
            losses ++; 
            guessesLeft = 9;
            guessesSoFar = [];
            }


        

       

        
      // document.getElementById("userChose").innerHTML = userGuess;
      // // document.getElementById("computerChose").innerHTML = computerGuess;
      document.getElementById("winsCounter").innerHTML = wins;
      document.getElementById("lossesCounter").innerHTML = losses;
      document.getElementById("guessesCounter").innerHTML = guessesLeft;
      document.getElementById("PreviousGuesses").innerHTML = guessesSoFar.toString();
        
  };