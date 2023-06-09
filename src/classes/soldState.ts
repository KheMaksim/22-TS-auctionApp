import ProductState from "../abstracts/productState";

export default class SoldState extends ProductState {
	public name: string = 'sold';
	public raisePrice(): void {
		console.log(`------------------------\nProduct already sold you can't raise a price.\n------------------------`);
	}
	public setUp(): void {
		console.log(`------------------------\nProduct already sold you can't put it up for auction.\n------------------------`);
	}
	public setOff(): void {
		console.log(`------------------------\nProduct already sold you can't returned it to the stock.\n------------------------`);
	}
	public giveToTheWinner(): void {
		console.log(`------------------------\nProduct already sold.\n------------------------`);
	}
}