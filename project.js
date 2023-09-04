// 1. deposit some money
// 2. determine no of lines to bet ona
// 3. collect a bet amount
// 4. spin the slot machine
// 5. check if the user won money
// 6. give user their winning money
// 7. play again

const propmt = require("prompt-sync")();

const ROWS = 3;
const COLS = 3;

const SYMBOLS_COUNT = {
    A : 2,
    B : 4,
    C : 6,
    D : 8
}

const SYMBOLS_VALUE = {
    A : 5,
    B : 4,
    C : 3,
    D : 2
}



const deposit = () => {
    while (true){
    const despositAmount = propmt("Enter a desposit Amount: ") 
    const numberDespositAmount = parseFloat(despositAmount);

    if (isNaN(numberDespositAmount) || numberDespositAmount <= 0){
        console.log("Invalid deposit ammount, try again");

    } else{
        return numberDespositAmount;
    }
}
}

const getNumberOfLines = () => {
    while (true){
    const lines = propmt("Enter the number of lines to bet on (1-3): ") 
    const numberOfLines = parseFloat(lines);

    if (isNaN(numberOfLines) || numberOfLines <= 0 || numberOfLines > 3){
        console.log("Invalid number of lines, try again");

    } else{
        return numberOfLines;
    }
}
}

const getBet = (balance, lines) => {
    while (true){
    const bet = propmt("Enter the bet per line: ") 
    const numberBet = parseFloat(bet);

    if (isNaN(numberBet) || numberBet <= 0 || numberBet > balance/lines){
        console.log("Invalid number of lines, try again");

    } else{
        return numberOfLines;
    }
}
};

const

let balance = deposit();
const numberOfLines = getNumberOfLines();
const bet = getBet(balance, numberOfLines)
