import { connect } from 'react-redux'
import {
	convertOriginal,
	updateOriginalAmount,
	updateOriginalId,
	updateOutcomeAmount,
	updateOutcomeId,
	updateRate,
	convertOutcome,
} from '../../redux/currency/actions'
import Converter from './Converter'

const mapStateToProps = ({ currency: state }) => ({
	originalId: state.original.id,
	originalAmount: state.original.amount,

	outcomeId: state.outcome.id,
	outcomeAmount: state.outcome.amount,

	currencyList: state.list,
})
const mapDispatchToProps = d => ({
	onInputOriginalId: e => {
		d(updateOriginalId(e.target.value))
		d(updateRate())
	},
	onInputOriginalAmount: e => {
		d(updateOriginalAmount(e.target.value))
		d(convertOriginal())
	},

	onInputOutcomeId: e => {
		d(updateOutcomeId(e.target.value))

		d(updateRate())
	},
	onInputOutcomeAmount: e => {
		d(updateOutcomeAmount(e.target.value))
		d(convertOutcome())
	},
})

const ConverterContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(Converter)

export default ConverterContainer
