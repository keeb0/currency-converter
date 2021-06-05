import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import reportWebVitals from './reportWebVitals'
import './index.css'
import App from './App'
import store from './redux/store'
import { loadList, updateRate } from './redux/currency/actions'
import json from './redux/currency/currencies.json'

store.dispatch(loadList(json.results))
store.dispatch(updateRate())

render(
	<React.StrictMode>
		<Provider store={store}>
			<App />
		</Provider>
	</React.StrictMode>,
	document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
