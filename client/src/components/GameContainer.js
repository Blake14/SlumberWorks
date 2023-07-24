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
			<ResourceBar playerData={props.playerData} />
			<div
				style={{
					display: 'flex',
					height: '100%',
					justifyContent: 'space-evenly',
				}}
			>
				<WorkersModule
					playerData={props.playerData}
					headerColor={props.headerColor}
				/>
				<FactoryFloor
					playerData={props.playerData}
					headerColor={props.headerColor}
				/>
			</div>
		</div>
	);
};

export default GameContainer;
