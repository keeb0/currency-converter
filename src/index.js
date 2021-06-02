import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import store from './redux/redux-store'
import { Context } from './Context'
import {
	updateConvertibleCurrencyIdCreator,
	updateConvertedCurrencyIdCreator,
} from './redux/reducers/currency-reducer'

const renderApp = () => {
	const contextVal = {
		store: store,
		creators: {
			updateConvertibleCurrencyIdCreator,
			updateConvertedCurrencyIdCreator,
		},
	}

	ReactDOM.render(
		<React.StrictMode>
			<Context.Provider value={contextVal}>
				<App />
			</Context.Provider>
		</React.StrictMode>,
		document.getElementById('root')
	)
}

renderApp()

store.subscribe(renderApp)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
