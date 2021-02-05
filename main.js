var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __asyncValues = (this && this.__asyncValues) || function (o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
};
//Say welcome to the game
process.stdout.write('Welcome to the number guessing game by Shayla Hinkley\n');
//Function that starts the game
function startHere(val) {
    var e_1, _a;
    return __awaiter(this, void 0, void 0, function () {
        var readline, inout, secretNum, inout_1, inout_1_1, userInput, e_1_1;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    readline = require("readline");
                    inout = readline.createInterface({
                        input: process.stdin,
                        output: process.stdout
                    });
                    secretNum = val;
                    //asks user for their guess
                    process.stdout.write("Your guess: ");
                    _b.label = 1;
                case 1:
                    _b.trys.push([1, 6, 7, 12]);
                    inout_1 = __asyncValues(inout);
                    _b.label = 2;
                case 2: return [4 /*yield*/, inout_1.next()];
                case 3:
                    if (!(inout_1_1 = _b.sent(), !inout_1_1.done)) return [3 /*break*/, 5];
                    userInput = inout_1_1.value;
                    //if user types quit, exit program
                    if (userInput.trim() === "quit") {
                        inout.close();
                        //if the user asks for help, tell them rules of game. Then restart the game
                    }
                    else if (userInput.trim() == 'help') {
                        console.debug("\nThis game randomly generates a secret number 1-100. You must enter your guess when asked.");
                        console.debug("If the guessed number is too high or too low, then a hint will be given.");
                        console.debug("Continue guessing until the right number is guessed.");
                        console.debug("To quit, simply type 'quit'");
                        inout.close();
                        console.debug("\nNew secret token generated.");
                        startAgain();
                        //if the correct number is guessed   
                    }
                    else if (userInput.trim() == secretNum) {
                        //asks user to play again
                        inout.question("Got it. Play again (y/n)? ", function (again) {
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
                    }
                    else if (userInput.trim() < secretNum) {
                        console.debug("Too low, try again!");
                        process.stdout.write("Your guess: ");
                        //if the number guessed is greater than the secret number give a hint
                    }
                    else if (userInput.trim() > secretNum) {
                        console.debug("Too high, try again!");
                        process.stdout.write("Your guess: ");
                        //user did not enter a number between 1 and 100. This includes anything that is not a digit
                        //create new secret token and start again
                    }
                    else {
                        console.debug('Must be a number between 1 and 100.');
                        inout.close();
                        console.debug("\nNew secret token generated.");
                        startAgain();
                    }
                    _b.label = 4;
                case 4: return [3 /*break*/, 2];
                case 5: return [3 /*break*/, 12];
                case 6:
                    e_1_1 = _b.sent();
                    e_1 = { error: e_1_1 };
                    return [3 /*break*/, 12];
                case 7:
                    _b.trys.push([7, , 10, 11]);
                    if (!(inout_1_1 && !inout_1_1.done && (_a = inout_1["return"]))) return [3 /*break*/, 9];
                    return [4 /*yield*/, _a.call(inout_1)];
                case 8:
                    _b.sent();
                    _b.label = 9;
                case 9: return [3 /*break*/, 11];
                case 10:
                    if (e_1) throw e_1.error;
                    return [7 /*endfinally*/];
                case 11: return [7 /*endfinally*/];
                case 12: return [2 /*return*/];
            }
        });
    });
}
//helper function that starts the game again
function startAgain() {
    startHere(randomize(0, 100));
}
//function that gets a randomized secret number
function randomize(min, max) {
    //x will be the randomized secret number
    var x;
    //Creates a whole number between min and max 
    x = Math.floor(Math.random() * (max - min + 1) + min);
    return x;
}
//start the program
startHere(randomize(0, 100));
