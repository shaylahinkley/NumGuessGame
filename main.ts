//Say welcome to the game
process.stdout.write('Welcome to the number guessing game by Shayla Hinkley\n')

//Function that starts the game
async function startHere (val: number) {
        
    //reads lines
    const readline = require("readline");
    const inout = readline.createInterface({
    input: process.stdin,
        output: process.stdout
    });

    //gets the secret number
    let secretNum: number = val;

    //asks user for their guess
    process.stdout.write("Your guess: ");
    for await (const userInput of inout) {
        
        //if user types quit, exit program
        if (userInput.trim() === "quit"){
            inout.close();

          //if the correct number is guessed    
        } else if(userInput.trim() == secretNum) {
               
            //asks user to play again
            inout.question("Got it. Play again (y/n)? ", (again) => {
                
                //the user enters no for play again, say bye and close the program
                if (again.trim() === "n") {
                    console.debug("\n\nBye!");
                    inout.close();
                }

                //the user enters yes for play again, close inout, tell user a new number is the secret number, call helper function
                if (again.trim() === "y") {
                    inout.close();
                    console.debug("\nNew secret token generated.");
                    startAgain();
                }

                //if yes or no is not entered then default to no
                if (again.trim() != "y" && again.trim() != "n") {
                    console.debug("Only can enter y or n. Default n.");
                    inout.close();
                }    
            });

              //if the number guessed is less than the secret number give a hint 
            } else if(userInput.trim() < secretNum) {
                console.debug("Too low, try again!");
                process.stdout.write("Your guess: ");

                //if the number guessed is greater than the secret number give a hint
            } else if(userInput.trim() > secretNum) {
                console.debug("Too high, try again!");
                process.stdout.write("Your guess: ");

                //user did not enter a number between 1 and 100. This includes anything that is not a digit
                //create new secret token and start again
            } else {
                console.debug('Must be a number between 1 and 100.');
                inout.close();
                console.debug("\nNew secret token generated.");
                startAgain();
            }
        }
    }

    //helper function that starts the game again
    function startAgain() {
        startHere(randomize(0,100));
    }

    //function that gets a randomized secret number
    function randomize(min: number, max: number): number {
        
        //x will be the randomized secret number
        let x: number;

        //Creates a whole number between min and max 
        x = Math.floor(Math.random()*(max-min+1)+min);
        return x;
    }
    
    //start the program
    startHere(randomize(0,100));