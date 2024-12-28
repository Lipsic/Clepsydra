import Component from './Component'

export type StyleDeclaration = Partial<CSSStyleDeclaration> & { [propName: string]: string };


export default class Element extends Component {
    readonly element: HTMLElement;

  constructor (tag: string, props: Object, children: Element[] | string) {
    super()
    this.element = document.createElement(tag)
    this.element = Object.assign(this.element, props);
    if(typeof children === 'string')
	    this.element.innerHTML = children;
    if(typeof children === 'object') 
	    children.forEach(child =>  
		this.element.appendChild(child?.element)
	    );

  }

   style (styles: StyleDeclaration): void {
	Object.keys(styles).map((key) => {
		this.element.style[key] = styles[key];
	});
  }
}

