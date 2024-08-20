import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { redirects } from './redirects';

const DocumentRedirect = () => {
	const { fileName } = useParams();

	useEffect(() => {
		const filePath = redirects[fileName];
		if (filePath) {
			window.location.href = filePath;
		} else {
			// Handle case where fileName is not found
			alert('File not found.');
		}
	}, [fileName]);

	return (
		<div>
			<p>Redirecting to your document...</p>
		</div>
	);
};

export default DocumentRedirect;
