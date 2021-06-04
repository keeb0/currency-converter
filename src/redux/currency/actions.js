import {
	CONVERT_ORIGINAL,
	CONVERT_OUTCOME,
	LOAD_LIST,
	UPDATE_ORIGINAL_AMOUNT,
	UPDATE_ORIGINAL_ID,
	UPDATE_OUTCOME_AMOUNT,
	UPDATE_OUTCOME_ID,
} from './types'

export const updateOriginalId = newId => ({ type: UPDATE_ORIGINAL_ID, newId })
export const updateOriginalAmount = newAmount => ({
	type: UPDATE_ORIGINAL_AMOUNT,
	newAmount,
})

export const updateOutcomeId = newId => ({ type: UPDATE_OUTCOME_ID, newId })
export const updateOutcomeAmount = newAmount => ({
	type: UPDATE_OUTCOME_AMOUNT,
	newAmount,
})

export const loadList = list => ({ type: LOAD_LIST, list })

export const convertOriginal = convertedRes => ({
	type: CONVERT_ORIGINAL,
	convertedRes,
})
export const convertOutcome = convertedRes => ({
	type: CONVERT_OUTCOME,
	convertedRes,
})
