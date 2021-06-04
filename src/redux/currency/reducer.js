import {
	CONVERT_ORIGINAL,
  CONVERT_OUTCOME,
	LOAD_LIST,
	UPDATE_ORIGINAL_AMOUNT,
	UPDATE_ORIGINAL_ID,
	UPDATE_OUTCOME_AMOUNT,
	UPDATE_OUTCOME_ID,
} from './types'

const initialState = {
	original: {
		id: 'KG',
		amount: '',
	},
	outcome: {
		id: 'US',
		amount: '',
	},
	list: [],
  converted: ''
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
			stateCopy.outcome.amount = action.convertedRes
      return stateCopy

		case CONVERT_OUTCOME:
			stateCopy.original.amount = action.convertedRes
      return stateCopy

		case LOAD_LIST:
			stateCopy.list = action.list
			return stateCopy

		default:
			return state
	}
}



export default currencyReducer
