import MD5 from "../MD5";
import IStrategy from "../interfaces/IStrategy";
import GoldStrategy from "./goldStrategy";
import SilverStrategy from "./silverStrategy";
import BronzeStrategy from "./bronzeStrategy";
import Product from "../classes/product";

export default class Generator {
	private strategy!: IStrategy;
	public product: Product;
	constructor(product: Product) {
		this.product = product;
	}
	setStrategy(strategy: IStrategy): void {
		this.strategy = strategy;
	}
	generateCode(productId: string): string {
		if (this.product.price >= 1000) {
			this.setStrategy(new GoldStrategy(this.product))
			return this.strategy.action(productId);
		}
		else if (this.product.price >= 500 || this.product.price < 1000) {
			this.setStrategy(new SilverStrategy(this.product))
			return this.strategy.action(productId);
		}
		else {
			this.setStrategy(new BronzeStrategy(this.product))
			return this.strategy.action(productId);
		}
	}
	static calculateMD5Hash(input: string): string {
		const md5: string = MD5(input);
		return md5;
	}
}