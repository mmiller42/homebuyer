import React from 'react';
import Row from './Row';
import Field from './Field';

export default function HomeFieldset({ state, setValue }) {
	return (
		<fieldset>
			<legend>Home</legend>
			<table>
				<tbody>
					<Row
						label="Home Price"
						description="Home purchase price."
					>
						<Field
							value={state.homePrice}
							setValue={value => setValue('homePrice', value)}
							prefix="$"
						/>
					</Row>
					<Row
						label="Down Payment"
						description="Percentage of the list price you will pay up front."
						preview={`$${Math.floor(((state.homeDownPayment / 100) * state.homePrice)).toLocaleString()}`}
					>
						<Field
							value={state.homeDownPayment}
							setValue={value => setValue('homeDownPayment', value)}
							suffix="%"
						/>
					</Row>
					<Row
						label="Closing Costs"
						description="Percentage of the list price you expect to pay in closing costs."
						preview={`$${Math.floor(((state.homeClosingCosts / 100) * state.homePrice)).toLocaleString()}`}
					>
						<Field
							value={state.homeClosingCosts}
							setValue={value => setValue('homeClosingCosts', value)}
							suffix="%"
						/>
					</Row>
					<Row
						label="Mortgage Rate"
						description="Percentage interest rate on the mortgage loan."
					>
						<Field
							value={state.homeMortgageRate}
							setValue={value => setValue('homeMortgageRate', value)}
							suffix="%"
						/>
					</Row>
					<Row
						label="Mortgage Term"
						description="The length of the loan, in years."
					>
						<Field
							value={state.homeMortgageTerm}
							setValue={value => setValue('homeMortgageTerm', value)}
							suffix=" years"
						/>
					</Row>
					<Row
						label="Property Tax Rate"
						description="Percentage of the home's value you expect to pay in property taxes, per year. This varies by state, county, and city."
						preview={`$${Math.floor(((state.homePropertyTaxRate / 100) * state.homePrice)).toLocaleString()}`}
					>
						<Field
							value={state.homePropertyTaxRate}
							setValue={value => setValue('homePropertyTaxRate', value)}
							suffix="%/year"
						/>
					</Row>
					<Row
						label="Maintenance Cost"
						description="Percentage of the home's value you expect it will cost to maintain the home, per year. Assume at least 1%."
						preview={`$${Math.floor(((state.homeMaintenanceCost / 100) * state.homePrice)).toLocaleString()}`}
					>
						<Field
							value={state.homeMaintenanceCost}
							setValue={value => setValue('homeMaintenanceCost', value)}
							suffix="%/year"
						/>
					</Row>
					<Row
						label="Home Insurance"
						description="Estimated home insurance premium, per month. This varies a lot by location, so be sure to get a quote."
					>
						<Field
							value={state.homeInsurance}
							setValue={value => setValue('homeInsurance', value)}
							prefix="$"
							suffix="/mo"
						/>
					</Row>
					<Row
						label="HOA"
						description="Homeowner association dues, per month."
					>
						<Field
							value={state.homeHoa}
							setValue={value => setValue('homeHoa', value)}
							prefix="$"
							suffix="/mo"
						/>
					</Row>
					<Row
						label="Electricity"
						description="Average cost of electricity, per month."
					>
						<Field
							value={state.homeElectricity}
							setValue={value => setValue('homeElectricity', value)}
							prefix="$"
							suffix="/mo"
						/>
					</Row>
					<Row
						label="Water"
						description="Average cost of electricity, per month."
					>
						<Field
							value={state.homeWater}
							setValue={value => setValue('homeWater', value)}
							prefix="$"
							suffix="/mo"
						/>
					</Row>
					<Row
						label="Gas"
						description="Average cost of gas, per month."
					>
						<Field
							value={state.homeGas}
							setValue={value => setValue('homeGas', value)}
							prefix="$"
							suffix="/mo"
						/>
					</Row>
					<Row
						label="Sewage/Trash"
						description="Cost of sewage and trash, per month."
					>
						<Field
							value={state.homeSewageTrash}
							setValue={value => setValue('homeSewageTrash', value)}
							prefix="$"
							suffix="/mo"
						/>
					</Row>
					<Row
						label="Other Expenses"
						description="Internet, TV, other utilities, parking, and any other expected home expenses, per month."
					>
						<Field
							value={state.homeOtherExpenses}
							setValue={value => setValue('homeOtherExpenses', value)}
							prefix="$"
							suffix="/mo"
						/>
					</Row>
					<Row
						label="Appreciation Rate"
						description="Estimated percentage of home appreciation, per year. This varies a lot by neighborhood, so be sure to research."
					>
						<Field
							value={state.homeAppreciationRate}
							setValue={value => setValue('homeAppreciationRate', value)}
							suffix="%/year"
						/>
					</Row>
				</tbody>
			</table>
		</fieldset>
	);
}
