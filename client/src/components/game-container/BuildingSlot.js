import React from 'react';
import { BsTrash } from 'react-icons/bs';

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
	if (props.slot.building === 'None') {
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
					fontVariant: 'all-petite-caps',
				}}
			>
				<p
					style={{
						width: '100%',
						textAlign: 'center',
						marginTop: 15,
					}}
				>
					<strong>Add Building</strong>
				</p>
			</div>
		);
	} else {
		return (
			<div
				key={props.slot.id}
				onMouseEnter={() => handleMouseEnter(props.index)}
				onMouseLeave={() => handleMouseLeave(props.index)}
				style={{
					backgroundColor: props.bgColor,
					width: props.slot.width,
					height: props.slot.height,
					position: 'absolute',
					top: props.slot.posY,
					left: props.slot.posX,
					border: `2px solid black`,
					borderRadius: 15,
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
					color: 'white',
					fontSize: props.slot.isHover ? 15 : 13,
					cursor: 'pointer',
					fontVariant: 'all-petite-caps',
				}}
			>
				<div
					style={{
						position: 'absolute',
						top: -20,
						left: -20,
						fontSize: 16,
						color: props.slot.isHover ? 'black' : 'transparent',
					}}
				>
					<BsTrash />
				</div>
				<div
					style={{
						position: 'absolute',
						top: 2,
					}}
				>
					<p>
						<strong>{props.slot.building}</strong>
					</p>
				</div>
				<div
					style={{
						position: 'absolute',
						top: 18,
						fontSize: 10,
					}}
				>
					<p>
						<strong>Status: </strong>Idle
					</p>
				</div>
				<div
					style={{
						position: 'absolute',
						top: 28,
						fontSize: 10,
					}}
				>
					<p>
						<strong>Workers: </strong>0
					</p>
				</div>
				<div
					style={{
						position: 'absolute',
						top: 38,
						fontSize: 10,
					}}
				>
					<p>
						<strong>Manager: </strong>Jesus Christ
					</p>
				</div>
			</div>
		);
	}
};

export default BuildingSlot;
