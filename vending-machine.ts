import change from "./money";
import PromptSync from "prompt-sync";
const prompt = PromptSync();

let cash = 5;
const vending_items = [
    {snack: 'Cookies', price: 1.75},
    {snack: 'Candy', price: 1.56},
    {snack: 'Chips', price: 0.99},
    {snack: 'Water', price: 1.67},
    {snack: 'Soda', price: 2.10},
    {snack: 'Gum', price: 0.65},
];
console.log ("\nIt's snack time!")
console.log ("\nYou have %5.00 in your pocket so you decide to go to a vending machine..")
console.log (`\nYou look at what the vending machine has to offer. You decide to:
    1. Buy an item
    2. Leave
    3. Kick the machine
    `);
    const input = prompt("Enter a number selection. --> ")

    switch (input) {
        case '1':
            buy_item();
            break;
        case '2':
            console.log ("You walked away, tummy growling cause you were hungry for a snack..")
            setTimeout(()=> {
                console.log ("...on the bright side? You saved %5.00!")},2000);
                break;
        case '3':
            machine_kicked();
            break;
        default:
            throw new Error ("Please enter a valid input");
    }
function buy_item () {
    vending_items.forEach((item, index) => {
        console.log (`${index + 1}. ${item.snack} - $${item.price.toFixed(2)}`);
    });
    const input = prompt('Select an item to buy by entering its corresponding number. --> ');
    switch (input) {
        case '1':
            purchase (0);
            break;  
        case '2':
            purchase (1);
            break;
        case '3':
            purchase (2);
            break;
        case '4':
            purchase (3);
            break;
        case '5':
            purchase (4);
            break;
        case '6':
            purchase (5);
            break;
        default:
            console.log ('Please enter a valid number selection.')
            break;
    };
};
function purchase (index: number) {
    const selected_item = vending_items [index];
    console.log (`\nYou purchased the ${selected_item.snack} for $${selected_item.price.toFixed(2)}.`);
    const snack_price = selected_item.price;
    const money_change = cash - snack_price;
    console.log(`Your change is $${money_change.toFixed(2)}.`);
    change(money_change);
};
function random_snack() {
    const snack = Math.floor(Math.random() * vending_items.length);
    return vending_items[snack].snack;
};

function machine_kicked(){
    const chance_of_snack = Math.random() > 0.5 ? true : false
    if (chance_of_snack) {
        console.log (`\nYou received ${random_snack()}!`)
        console.log ("\nYay for free things! You saved your $5.00!")
    } else {
        console.log ('Nothing happened...')
        setTimeout(()=> {
            console.log ("...and now your foot hurts.")},2000);
        setTimeout(()=> {
            console.log ("..maybe you can try again?")},4000);
    }
}
