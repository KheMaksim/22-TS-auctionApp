import IStrategy from "../interfaces/IStrategy";
import Product from "../classes/product";
import Generator from "./generator";

export default class BronzeStrategy implements IStrategy {
	product: Product;
	constructor(product: Product) {
		this.product = product;
	}
	action(): string {
		const input = "Bronze-" + this.product.id;
		return Generator.calculateMD5Hash(input);
	}
}