import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import { CiEdit } from 'react-icons/ci';
import DreamEssenceToken from '../../assets/DreamEssenceToken.png';
import DarkDreamEssenceToken from '../../assets/DarkDreamEssenceToken.png';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

const FactoryStation = (props) => {
	const [disabledUpgrade, setDisabledUpgrade] = useState(false);
	const [selectedWorker, setSelectedWorker] = useState(null);

	const upgradeCost = props.UpgradeData.find(
		(x) => x.level === props.station.level + 1
	)?.cost;

	useEffect(() => {
		setDisabledUpgrade(
			!upgradeCost || props.station.level === props.UpgradeData.length
		);
		setSelectedWorker(props.station.assignedTo); // Set the selectedWorker initially based on the assignedTo value
	}, [
		upgradeCost,
		props.station.level,
		props.UpgradeData,
		props.station.assignedTo,
	]);

	const handleUpgradeClick = () => {
		if (props.playerData.dreamEssence >= upgradeCost) {
			props.setPlayerData((prevState) => ({
				...prevState,
				dreamEssence: prevState.dreamEssence - upgradeCost,
				stations: prevState.stations.map((station) =>
					station.stationId === props.station.stationId
						? { ...station, level: station.level + 1 }
						: station
				),
			}));
		}
	};
	const buttonStyle = {
		width: 100,
		height: 100,
		backgroundColor: '#538d22',
		border: 'none',
		borderRadius: 10,
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		boxShadow: '0px 3px 6px rgba(0, 0, 0, 0.16)',
		cursor: 'pointer',
		outline: 'none',
		fontSize: 14,
		fontWeight: 'bold',
		color: '#ffffff',
		marginLeft: 25,
		paddingTop: 20,
		marginRight: 15,
	};

	const handleWorkerSelect = (selectedWorker) => {
		setSelectedWorker(selectedWorker); // Update the selectedWorker state
		// Find the index of the station in the stations array
		const stationIndex = props.playerData.stations.findIndex(
			(station) => station.stationId === props.station.stationId
		);
		props.setPlayerData((prevState) => {
			const updatedStations = [...prevState.stations];
			updatedStations[stationIndex] = {
				...updatedStations[stationIndex],
				assignedTo: selectedWorker,
			};
			return {
				...prevState,
				stations: updatedStations,
			};
		});
	};
	const handleStationLevelChange = (event, stationId) => {
		props.setPlayerData((prevState) => {
			//console.log(prevState);
			const updatedStations = prevState.stations.map((station) => {
				if (station.stationId === stationId) {
					return {
						...station,
						alias: event.target.value,
					};
				}
				return station;
			});
			return {
				...prevState,
				stations: updatedStations,
			};
		});
	};

	return (
		<div
			style={{
				backgroundColor: 'white',
				width: '100%',
				height: 150,
				borderRadius: 25,
				color: 'black',
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
				<input
					onChange={(e) => handleStationLevelChange(e, props.station.stationId)}
					value={
						props.station.alias || `Dream Station ${props.station.stationId}`
					}
					style={{
						border: 'none',
						backgroundColor: '#4a4e69',
						color: 'white',
						margin: 5,
						width: '30%',
						paddingRight: 25,
					}}
				></input>
				<CiEdit
					style={{
						position: 'relative',
						top: 6,
						right: 25,
						pointerEvents: 'none',
					}}
				/>
				<div
					style={{
						width: '70%',
						display: 'flex',
						justifyContent: 'right',
						paddingRight: 20,
					}}
				>
					{`Lvl ${props.station.level}`}
				</div>
			</div>
			<div
				style={{
					width: '100%',
					height: '80%',
					//border: '2px solid black',
					borderBottomRightRadius: 25,
					borderBottomLeftRadius: 25,
					display: 'flex',
					alignItems: 'center',
				}}
			>
				<div
					style={{
						height: '100%',
						width: '80%',
						//border: '2px solid black',
						padding: 10,
						display: 'flex',
					}}
				>
					<div
						style={{
							height: '100%',
							display: 'flex',
							justifyContent: 'center',
							alignItems: 'center',
							marginRight: 25,
						}}
					>
						<div>
							<div
								style={{
									borderRadius: '50%',
									backgroundColor: '#ef233c',
									height: 30,
									width: 30,
									margin: 3,
								}}
							></div>
							<div
								style={{
									borderRadius: '50%',
									backgroundColor: '#e9ecef',
									height: 30,
									width: 30,
									margin: 3,
								}}
							></div>
						</div>
					</div>
					<div>
						<div
							style={{
								display: 'flex',
								marginBottom: 5,
							}}
						>
							<p
								style={{
									height: 0,
									paddingTop: 2,
									width: 150,
								}}
							>
								<strong>Assigned Worker: </strong>
							</p>
							<DropdownButton
								size='sm'
								title={
									selectedWorker
										? `${selectedWorker.firstName} ${selectedWorker.lastName}`
										: 'Select Worker'
								}
								variant='secondary'
							>
								{props.playerData.workers.map((worker, index) => (
									<Dropdown.Item
										key={index}
										onClick={() => handleWorkerSelect(worker)} // Use onClick event instead of onSelect
									>
										{worker.firstName} {worker.lastName}
									</Dropdown.Item>
								))}
							</DropdownButton>
						</div>
						<div
							style={{
								display: 'flex',
							}}
						>
							<p
								style={{
									height: 0,
									paddingTop: 2,
									width: 150,
								}}
							>
								<strong>Recipe: </strong>
							</p>
							<DropdownButton
								size='sm'
								title='Select Recipe'
								variant='secondary'
							>
								<Dropdown.Item>No Available Recipes</Dropdown.Item>
							</DropdownButton>
						</div>
					</div>
				</div>
				<div
					style={{
						width: '20%',
						display: 'flex',
						justifyContent: 'right',
					}}
				>
					<Button
						style={buttonStyle}
						disabled={disabledUpgrade}
						onClick={handleUpgradeClick}
					>
						<div>
							{upgradeCost > 0
								? `Upgrade to Level ${props.station.level + 1}`
								: 'Max Level'}
							<div
								style={{
									display: 'flex',
									height: '100%',
									display: 'flex',
									alignItems: 'center',
									marginLeft: 20,
								}}
							>
								<div
									style={{
										//border: '2px solid black',
										height: 50,
										display: 'flex',
										justifyContent: 'right',
										alignItems: 'center',
									}}
								>
									<p>
										<strong>
											{props.UpgradeData.filter((x, i) => {
												return x.level === props.station.level + 1;
											}).map((x, i) => {
												return x.cost;
											})}
										</strong>
									</p>
								</div>
								<div
									style={{
										//border: '2px solid black',
										height: 50,
									}}
								>
									<Image
										style={{
											width: 23,
											marginTop: 6,
										}}
										src={upgradeCost > 0 ? DreamEssenceToken : ''}
									></Image>
								</div>
							</div>
						</div>
					</Button>
				</div>
			</div>
		</div>
	);
};

export default FactoryStation;
