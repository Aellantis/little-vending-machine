export interface Money {
    singular_name: string,
    plural_name?: string,
    money_value: number,
    amount_dispensed: number,
}

export const money:Money[] = [
    {singular_name: 'two dollar bill', plural_name: 'two dollar bills', money_value: 200, amount_dispensed: 0},
    {singular_name: 'one dollar bill', money_value: 100, amount_dispensed: 0},
    {singular_name: 'quarter', plural_name: 'quarters', money_value: 25, amount_dispensed: 0},
    {singular_name: 'dime', plural_name: 'dimes', money_value: 10, amount_dispensed: 0},
    {singular_name: 'nickel', plural_name: 'nickels', money_value: 5, amount_dispensed: 0},
    {singular_name: 'penny', plural_name: 'pennies', money_value: 1, amount_dispensed: 0},
]

function change(amount:number) {
let value_in_cents = Math.round(amount * 100);
let money_amount = 0;
money.forEach (money => {
    money.amount_dispensed = 0;
});

money.forEach((money:Money) => {
    while (value_in_cents >= money.money_value){
    value_in_cents-= money.money_value;
    money.amount_dispensed++;
    money_amount++;
    }
});
if (money_amount > 0) {
    const money_dispensed:string[]=[];
    for (let i = 0; i < money.length; i++){
        const monies = money[i]
        if(monies.amount_dispensed > 0){
            const name = monies.amount_dispensed > 1 ? monies.plural_name : monies.singular_name;
            money_dispensed.push(`${monies.amount_dispensed} ${name}`);
        }
    };
    const last_coin = money_dispensed.pop();
    const vending_message =`\nThe vending machine dispensed ${money_dispensed.join(', ')}${money_dispensed.length ? ', and' : ''} ${last_coin}.`;
    console.log(vending_message)
};
console.log (`Total amount of dollars and coins dispensed: ${money_amount}`)
};

export default change;