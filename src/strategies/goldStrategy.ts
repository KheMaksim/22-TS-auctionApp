import IStrategy from "../interfaces/IStrategy";
import Product from "../classes/product";
import Generator from "./generator";

export default class GoldStrategy implements IStrategy {
	product: Product;
	constructor(product: Product) {
		this.product = product;
	}
	action(): string {
		const input = "Gold-" + this.product.id;
		return Generator.calculateMD5Hash(input);
	}
}