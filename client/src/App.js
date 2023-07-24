import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Homepage from './components/auth/Homepage';
import Logo from './assets/slumberworx.png';
import GameContainer from './components/GameContainer';

const App = () => {
	const [bgColor, setBgColor] = useState('#33a1fd');
	const [headerColor, setHeaderColor] = useState('#4a4e69');
	const [gameLog, setGameLog] = useState([]);
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
	document.body.style.backgroundColor = bgColor;
	document.body.style.color = 'white';
	const firstNames = ['Alice', 'Bob', 'Charlie', 'Diana', 'Eve', 'Frank'];
	const lastNames = ['Smith', 'Johnson', 'Williams', 'Brown', 'Jones', 'Davis'];
	const dreamSpecialties = [
		'Lucid Dreaming',
		'Nightmare Control',
		'Dream Manipulation',
		'Dream Healing',
	];
	const minAge = 20;
	const maxAge = 60;
	const minSkillLevel = 1;
	const maxSkillLevel = 10;
	const generateRandomWorker = () => {
		const firstName = firstNames[Math.floor(Math.random() * firstNames.length)];
		const lastName = lastNames[Math.floor(Math.random() * lastNames.length)];
		const age = Math.floor(Math.random() * (maxAge - minAge + 1)) + minAge;
		const dreamSpecialty =
			dreamSpecialties[Math.floor(Math.random() * dreamSpecialties.length)];
		const skillLevel =
			Math.floor(Math.random() * (maxSkillLevel - minSkillLevel + 1)) +
			minSkillLevel;

		const randomWorker = {
			firstName,
			lastName,
			age,
			dreamSpecialty,
			skillLevel,
		};

		return randomWorker;
	};

	const handleGenerateWorker = () => {
		const randomWorker = generateRandomWorker();
		console.log(randomWorker);
		setPlayerData((prevState) => {
			return {
				...prevState,
				workers: [...prevState.workers, randomWorker],
			};
		});
		setGameLog((prevState) => {
			return [
				...prevState,
				`Night ${playerData.currDay}: Worker Hired [${randomWorker.firstName} ${randomWorker.lastName}]`,
			];
		});
		updateScroll();
	};
	const updateScroll = () => {
		var element = document.getElementById('gameLogScroll');
		element.scrollTop = element.scrollHeight;
	};
	const UpgradeData = [
		{
			level: 1,
			cost: 0,
		},
		{
			level: 2,
			cost: 45,
		},
		{
			level: 3,
			cost: 100,
		},
		{
			level: 4,
			cost: 200,
		},
		{
			level: 5,
			cost: 500,
		},
	];
	return (
		<Router>
			<Routes>
				<Route>
					<Route path='/' element={<Homepage Logo={Logo} />} exact />
					<Route
						path='/lineup'
						element={
							<GameContainer
								playerData={playerData}
								setPlayerData={setPlayerData}
								headerColor={headerColor}
								handleGenerateWorker={handleGenerateWorker}
								generateRandomWorker={generateRandomWorker}
								bgColor={bgColor}
								gameLog={gameLog}
								setGameLog={setGameLog}
								UpgradeData={UpgradeData}
							/>
						}
					/>
				</Route>
			</Routes>
		</Router>
	);
};

export default App;
