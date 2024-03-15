/** @format */

import React from 'react';
import { Header, Footer } from './layouts';
import { Asian, Learn, Menu, Meat, Farm, Contact } from './components';
function App() {
	return (
		<>
			<Header />
			<Menu />
			<Learn />
			<Asian />
			<Meat />
			<Farm />
			<Contact />
			<Footer />
		</>
	);
}

export default App;
