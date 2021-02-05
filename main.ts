//Say welcome to the game
process.stdout.write('Welcome to the number guessing game by Shayla Hinkley\n')

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
            } else if(userInput.trim() == secretNum) {
               
                //asks user to play again
                inout.question("Got it. Play again (y/n)? ", (again) => {
                    if (again.trim() === "n") {
                        console.debug("\n\nBye!");
                        inout.close();
                    }
                    if (again.trim() === "y") {
                        inout.close();
                        console.debug("\nNew secret token generated.");
                        startAgain();
                    }
                    if (again.trim() != "y" && again.trim() != "n") {
                        console.debug("Only can enter y or n. Default n.");
                        inout.close();
                    }    
                });
            } else if(userInput.trim() < secretNum) {
                console.debug("Too low, try again!");
                process.stdout.write("Your guess: ");
            } else if(userInput.trim() > secretNum) {
                console.debug("Too high, try again!");
                process.stdout.write("Your guess: ");
            } else {
                console.debug('Must be a number between 1 and 100.');
                inout.close();
                console.debug("\nNew secret token generated.");
                startAgain();
            }
        }
    }

    function startAgain() {
        startHere(randomize(0,100));
    }

    function randomize(min: number, max: number): number {
    
        let x: number;
        x = Math.floor(Math.random()*(max-min+1)+min);
        return x;
    }
    
    startHere(randomize(0,100));