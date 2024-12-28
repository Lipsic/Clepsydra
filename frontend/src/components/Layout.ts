import Element from '../lib/Element'

const styles = {
	fontSize: "25px",
	height: '100%',
}


const dimensions = {nav: '10%', main: '80%', footer: '10%'}

export default function Layout () {

	const navbar = new Element('nav', {}, 'navbar')
	const content = new Element('main', {}, 'Put Your Content Here')
	const footer = new Element('footer', {}, 'Footer')

	const  layout =  new Element('div', {}, [navbar, content, footer]);

	layout.style(styles);
	navbar.style({height: dimensions.nav})
	content.style({height: dimensions.main})
	footer.style({height: dimensions.footer})
	return layout;
}


