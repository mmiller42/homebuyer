import React, { cloneElement } from 'react';

let count = 0;

export default function Row({ label, description, preview, children }) {
	const id = `field-${++count}`;
	const field = cloneElement(children, { id });
	return (
		<tr>
			<th><label htmlFor={id}>{label}</label></th>
			<td>{field}</td>
			<td className="preview">{preview}</td>
			<td className="description">{description}</td>
		</tr>
	);
}
