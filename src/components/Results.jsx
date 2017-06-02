import React from 'react';
import { getInstallment } from 'loan-calculations';

export default function Results({ state }) {
	const mortgagePayment = getInstallment(
		(1 - (state.homeDownPayment / 100)) * state.homePrice,
		state.homeMortgageRate / 100,
		state.homeMortgageTerm * 12
	);

	const maintenanceCost = ((state.homeMaintenanceCost / 100) * state.homePrice) / 12;
	const propertyTaxCost = ((state.homePropertyTaxRate / 100) * state.homePrice) / 12;

	const rentTotal = (
		state.rentAmount +
		state.rentInsurance +
		state.rentElectricity +
		state.rentWater +
		state.rentGas +
		state.rentSewageTrash +
		state.rentOtherExpenses
	);

	const homeTotal = (
		mortgagePayment +
		maintenanceCost +
		propertyTaxCost +
		state.homeInsurance +
		state.homeHoa +
		state.homeElectricity +
		state.homeWater +
		state.homeGas +
		state.homeSewageTrash +
		state.homeOtherExpenses
	);

	const difference = rentTotal - homeTotal;

	return (
		<div className="results">
			<table>
				<thead>
					<tr>
						<th colSpan="2">Rent Cost</th>
						<th colSpan="2">Home Cost</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<th>Rent</th>
						<td className="value">${Math.ceil(state.rentAmount).toLocaleString()}</td>
						<th>Mortgage</th>
						<td className="value">${Math.ceil(mortgagePayment).toLocaleString()}</td>
					</tr>
					<tr>
						<th />
						<td />
						<th>Maintenance</th>
						<td className="value">${Math.ceil(maintenanceCost).toLocaleString()}</td>
					</tr>
					<tr>
						<th />
						<td />
						<th>Property Tax</th>
						<td className="value">${Math.ceil(propertyTaxCost).toLocaleString()}</td>
					</tr>
					<tr>
						<th>Renters Insurance</th>
						<td className="value">${Math.ceil(state.rentInsurance).toLocaleString()}</td>
						<th>Home Insurance</th>
						<td className="value">${Math.ceil(state.homeInsurance).toLocaleString()}</td>
					</tr>
					<tr>
						<th />
						<td />
						<th>HOA</th>
						<td className="value">${Math.ceil(state.homeHoa).toLocaleString()}</td>
					</tr>
					<tr>
						<th>Electricity</th>
						<td className="value">${Math.ceil(state.rentElectricity).toLocaleString()}</td>
						<th>Electricity</th>
						<td className="value">${Math.ceil(state.rentElectricity).toLocaleString()}</td>
					</tr>
					<tr>
						<th>Water</th>
						<td className="value">${Math.ceil(state.rentWater).toLocaleString()}</td>
						<th>Water</th>
						<td className="value">${Math.ceil(state.homeWater).toLocaleString()}</td>
					</tr>
					<tr>
						<th>Gas</th>
						<td className="value">${Math.ceil(state.rentGas).toLocaleString()}</td>
						<th>Gas</th>
						<td className="value">${Math.ceil(state.homeGas).toLocaleString()}</td>
					</tr>
					<tr>
						<th>Sewage/Trash</th>
						<td className="value">${Math.ceil(state.rentSewageTrash).toLocaleString()}</td>
						<th>Sewage/Trash</th>
						<td className="value">${Math.ceil(state.homeSewageTrash).toLocaleString()}</td>
					</tr>
					<tr>
						<th>Other Expenses</th>
						<td className="value">${Math.ceil(state.rentOtherExpenses).toLocaleString()}</td>
						<th>Other Expenses</th>
						<td className="value">${Math.ceil(state.homeOtherExpenses).toLocaleString()}</td>
					</tr>
				</tbody>
				<tfoot>
					<tr>
						<th>Total</th>
						<td className="value">${Math.ceil(rentTotal).toLocaleString()}</td>
						<th>Total</th>
						<td className="value">${Math.ceil(homeTotal).toLocaleString()}</td>
					</tr>
					<tr>
						<th />
						<td className="value" />
						<th>Difference</th>
						<td className="large value">{difference < 0 ? '-' : ''}${Math.ceil(Math.abs(difference)).toLocaleString()}</td>
					</tr>
				</tfoot>
			</table>
		</div>
	);
}
