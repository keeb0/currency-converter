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

const initialState = {
	original: {
		id: 'US',
		amount: '1',
	},
	outcome: {
		id: 'KG',
		amount: '',
	},
	list: [],
	rate: 0,
}

const currencyReducer = (state = initialState, action) => {
	const stateCopy = { ...state }

	switch (action.type) {
		case UPDATE_ORIGINAL_ID:
			stateCopy.original.id = action.newId
			return stateCopy

		case UPDATE_ORIGINAL_AMOUNT:
			stateCopy.original.amount = action.newAmount
			return stateCopy

		case UPDATE_OUTCOME_ID:
			stateCopy.outcome.id = action.newId
			return stateCopy

		case UPDATE_OUTCOME_AMOUNT:
			stateCopy.outcome.amount = action.newAmount
			return stateCopy

		case CONVERT_ORIGINAL:
			stateCopy.outcome.amount = (state.original.amount / state.rate).toFixed(2)
			return stateCopy

		case CONVERT_OUTCOME:
			stateCopy.original.amount = (state.outcome.amount * state.rate).toFixed(2)
			return stateCopy

		case LOAD_LIST:
			stateCopy.list = action.newList
			return stateCopy

		case UPDATE_RATE:
			stateCopy.rate = action.newRate
			return stateCopy

		default:
			return state
	}
}

export default currencyReducer
