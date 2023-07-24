import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Homepage from './components/auth/Homepage';
import Logo from './assets/slumberworx.png';
import GameContainer from './components/GameContainer';

const App = () => {
	const [bgColor, setBgColor] = useState('#33a1fd');
	document.body.style.backgroundColor = bgColor;
	document.body.style.color = 'white';
	const [playerData, setPlayerData] = useState({
		currDay: 1,
		dreamEssence: 1000,
		darkDreamEssence: 0,
		workers: [
			{
				firstName: 'Jesus',
				lastName: 'Christ',
				age: 27,
				dreamSpecialty: 'Funny Dreams',
				skillLevel: 5,
			},
		],
		stations: [
			{
				stationId: 1,
				assignedTo: null,
				level: 1,
				currRecipe: 'None',
				alias: '',
				status: 'IDLE',
			},
			{
				stationId: 2,
				assignedTo: null,
				level: 1,
				currRecipe: 'None',
				alias: '',
				status: 'IDLE',
			},
		],
	});
	return (
		<Router>
			<Routes>
				<Route>
					<Route path='/' element={<Homepage Logo={Logo} />} exact />
					<Route
						path='/lineup'
						element={
							<GameContainer bgColor={bgColor} playerData={playerData} />
						}
					/>
				</Route>
			</Routes>
		</Router>
	);
};

export default App;
