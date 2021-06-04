import { connect } from 'react-redux'
import {
	updateOriginalAmount,
	updateOriginalId,
	updateOutcomeAmount,
	updateOutcomeId,
} from '../../redux/currency/actions'
import { convertOriginal, convertOutcome } from '../../redux/currency/functions'
import store from '../../redux/store'
import Converter from './Converter'

const stateGlobal = store.getState()

const mapStateToProps = state => ({
	originalId: state.currency.original.id,
	originalAmount: state.currency.original.amount,

	outcomeId: state.currency.outcome.id,
	outcomeAmount: state.currency.outcome.amount,

	currencyList: state.currency.list,
})
const mapDispatchToProps = d => ({
	onInputOriginalId: e => d(updateOriginalId(e.target.value)),
	onInputOriginalAmount: e => {
		d(updateOriginalAmount(e.target.value))
		convertOriginal(
			stateGlobal.currency.list[stateGlobal.currency.original.id].currencyId,
			stateGlobal.currency.list[stateGlobal.currency.outcome.id].currencyId
		)
	},

	onInputOutcomeId: e => d(updateOutcomeId(e.target.value)),
	onInputOutcomeAmount: e => {
		d(updateOutcomeAmount(e.target.value))
		convertOutcome(
			stateGlobal.currency.list[stateGlobal.currency.original.id].currencyId,
			stateGlobal.currency.list[stateGlobal.currency.outcome.id].currencyId
		)
	},
})

const ConverterContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(Converter)

export default ConverterContainer
