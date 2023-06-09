import * as readlineSync from "readline-sync";
import printTable from "./printTable";
import Product from "../classes/product";

export default function process(question: string, key: string, productArray: Product[]): void {
	printTable(productArray);
	let found = false;
	while (true) {
		const choose: string = readlineSync.question(question);
		if (parseInt(choose) === 0 || choose.toLowerCase() === 'exit') {
			console.log(`Exited`);
			break;
		}
		else {
			for (let i = 0; i < productArray.length; i++) {
				if (parseInt(choose) === productArray[i].id || choose.toLowerCase() === productArray[i].name.toLowerCase()) {
					switch (key) {
						case 'up':
							productArray[i].setUp();
							break;
						case 'raise':
							while (true) {
								const bet: string = readlineSync.question(`------------------------\nHow much do you want to increase price?(press enter for minimal bet)\nAnswer (your bet): `);
								if (isNaN(parseInt(bet)) === true || parseInt(bet) <= 0) console.log(`------------------------\nIncorrect bet.\n------------------------`);
								else if (bet === '') productArray[i].raisePrice(100);
								else {
									productArray[i].raisePrice(parseInt(bet));
									break;
								}
							}
							break;
						case 'give':
							productArray[i].giveToTheWinner();
							break;
						case 'off':
							productArray[i].setOff();
							break;
						default:
							break;
					}
					printTable(productArray);
					found = true;
					break;
				}
			}
			if (found) break;
			else console.log(`------------------------\nYou entered a wrong answer.\n------------------------`);
		}
	}
}