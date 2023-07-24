import React from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { RxCross2 } from 'react-icons/rx';

const WorkerNamePlate = (props) => {
	const label = {
		height: 0,
		width: '100%',
	};
	return (
		<div
			style={{
				height: 85,
				border: '1px solid black',
				padding: 10,
				margin: 10,
				borderRadius: 15,
				fontVariant: 'all-petite-caps',
				fontSize: 14,
				display: 'flex',
				backgroundColor: '#edf2fb',
				minWidth: 310,
			}}
		>
			<div style={{ marginTop: -30, width: '80%', minWidth: 200 }}>
				<div
					style={{
						height: 25,
						width: 25,
						backgroundColor: '#ef233c',
						borderRadius: 8,
						position: 'relative',
						top: 15,
						left: -15,
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center',
						color: 'white',
						fontSize: 20,
						cursor: 'pointer',
					}}
				>
					<RxCross2 />
				</div>
				<div
					style={{
						marginTop: 15,
						minWidth: 250,
					}}
				>
					<p style={label}>
						<strong>Name:</strong>
						{` ${props.firstName} ${props.lastName}`}
					</p>
					<p style={label}>
						<strong>Specialty:</strong>
						{` ${props.specialty}`}
					</p>
					<p style={label}>
						<strong>Age:</strong>
						{` ${props.age}`}
					</p>
				</div>
			</div>
			<ButtonGroup style={{ height: 25, margin: 10 }}>
				<Button variant='outline-danger' size='sm' style={{ fontSize: 10 }}>
					Fire
				</Button>
				<Button
					variant='outline-secondary'
					size='sm'
					style={{ fontSize: 10 }}
					disabled
				>
					Assign
				</Button>
			</ButtonGroup>
		</div>
	);
};

export default WorkerNamePlate;
