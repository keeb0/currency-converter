import Currency from './Currency/Currency'
import s from './Converter.module.css'

const Converter = ({ state, dispatch }) => {
	return (
		<div className={s.converter}>
			<Currency
				countryList={state.countries.countryList}
				countryCode={state.countries.convertibleCountryIndex}
				dispatch={dispatch}
				actionType="UPDATE_CONVERTIBLE_COUNTRY_INDEX"
			/>
			<Currency
				countryList={state.countries.countryList}
				countryCode={state.countries.countryToConvertIndex}
				dispatch={dispatch}
				actionType="UPDATE_COUNTRY_TO_CONVERT_INDEX"
			/>
		</div>
	)
}

export default Converter
