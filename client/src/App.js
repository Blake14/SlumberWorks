import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Homepage from './components/auth/Homepage';
import Logo from './assets/slumberworx.png';
import GameContainer from './components/GameContainer';

const App = () => {
	const [bgColor, setBgColor] = useState('#33a1fd');
	document.body.style.backgroundColor = bgColor;
	document.body.style.color = 'white';
	return (
		<Router>
			<Routes>
				<Route>
					<Route path='/' element={<Homepage Logo={Logo} />} exact />
					<Route path='/lineup' element={<GameContainer bgColor={bgColor} />} />
				</Route>
			</Routes>
		</Router>
	);
};

export default App;
