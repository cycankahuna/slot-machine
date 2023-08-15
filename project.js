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




const despositAmount = deposit();

