import React from 'react';

export default function Row({ label, description, preview, children }) {
	return (
		<tr>
			<th>{label}</th>
			<td>{children}</td>
			<td className="preview">{preview}</td>
			<td className="description">{description}</td>
		</tr>
	);
}
