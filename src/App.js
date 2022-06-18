import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Signup } from './components/Signup';
import { Login } from './components/Login';
import { Home } from './components/Home';
import { About } from './components/About';

function App() {
	return (
		<>			
			<Navbar/>	
				<Routes>
					<Route path='/' element={<Login/>}/>
					<Route path='/signup' element={<Signup/>}/>
					<Route path='/home' element={<Home/>}/>
					<Route path='/about' element={<About/>}/>
				</Routes>
		</>
	);
}

export default App;
