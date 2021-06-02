const LOAD_COUNTRIES = 'LOAD_COUNTRIES'
const UPDATE_COUNTRY_TO_CONVERT_INDEX = 'UPDATE_COUNTRY_TO_CONVERT_INDEX'
const UPDATE_CONVERTIBLE_COUNTRY_INDEX = 'UPDATE_CONVERTIBLE_COUNTRY_INDEX'

const countryList = require('../currencies.json')
const initialState = {
	countryList,
	convertibleCountryIndex: '1',
	countryToConvertIndex: '2',
}

const countriesReducer = (state = initialState, action) => {
	switch (action.type) {
		case LOAD_COUNTRIES:
			state.countryList = action.countryList
			return state

		case UPDATE_COUNTRY_TO_CONVERT_INDEX:
			state.countryToConvertIndex = action.newIndex
			return state

		case UPDATE_CONVERTIBLE_COUNTRY_INDEX:
			state.convertibleCountryIndex = action.newIndex
			return state

		default:
			return state
	}
}

export const loadCountriesCreator = countryList => ({
	type: LOAD_COUNTRIES,
	countryList,
})

export const updateConvertibleCountryIndexCreator = e => ({
	type: UPDATE_CONVERTIBLE_COUNTRY_INDEX,
	newIndex: e.target.value,
})

export const updateCountryToConvertIndexCreator = e => ({
	type: UPDATE_COUNTRY_TO_CONVERT_INDEX,
	newIndex: e.target.value,
})

export default countriesReducer
