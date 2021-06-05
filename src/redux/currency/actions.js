import store from '../store'
import {
	CONVERT_ORIGINAL,
	CONVERT_OUTCOME,
	LOAD_LIST,
	UPDATE_ORIGINAL_AMOUNT,
	UPDATE_ORIGINAL_ID,
	UPDATE_OUTCOME_AMOUNT,
	UPDATE_OUTCOME_ID,
	UPDATE_RATE,
} from './types'

export const updateOriginalId = newId => ({ type: UPDATE_ORIGINAL_ID, newId })
export const updateOriginalAmount = newAmount => ({
	type: UPDATE_ORIGINAL_AMOUNT,
	newAmount,
})
export const convertOriginal = () => ({ type: CONVERT_ORIGINAL })

export const updateOutcomeId = newId => ({ type: UPDATE_OUTCOME_ID, newId })
export const updateOutcomeAmount = newAmount => ({
	type: UPDATE_OUTCOME_AMOUNT,
	newAmount,
})
export const convertOutcome = () => ({ type: CONVERT_OUTCOME })

export const loadList = newList => {
	return { type: LOAD_LIST, newList }
	// return dispatch => {
	// 	fetch(
	// 		'https://free.currconv.com/api/v7/countries?apiKey=86ec7e09e97d7e0a9e48'
	// 	)
	// 		.then(response => response.json())
	// 		.then(json => {
	// 			dispatch({ type: LOAD_LIST, list })
	// 		})
	// }
}

export const updateRate = () => {
	return dispatch => {
		const state = store.getState().currency
		const originalCurrencyId = state.list[state.original.id].currencyId
		const outcomeCurrencyId = state.list[state.outcome.id].currencyId

		const url = `https://free.currconv.com/api/v7/convert?q=${originalCurrencyId}_${outcomeCurrencyId},${outcomeCurrencyId}_${originalCurrencyId}&compact=ultra&apiKey=86ec7e09e97d7e0a9e48`
		
		fetch(url)
			.then(response => response.json())
			.then(json => {
				const newRate = json[outcomeCurrencyId + '_' + originalCurrencyId]
				dispatch({ type: UPDATE_RATE, newRate })
				dispatch(convertOriginal())
			})
	}
}
