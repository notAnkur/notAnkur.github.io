import React, {Component} from 'react';
import Navbar from './components/Navbar/Navbar.js';
import Footer from './components/Footer/Footer.js';
import About from './components/About/About.js';
import Skills from './components/Skills/Skills.js';
import Projects from './components/Projects/Projects.js';
import ReactGA from 'react-ga';
import './App.css';

//analytics
const initializeReactGA = () => {
    ReactGA.initialize('UA-135887824-1');
    ReactGA.pageview('/homepage');
}
initializeReactGA();

class App extends Component {

	render() {
		return(
			<div >
				<Navbar />
				<About />
				<Skills />
				<Projects />
				<Footer />
			</div>
			);
	}
}

export default App;
