// 1. deposit some money
// 2. determine no of lines to bet ona
// 3. collect a bet amount
// 4. spin the slot machine
// 5. check if the user won money
// 6. give user their winning money
// 7. play again

const propmt = require("prompt-sync")();

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


const despositAmount = deposit();
const numberOfLines = getNumberOfLines();

