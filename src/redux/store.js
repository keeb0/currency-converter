import { applyMiddleware, createStore } from 'redux'
import thunk from 'redux-thunk'
import { loadList } from './currency/actions'
import s from './currency/currencies.json'
import rootReducer from './rootReducer'

const store = createStore(rootReducer, applyMiddleware(thunk))

const loadListFromServer = () => {
	// fetch(
	// 	'https://free.currconv.com/api/v7/countries?apiKey=86ec7e09e97d7e0a9e48'
	// )
	// 	.then(response => response.json())
	// 	.then(json => {
	//     store.dispatch(loadList(json.results))
	//   })
	store.dispatch(loadList(s.results))
	console.log('Currency list loaded')
}

loadListFromServer()

export default store
