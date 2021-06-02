// import s from './SelectCountry.module.css'

const SelectCurrency = ({ currencyList, currencyId, onInputCurrencyId }) => {
	const currencyOptions = Object.values(currencyList).map(currency => (
		<option key={currency.id} value={currency.id}>
			{currency.currencyId}
		</option>
	))

	return (
		<select value={currencyId} onInput={onInputCurrencyId}>
			{currencyOptions}
		</select>
	)
}

export default SelectCurrency
