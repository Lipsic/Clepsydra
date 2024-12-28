import Element from "../lib/Element";

export default class Navbar extends Element {
	constructor () {
		const p1 = new Element('p', {}, 'Teste');
		const p2 = new Element('p', {}, 'Teste');
		super('div', {}, [p1, p2]);
	}

}
