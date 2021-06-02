import { useContext } from 'react'
import { Context } from '../../../../Context'
import SelectCurrency from './SelectCurrency'

const SelectCurrencyContainer = ({ currencyId, updateCurrencyIdCreator }) => {
	const { store } = useContext(Context)
	const currencyList = store.getState().currency.currencyList

	const onInputCurrencyId = e => {
		const action = updateCurrencyIdCreator(e)
		store.dispatch(action)
	}

	return (
		<SelectCurrency
			currencyList={currencyList}
			currencyId={currencyId}
			onInputCurrencyId={onInputCurrencyId}
		/>
	)
}

export default SelectCurrencyContainer
