import React, { useState } from 'react';
import './Content.css';

const Content = ({ close, onSaveNewClass }) => {
	const [enteredName, setEnteredName] = useState('');
	const [enteredPart, setEnteredPart] = useState('');
	const [enteredTopic, setEnteredTopic] = useState('');
	const [enteredRoom, setEnteredRoom] = useState('');

	const nameChangeHandler = (event) => {
		setEnteredName(event.target.value);
	};

	const partChangeHandler = (event) => {
		setEnteredPart(event.target.value);
	};

	const topicChangeHandler = (event) => {
		setEnteredTopic(event.target.value);
	};

	const roomChangeHandler = (event) => {
		setEnteredRoom(event.target.value);
	};

	const submitHandler = async (event) => {
		event.preventDefault();
		const newClass = {
			name: enteredName,
			part: enteredPart,
			topic: enteredTopic,
			room: enteredRoom,
		};
		await onSaveNewClass(newClass);
	};
	return (
		<div className="modal">
			<a className="close" onClick={close}>
				&times;
			</a>
			<div className="header"> Add new class </div>
			<div className="content">
				{' '}
				<form onSubmit={submitHandler}>
					<div className="new-expense__controls">
						<div className="new-expense__control">
							<label>Name</label>
							<input type="text" onChange={nameChangeHandler} />
						</div>
						<div className="new-expense__control">
							<label>Part</label>
							<input type="text" onChange={partChangeHandler} />
						</div>
						<div className="new-expense__control">
							<label>Topic</label>
							<input type="text" onChange={topicChangeHandler} />
						</div>
						<div className="new-expense__control">
							<label>Room</label>
							<input type="text" onChange={roomChangeHandler} />
						</div>
					</div>
					<div className="new-expense__actions">
						<button type="submit">Add</button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default Content;
