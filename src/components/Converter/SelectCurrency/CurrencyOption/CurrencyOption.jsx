const CurrencyOption = ({ country }) => {
	return <option>{country.currencies[0].code}</option>
}

export default CurrencyOption
