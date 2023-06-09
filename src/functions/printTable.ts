import Product from "../classes/product";

export default function printTable(productArray: Product[]): void {
	console.log(`------+-------------+---------+---------+--------------------`, '\n', ('ID').padStart(3, ' ').padEnd(4, ' '), '|', (`Product`).padEnd(11, ' '), '|', (`Price`).padStart(2, ' ').padEnd(7, ' '), '|', (`State`).padEnd(7, ' '), '|', (`Honorary code`).padStart(10, ' ').padEnd(10, ' '), `\n------+-------------+---------+---------+--------------------`);
	for (let i = 0; i < productArray.length; i++) {
		const product = productArray[i];
		console.log(product.id.toString().padStart(4, ' ').padEnd(4, ' '), ' |', product.name.padEnd(11, ' '), '|', product.price.toString().padEnd(7, ' '), '|', product.state.name.toString().padEnd(7, ' '), '|', product.honoraryСode.padEnd(13, ' '));
	}
}