import React from 'react';

const GameLog = (props) => {
	return (
		<div
			style={{
				width: '100%',
				borderRadius: 25,
				backgroundColor: 'white',
				height: 150,
				marginTop: 10,
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
				Game Log
			</div>
			<div
				style={{
					backgroundColor: '#c3baba',
					height: 120,
					width: '100%',
					borderBottomLeftRadius: 25,
					borderBottomRightRadius: 25,
					color: '#785964',
					fontSize: 12,
					padding: 10,
				}}
			>
				<div
					id='gameLogScroll'
					style={{
						overflow: 'auto',
						width: '100%',
						height: '96%',
					}}
				>
					{props.gameLog.map((logItem, index) => {
						return (
							<p key={index} style={{ height: 0 }}>
								{logItem}
							</p>
						);
					})}
				</div>
			</div>
		</div>
	);
};

export default GameLog;
