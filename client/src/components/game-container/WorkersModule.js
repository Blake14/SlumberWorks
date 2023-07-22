import React from 'react';

const WorkersModule = () => {
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
		</div>
	);
};

export default WorkersModule;
