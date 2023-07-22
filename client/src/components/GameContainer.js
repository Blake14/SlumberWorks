import React from 'react';
import WorkersModule from './WorkersModule';
import FactoryFloor from './FactoryFloor';
import ResourceBar from './ResourceBar';

const GameContainer = () => {
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
