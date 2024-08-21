import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Home';
import PdfSearcher from './PdfSearcher';

const App = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route
					path='/'
					element={<Home />}
				/>
				<Route
					path='/wp-content/uploads/2024/05/:{filename}'
					element={<PdfSearcher />}
				/>
			</Routes>
		</BrowserRouter>
	);
};

export default App;
