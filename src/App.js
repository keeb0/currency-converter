import './App.css'
import Converter from './components/Converter/Converter'

function App({ state, dispatch, creators }) {
	return (
		<div className="app-wrapper">
			<Converter state={state} dispatch={dispatch} creators={creators} />
		</div>
	)
}

export default App
