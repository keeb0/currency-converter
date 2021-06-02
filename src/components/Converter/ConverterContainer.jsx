import { useContext } from 'react'
import { Context } from '../../Context'
import Converter from './Converter'

const ConverterContainer = () => {
	const {
		store,
		creators: {
			updateConvertibleCurrencyIdCreator,
			updateConvertedCurrencyIdCreator,
		},
	} = useContext(Context)
	const state = store.getState()

	return (
		<Converter
			convertibleCurrencyId={state.currency.convertible.currencyId}
			convertedCountryId={state.currency.converted.currencyId}
			updateConvertibleCurrencyIdCreator={updateConvertibleCurrencyIdCreator}
			updateConvertedCurrencyIdCreator={updateConvertedCurrencyIdCreator}
		/>
	)
}

export default ConverterContainer
