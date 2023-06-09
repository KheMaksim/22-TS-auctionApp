import * as readlineSync from "readline-sync";
import random from "./functions/randomFn";
import Product from "./classes/product";
import printTable from "./functions/printTable";
import process from "./functions/process";

const phone = new Product(random(1, 9999), 'Samsung');
const laptop = new Product(random(1, 9999), 'Lenovo');
const mouse = new Product(random(1, 9999), 'SteelSeries');
const products: Product[] = [phone, laptop, mouse];

printTable(products);
while (true) {
	const menu: string = readlineSync.question(`------------------------\nWhat do you want to do?\n1. Set up for auction (up)\n2. Raise price (raise)\n3. Give it to the winner (give)\n4. Set off from auction (off)\n5. Exit (exit)\nAnswer (command or number): `);
	if (menu === '1' || menu.toLowerCase() === 'up') {
		process(`------------------------\nWhich one do you wanna set up for auction?(0 to exit)\nAnswer (enter an id or product name): `, 'up', products);
	}
	else if (menu === '2' || menu.toLowerCase() === 'raise') {
		process(`------------------------\nFor Which product do you wanna raise price?(0 to exit)\nAnswer (enter an id or product name): `, 'raise', products);
	}
	else if (menu === '3' || menu.toLowerCase() === 'give') {
		process(`------------------------\nWhich product do you wanna give to the winner?(0 to exit)\nAnswer (enter an id or product name): `, 'give', products);
	}
	else if (menu === '4' || menu.toLowerCase() === 'off') {
		process(`------------------------\nWhich product do you wanna set off from auction?(0 to exit)\nAnswer (enter an id/product name): `, 'off', products);
	}
	else if (menu === '5' || menu.toLowerCase() === 'exit') {
		console.log(`Exited`);
		break;
	}
	else console.log(`------------------------\nIncorrect answer.`);
}