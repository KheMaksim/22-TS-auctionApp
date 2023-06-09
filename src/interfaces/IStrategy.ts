import Product from "../classes/product";

export default interface IStrategy {
	product: Product;
	action(input: string): string;
}