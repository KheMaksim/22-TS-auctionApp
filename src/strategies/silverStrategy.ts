import IStrategy from "../interfaces/IStrategy";
import Product from "../classes/product";
import Generator from "./generator";

export default class SilverStrategy implements IStrategy {
	product: Product;
	constructor(product: Product) {
		this.product = product;
	}
	action(): string {
		const input = "Silver-" + this.product.id;
		return Generator.calculateMD5Hash(input);
	}
}