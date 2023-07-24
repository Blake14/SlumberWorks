import React from 'react';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import { useNavigate } from 'react-router-dom';
import LogoBanner from '../../assets/LogoBanner.png';
import DreamEssenceToken from '../../assets/DreamEssenceToken.png';
import DarkDreamEssenceToken from '../../assets/DarkDreamEssenceToken.png';

const ResourceBar = (props) => {
	const navigate = useNavigate();
	return (
		<div
			style={{
				height: 50,
				width: '100%',
				backgroundColor: 'white',
				display: 'flex',
				color: 'black',
				padding: 10,
				marginBottom: 25,
			}}
		>
			<div
				style={{
					height: '100%',
					display: 'flex',
				}}
			>
				<Image style={{ marginRight: 25 }} src={LogoBanner}></Image>
				<div
					style={{
						marginLeft: 10,
					}}
				>
					<p>
						<strong>Night:</strong>
						{` 0`}
					</p>
				</div>
				<div
					style={{
						marginLeft: 20,
					}}
				>
					<p>
						<strong>Dream Workers: </strong>
						{props.playerData.workers.length}
					</p>
				</div>
				<Button
					onClick={() => {
						navigate('/');
					}}
					style={{
						marginLeft: 20,
					}}
					size='sm'
					variant='outline-danger'
				>
					Quit Demo
				</Button>
			</div>
			<div
				style={{
					display: 'flex',
					justifyContent: 'right',
				}}
			>
				<p>
					<strong>
						{props.playerData.dreamEssence
							.toString()
							.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
					</strong>
				</p>
				<Image
					src={DreamEssenceToken}
					style={{
						height: '100%',
						marginLeft: 5,
						marginRight: 25,
					}}
				></Image>
				<p>
					<strong>
						{props.playerData.darkDreamEssence
							.toString()
							.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
					</strong>
				</p>
				<Image
					src={DarkDreamEssenceToken}
					style={{
						height: '100%',
						marginLeft: 5,
						marginRight: 25,
					}}
				></Image>
			</div>
		</div>
	);
};

export default ResourceBar;
