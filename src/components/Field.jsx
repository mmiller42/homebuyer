import React from 'react';

export default function Field({ value, id, setValue, prefix, suffix }) {
	return (
		<div className="field">
			{prefix}
			<input
				id={id}
				type="number"
				min="0"
				value={value}
				onChange={event => setValue(parseFloat(event.target.value))}
			/>
			{suffix}
		</div>
	);
}
