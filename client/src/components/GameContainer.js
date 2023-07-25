import React from 'react';
import WorkersModule from './game-container/WorkersModule';
import FactoryFloor from './game-container/FactoryFloor';
import ResourceBar from './game-container/ResourceBar';
import GameLog from './game-container/GameLog';
import UpgradeMenu from './game-container/UpgradeMenu';
import SlumberTown from './game-container/SlumberTown';
import TownBanner from '../assets/SlumberTown.png';
import Image from 'react-bootstrap/Image';

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
				<div>
					<div
						style={{
							display: 'flex',
							justifyContent: 'center',
						}}
					></div>
					<div
						style={{
							backgroundColor: 'white',
							borderRadius: 25,
							margin: 10,
						}}
					>
						<div
							style={{
								height: 30,
								width: '100%',
								backgroundColor: props.headerColor,
								borderTopRightRadius: 25,
								borderTopLeftRadius: 25,
								display: 'flex',
								paddingLeft: 35,
								color: 'white',
								fontSize: 18,
							}}
						>
							SlumberTown
						</div>
						<div
							style={{
								paddingTop: 80,
								paddingBottom: 80,
								paddingLeft: 50,
								paddingRight: 50,
							}}
						>
							<SlumberTown
								bgColor={props.bgColor}
								headerColor={props.headerColor}
							/>
						</div>
					</div>
				</div>
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
