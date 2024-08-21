import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

const PdfSearcher = () => {
	const params = useParams();
	useEffect(() => {
		console.log(params.filename);
	}, []);
	return (
		<div>
			<h1> File </h1>
		</div>
	);
};
// 24221-tavern-table-instructions.pdf
export default PdfSearcher;
