import React, { useEffect, useState } from 'react';
import Popup from 'reactjs-popup';
import Content from '../Content/Content';
import Button from '@mui/material/Button';

const NewClass = () => {
	//const [postId, setPostId] = useState(null);
	let classData;

	const onSaveNewClassHanldler = async (enteredClassData) => {
		classData = { ...enteredClassData };
		const requestOptions = {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(classData),
		};
		fetch('https://afternoon-lowlands-12411.herokuapp.com/classes', requestOptions).then(
			(response) => {
				window.location.reload();
			}
		);
		// .then((data) => setPostId(data.id));
	};

	return (
		<div className="App">
			<Popup modal trigger={<Button variant="contained">Add Class</Button>}>
				{(close) => <Content close={close} onSaveNewClass={onSaveNewClassHanldler} />}
			</Popup>
		</div>
	);
};

export default NewClass;
