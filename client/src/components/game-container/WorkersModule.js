import React from 'react';
import Button from 'react-bootstrap/Button';
import WorkerNamePlate from './WorkerNamePlate';

const WorkersModule = (props) => {
	//console.log(props.playerData.workers);
	return (
		<div
			style={{
				width: '20%',
				height: '100%',
				backgroundColor: 'white',
				borderRadius: 25,
				margin: 10,
				color: 'black',
				minWidth: 350,
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
				Dream Workers
			</div>
			<div
				style={{
					width: '100%',
					height: 50,
				}}
			>
				<Button
					variant='info'
					style={{
						margin: 10,
					}}
					onClick={props.handleGenerateWorker}
				>
					Hire Random
				</Button>
			</div>
			<div
				style={{
					overflow: 'scroll',
					height: 715,
					borderRadius: 25,
				}}
			>
				{props.playerData.workers
					.filter((wkr, idx) => {
						return wkr !== undefined;
					})
					.map((wkr, idx) => {
						console.log(wkr);
						return (
							<WorkerNamePlate
								key={idx}
								firstName={wkr.firstName}
								lastName={wkr.lastName}
								specialty={wkr.dreamSpecialty}
								age={wkr.age}
								bgColor={props.bgColor}
							/>
						);
					})}
			</div>
		</div>
	);
};

export default WorkersModule;
