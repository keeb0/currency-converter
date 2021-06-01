const SELECT_CONVERTIBLE_CURRENCY_CODE = 'SELECT_CONVERTIBLE_CURRENCY_CODE'
const SELECT_CONVERTED_CURRENCY_CODE = 'SELECT_CONVERTED_CURRENCY_CODE'
const UPDATE_CONVERTIBLE_CURRENCY_AMOUNT = 'UPDATE_CONVERTIBLE_CURRENCY_AMOUNT'
const UPDATE_CONVERTED_CURRENCY_AMOUNT = 'UPDATE_CONVERTED_CURRENCY_AMOUNT'

const initialState = {
	convertible: {
		code: '',
		amount: 0,
	},
	converted: {
		code: '',
		amount: 0,
	},
}

const currencyReducer = (state = initialState, action) => {
	switch (action.type) {
		case SELECT_CONVERTIBLE_CURRENCY_CODE:
			state.convertible.code = action.newCode
			return state

		case SELECT_CONVERTED_CURRENCY_CODE:
			state.converted.code = action.newCode
			return state

		case UPDATE_CONVERTIBLE_CURRENCY_AMOUNT:
			state.convertible.amount = action.newAmount
			return state

		case UPDATE_CONVERTED_CURRENCY_AMOUNT:
			state.converted.amount = action.newAmount
			return state

		default:
			return state
	}
}



export default currencyReducer
