import React from 'react';
import WorkersModule from './game-container/WorkersModule';
import FactoryFloor from './game-container/FactoryFloor';
import ResourceBar from './game-container/ResourceBar';
import GameLog from './game-container/GameLog';
import UpgradeMenu from './game-container/UpgradeMenu';

const GameContainer = (props) => {
	if (props.gameLog.length <= 0) {
		props.setGameLog((prevState) => {
			return [
				...prevState,
				`Night ${props.playerData.currDay}: Game Started ...`,
			];
		});
	}
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
					handleGenerateWorker={props.handleGenerateWorker}
					generateRandomWorker={props.generateRandomWorker}
					setPlayerData={props.setPlayerData}
				/>
				<FactoryFloor
					playerData={props.playerData}
					setPlayerData={props.setPlayerData}
					headerColor={props.headerColor}
					UpgradeData={props.UpgradeData}
				/>
				<div
					style={{
						width: '25%',
						marginLeft: 10,
						marginTop: 10,
					}}
				>
					<UpgradeMenu headerColor={props.headerColor} />
					<GameLog gameLog={props.gameLog} headerColor={props.headerColor} />
				</div>
			</div>
		</div>
	);
};

export default GameContainer;
