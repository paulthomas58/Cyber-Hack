import React from 'react';
// import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages';
import About from './pages/about';
import Blogs from './pages/blogs';
import Research from './pages/research';
import Charities from './pages/charities';
import Volunteers from './pages/volunteers';

function App() {
	return (
		<Router>
			<Navbar />
			<Routes>
				<Route exact path='/' element={<Home />} />
				<Route path='/about' element={<About />} />
				<Route path='/charities' element={<Charities />} />
				<Route path='/blogs' element={<Blogs />} />
				<Route path='/research' element={<Research />} />
				<Route path='/volunteers' element={<Volunteers />} />
			</Routes>
		</Router>
	);
}

export default App;
