const SelectCurrency = ({ currencyId, onInputCurrencyId, currencyList }) => {
	const options = Object.values(currencyList).map(currency => (
		<option value={currency.id} key={currency.id}>
			{currency.currencyId}
		</option>
	))

	return (
		<select value={currencyId} onInput={onInputCurrencyId}>
			{options}
		</select>
	)
}

export default SelectCurrency
