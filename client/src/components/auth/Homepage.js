import React from 'react';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import { useNavigate } from 'react-router-dom';

const Homepage = (props) => {
	const navigate = useNavigate();
	return (
		<div>
			<div
				style={{
					display: 'flex',
					justifyContent: 'center',
				}}
			>
				<Image src={props.Logo}></Image>
			</div>
			<div
				style={{
					display: 'flex',
					justifyContent: 'space-evenly',
				}}
			>
				<Button
					onClick={() => {
						navigate('/lineup');
					}}
					variant='success'
				>
					Launch Demo
				</Button>
			</div>
		</div>
	);
};

export default Homepage;
