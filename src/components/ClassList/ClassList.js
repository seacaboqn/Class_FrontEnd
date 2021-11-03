import React, { useEffect, useState } from 'react';
import { Card } from '@mui/material';
import ClassCard from '../ClassCard/ClassCard';
import './ClassList.css'

const ClassList = () => {
	const [error, setError] = useState(null);
	const [isLoaded, setIsLoaded] = useState(false);
	const [items, setItems] = useState([]);
	useEffect(() => {
		fetch('http://localhost:3000/classes')
			.then((res) => res.json())
			.then(
				(result) => {
					setIsLoaded(true);
					setItems(result);
				},
				// Note: it's important to handle errors here
				// instead of a catch() block so that we don't swallow
				// exceptions from actual bugs in components.
				(error) => {
					setIsLoaded(true);
					setError(error);
				}
			);
	}, []);
	return (
		<div className="classlist">
			{items.map((cls) => (
				<ClassCard className={cls.name} classPart={cls.part} />
			))}
		</div>
	);
};

export default ClassList;
