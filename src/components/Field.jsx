import React from 'react';

export default function Field({ value, setValue, prefix, suffix }) {
	return (
		<div className="field">
			{prefix}
			<input
				type="number"
				min="0"
				value={value}
				onChange={event => setValue(parseFloat(event.target.value))}
			/>
			{suffix}
		</div>
	);
}
