import SelectCurrency from '../SelectCurrency/SelectCurrency'
import s from './ConvertedCurrency.module.css'

const ConvertedCurrency = ({ countryList, dispatch, newCurrencyCode }) => {
	return (
		<div>
			<SelectCurrency countryList={countryList} dispatch={dispatch} newCurrencyCode={newCurrencyCode}/>
		</div>
	)
}

export default ConvertedCurrency
