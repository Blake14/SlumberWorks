import React from 'react';
import WorkersModule from './game-container/WorkersModule';
import FactoryFloor from './game-container/FactoryFloor';
import ResourceBar from './game-container/ResourceBar';

const GameContainer = (props) => {
	return (
		<div
			style={{
				height: 800,
			}}
		>
			<ResourceBar />
			<div
				style={{
					display: 'flex',
					height: '100%',
					justifyContent: 'space-evenly',
				}}
			>
				<WorkersModule />
				<FactoryFloor />
			</div>
		</div>
	);
};

export default GameContainer;
