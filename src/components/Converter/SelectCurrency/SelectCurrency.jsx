import CurrencyOption from './CurrencyOption/CurrencyOption'
import s from './SelectCurrency.module.css'

const SelectCurrency = ({ countryList, dispatch, newCurrencyCode }) => {
	const countriesWithCurrency = countryList.filter(
		country => country.currencies[0].code
	)

	const currencyOptions = countriesWithCurrency.map(country => {
		if (country.currencies[0]) {
			return <CurrencyOption country={country} key={country.alpha3Code} />
		}
	})

	return (
		<select
			value={newCurrencyCode}
			onInput={e =>
				dispatch({
					type: 'SELECT_CONVERTED_CURRENCY_CODE',
					newCode: e.target.value,
				})
			}
		>
			{currencyOptions}
		</select>
	)
}

export default SelectCurrency
