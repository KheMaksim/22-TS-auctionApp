import ProductState from "../abstracts/productState";
import InStockState from "./inStockState";

export default class Product {
	public id: number;
	public name: string;
	public price: number = 0;
	public honoraryСode: string = '';
	public stateName: string;
	public state!: ProductState;
	constructor(id: number, name: string) {
		this.id = id;
		this.name = name;
		this.changeState(new InStockState());
		this.stateName = this.state.name;
	}
	changeState(newState: ProductState) {
		this.state = newState;
		this.state.state = this;
	}
	public raisePrice(bet: number): void {
		this.state.raisePrice(bet);
	}
	public setUp(): void {
		this.state.setUp()
	}
	public setOff(): void {
		this.state.setOff()
	}
	public giveToTheWinner(): void {
		this.state.giveToTheWinner()
	}
}