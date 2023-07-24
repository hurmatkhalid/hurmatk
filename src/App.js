import React from 'react';
import Intro from './components/intro.js';
import SideBarNav from './components/SideBarNav.js';
import About from './components/about.js';
import Experience from './components/experience.js';
import Projects from './components/projects.js';
import Footer from './components/Footer.js';
// import logo from './logo.svg';
import './App.css';
import './styles/Global.css';

function App() {
	return (
		<div className="App">
			<div id="content">
				<Intro></Intro>
				<About></About>
				{/* <Experience></Experience> */}
				<Projects></Projects>
				<Footer></Footer>
			</div>
			<SideBarNav />
		</div>
	);
}

export default App;
