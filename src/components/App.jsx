import React, { PureComponent } from 'react';
import '../css/App.css';
import ValuesEditor from './ValuesEditor';
import Results from './Results';

export default class App extends PureComponent {
	constructor(props) {
		super(props);

		this.state = Object.assign({
			rentAmount: 1000,
			rentInsurance: 10,
			rentElectricity: 50,
			rentWater: 20,
			rentGas: 20,
			rentSewageTrash: 10,
			rentOtherExpenses: 100,
			homePrice: 300000,
			homeDownPayment: 20,
			homeClosingCosts: 3,
			homeMortgageRate: 4.25,
			homeMortgageTerm: 30,
			homePropertyTaxRate: 1,
			homeMaintenanceCost: 1,
			homeInsurance: 100,
			homeHoa: 0,
			homeElectricity: 150,
			homeWater: 50,
			homeGas: 50,
			homeSewageTrash: 20,
			homeOtherExpenses: 100,
			homeAppreciationRate: 3
		}, JSON.parse(window.localStorage.getItem('homebuyer')) || {});

		this.setValue = this.setValue.bind(this);
	}

	setValue(property, value) {
		this.setState(
			{ [property]: value },
			() => window.localStorage.setItem('homebuyer', JSON.stringify(this.state))
		);
	}

	render() {
		return (
			<div>
				<ValuesEditor state={this.state} setValue={this.setValue} />
				<Results state={this.state} />
			</div>
		);
	}
}
