import React from 'react';
import RentFieldset from './RentFieldset';
import HomeFieldset from './HomeFieldset';

export default function ValuesEditor({ state, setValue }) {
	return (
		<form>
			<RentFieldset state={state} setValue={setValue} />
			<HomeFieldset state={state} setValue={setValue} />
		</form>
	);
}
