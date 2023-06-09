import Product from "../classes/product";

export default abstract class ProductState {
	public state!: Product;
	public abstract name: string;
	public abstract raisePrice(bet: number): void;
	public abstract setUp(): void;
	public abstract setOff(): void;
	public abstract giveToTheWinner(): void;
}