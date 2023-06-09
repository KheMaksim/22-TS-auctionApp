import ProductState from "../abstracts/productState";
import ForSaleState from "./forSaleState";

export default class InStockState extends ProductState {
	public name: string = 'inStock';
	public raisePrice(): void {
		console.log(`------------------------\nThe product is not yet bidding.\n------------------------`);
	}
	public setUp(): void {
		console.log(`------------------------\nProduct auction started successfully.\n------------------------`);
		this.state.changeState(new ForSaleState());
	}
	public setOff(): void {
		console.log(`------------------------\nYou can not withdraw from the auction a product that does not participate in them.\n------------------------`);
	}
	public giveToTheWinner(): void {
		console.log(`------------------------\nYou can't give the product immediately from the stock.\n------------------------`);
	}
}