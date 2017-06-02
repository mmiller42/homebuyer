import React from 'react';
import Row from './Row';
import Field from './Field';

export default function RentFieldset({ state, setValue }) {
	return (
		<fieldset>
			<legend>Rent</legend>
			<table>
				<tbody>
					<Row
						label="Rent"
						description="Total monthly rent payment, per month."
					>
						<Field
							value={state.rentAmount}
							setValue={value => setValue('rentAmount', value)}
							prefix="$"
							suffix="/mo"
						/>
					</Row>
					<Row
						label="Renters Insurance"
						description="Renters insurance premium, per month."
					>
						<Field
							value={state.rentInsurance}
							setValue={value => setValue('rentInsurance', value)}
							prefix="$"
							suffix="/mo"
						/>
					</Row>
					<Row
						label="Electricity"
						description="Average cost of electricity, per month."
					>
						<Field
							value={state.rentElectricity}
							setValue={value => setValue('rentElectricity', value)}
							prefix="$"
							suffix="/mo"
						/>
					</Row>
					<Row
						label="Water"
						description="Average cost of water, per month."
					>
						<Field
							value={state.rentWater}
							setValue={value => setValue('rentWater', value)}
							prefix="$"
							suffix="/mo"
						/>
					</Row>
					<Row
						label="Gas"
						description="Average cost of gas, per month."
					>
						<Field
							value={state.rentGas}
							setValue={value => setValue('rentGas', value)}
							prefix="$"
							suffix="/mo"
						/>
					</Row>
					<Row
						label="Sewage/Trash"
						description="Cost of sewage and trash, per month."
					>
						<Field
							value={state.rentSewageTrash}
							setValue={value => setValue('rentSewageTrash', value)}
							prefix="$"
							suffix="/mo"
						/>
					</Row>
					<Row
						label="Other Expenses"
						description="Internet, TV, other utilities, parking, and any other expenses, per month."
					>
						<Field
							value={state.rentOtherExpenses}
							setValue={value => setValue('rentOtherExpenses', value)}
							prefix="$"
							suffix="/mo"
						/>
					</Row>
				</tbody>
			</table>
		</fieldset>
	);
}
