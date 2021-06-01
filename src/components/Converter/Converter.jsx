import ConvertedCurrency from './ConvertedCurrency/ConvertedCurrency'
import s from './Converter.module.css'
import ConvertibleCurrency from './ConvertibleCurrency/ConvertibleCurrency'

const Converter = ({ state, countries, currency, dispatch }) => {
	return (
		<div className={s.converter}>
			<ConvertibleCurrency countryList={countries.countryList} />
			<ConvertedCurrency
				countryList={countries.countryList}
				dispatch={dispatch}
				newCurrencyCode={state.currency.converted.code}
			/>
		</div>
	)
}

export default Converter
