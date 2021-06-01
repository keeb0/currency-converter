import './App.css'
import Converter from './components/Converter/Converter'

function App({ state, dispatch }) {
	return (
		<div className="app-wrapper">
			<Converter
				state={state}
				countries={state.countries}
				currency={state.currency}
				dispatch={dispatch}
			/>
		</div>
	)
}

export default App
