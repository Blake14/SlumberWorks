import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import FactoryStation from './FactoryStation';

const FactoryFloor = (props) => {
	const navigate = useNavigate();
	return (
		<div
			style={{
				width: '50%',
				minWidth: 450,
			}}
		>
			{[...Array(props.playerData.stations.length + 1)].map(
				(station, index) => {
					if (index + 1 <= props.playerData.stations.length) {
						return (
							<FactoryStation
								key={index}
								station={props.playerData.stations[index]}
								index={index}
								setPlayerData={props.setPlayerData}
								headerColor={props.headerColor}
								playerData={props.playerData}
								UpgradeData={props.UpgradeData}
							></FactoryStation>
						);
					} else {
						return (
							<div
								key={index}
								style={{
									backgroundColor: '#9a8c98',
									width: '100%',
									height: 150,
									borderRadius: 25,
									padding: 15,
									color: 'black',
									margin: 10,
									display: 'flex',
									justifyContent: 'center',
									alignItems: 'center',
									cursor: 'pointer',
								}}
								onMouseEnter={(e) => {
									e.target.style.backgroundColor = '#8d99ae';
								}}
								onMouseLeave={(e) => {
									e.target.style.backgroundColor = '#9a8c98';
								}}
							>
								<strong>+ Buy New Station</strong>
							</div>
						);
					}
				}
			)}
		</div>
	);
};

export default FactoryFloor;
