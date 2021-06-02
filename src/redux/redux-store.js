import { combineReducers, createStore } from 'redux'
// import countriesReducer from './reducers/countries-reducer'
import currencyReducer from './reducers/currency-reducer'

const reducers = combineReducers({
	// countries: countriesReducer,
	currency: currencyReducer,
})

const store = createStore(reducers)

export default store
