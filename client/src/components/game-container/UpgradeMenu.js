import React from 'react';

const UpgradeMenu = (props) => {
	return (
		<div
			style={{
				width: '100%',
				borderRadius: 25,
				backgroundColor: 'white',
				height: 150,
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
				Upgrades
			</div>
		</div>
	);
};

export default UpgradeMenu;
