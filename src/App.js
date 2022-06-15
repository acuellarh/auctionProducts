import React from 'react';
import './App.css';
// import { Login } from './components/Login';
import { Navbar } from './components/Navbar';
import { Signup } from './components/Signup';

function App() {
	return (
		<>			
			<Navbar/>		
			<Signup/>
			{/* <Login/> */}
		</>
	);
}

export default App;
