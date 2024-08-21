import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PdfDownloadQR from './PdfDownloadQR';

const App = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route
					path='*'
					element={<PdfDownloadQR />}
				/>
			</Routes>
		</BrowserRouter>
	);
};

export default App;
