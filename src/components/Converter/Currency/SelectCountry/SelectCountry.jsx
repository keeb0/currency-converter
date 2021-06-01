import s from './SelectCountry.module.css'

const SelectCountry = ({
	countryList,
	dispatch,
	selectedCountry,
	actionType,
}) => {
	const countriesWithCurrency = countryList.filter(
		country => country.currencies[0].code
	)

	const currencyOptions = countriesWithCurrency.map((country, index) => {
		if (country.currencies[0]) {
			return (
				<option value={index + 1} key={country.alpha3Code}>
					{country.currencies[0].code}
				</option>
			)
		}
	})

	const onInputCountry = e =>
		dispatch({
			type: actionType,
			newIndex: e.target.value,
		})

	return (
		<select value={selectedCountry} onInput={onInputCountry}>
			{currencyOptions}
		</select>
	)
}

export default SelectCountry
