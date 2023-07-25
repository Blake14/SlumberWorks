import React from 'react';

const BuildingSlot = (props) => {
	const handleMouseEnter = (index) => {
		const updatedSlots = [...props.slots];
		updatedSlots[index].isHover = true;
		props.setSlots(updatedSlots);
	};

	const handleMouseLeave = (index) => {
		const updatedSlots = [...props.slots];
		updatedSlots[index].isHover = false;
		props.setSlots(updatedSlots);
	};
	return (
		<div
			key={props.slot.id}
			onMouseEnter={() => handleMouseEnter(props.index)}
			onMouseLeave={() => handleMouseLeave(props.index)}
			style={{
				backgroundColor: props.slot.isHover ? props.bgColor : 'transparent',
				width: props.slot.width,
				height: props.slot.height,
				position: 'absolute',
				top: props.slot.posY,
				left: props.slot.posX,
				border: `4px dotted ${
					props.slot.isHover && 1 === 2 //force false
						? 'transparent'
						: props.bgColor
				}`,
				borderRadius: 15,
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
				color: props.slot.isHover ? 'white' : props.bgColor,
				fontSize: props.slot.isHover ? 15 : 13,
				cursor: 'pointer',
			}}
		>
			<p
				style={{
					width: '100%',
					textAlign: 'center',
					marginTop: 15,
				}}
			>
				<strong>
					{props.slot.building === 'None'
						? 'Add Building'
						: props.slot.building}
				</strong>
			</p>
		</div>
	);
};

export default BuildingSlot;
