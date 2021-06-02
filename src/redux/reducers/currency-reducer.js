const UPDATE_CONVERTIBLE_CURRENCY_AMOUNT = 'UPDATE_CONVERTIBLE_CURRENCY_AMOUNT'
const UPDATE_CONVERTED_CURRENCY_AMOUNT = 'UPDATE_CONVERTED_CURRENCY_AMOUNT'

const UPDATE_CONVERTIBLE_CURRENCY_ID = 'UPDATE_CONVERTIBLE_CURRENCY_ID'
const UPDATE_CONVERTED_CURRENCY_ID = 'UPDATE_CONVERTED_CURRENCY_ID'
const LOAD_CURRENCY_LIST = 'LOAD_CURRENCY_LIST'

const currencyList = require('../currencies.json').results

const initialState = {
	convertible: {
		currencyId: 'AF',
		amount: 0,
	},
	converted: {
		currencyId: 'AI',
		amount: 0,
	},
	currencyList,
}

const currencyReducer = (state = initialState, action) => {
	switch (action.type) {
		case UPDATE_CONVERTIBLE_CURRENCY_ID:
			state.convertible.currencyId = action.newId
			return state

		case UPDATE_CONVERTED_CURRENCY_ID:
			state.converted.currencyId = action.newId
			return state

		case UPDATE_CONVERTIBLE_CURRENCY_AMOUNT:
			state.convertible.amount = action.newAmount
			return state

		case UPDATE_CONVERTED_CURRENCY_AMOUNT:
			state.converted.amount = action.newAmount
			return state

		case LOAD_CURRENCY_LIST:
			state.currencyList = action.loadedList
			return state

		default:
			return state
	}
}

export const updateConvertibleCurrencyIdCreator = e => ({
	type: UPDATE_CONVERTIBLE_CURRENCY_ID,
	newId: e.target.value,
})

export const updateConvertedCurrencyIdCreator = e => ({
	type: UPDATE_CONVERTED_CURRENCY_ID,
	newId: e.target.value,
})

export default currencyReducer
