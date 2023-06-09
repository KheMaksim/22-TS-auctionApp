import ProductState from "../abstracts/productState";
import InStockState from "./inStockState";
import SoldState from "./soldState";
import Generator from "../strategies/generator";

export default class ForSaleState extends ProductState {
	public name: string = 'forSale';
	public raisePrice(bet: number): void {
		console.log(`------------------------\nProduct price increased from ${this.state.price} to ${this.state.price + bet}.\n------------------------`);
		if (bet <= 100 && bet > 0) {
			this.state.price += 100;
		}
		else this.state.price += bet;
	}
	public setUp(): void {
		console.log(`------------------------\nThe product can't be put up for auction again.\n------------------------`);
	}
	public setOff(): void {
		console.log(`------------------------\nProduct returned to the stock.\n------------------------`);
		this.state.price = 0;
		this.state.changeState(new InStockState());
	}
	public giveToTheWinner(): void {
		const generator = new Generator(this.state);
		if (this.state.price <= 0) console.log(`------------------------\nYou can't give the product for free.\n------------------------`);
		else {
			console.log(`------------------------\nProduct sold succesfully.\n------------------------`);
			this.state.changeState(new SoldState());
			this.state.honoraryСode = generator.generateCode(this.state.id.toString());
		}
	}
}