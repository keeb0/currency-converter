import SelectCurrency from './SelectCurrency/SelectCurrency'
import s from './Converter.module.css'

const Converter = ({
	originalId,
	originalAmount,
	onInputOriginalId,
	onInputOriginalAmount,

	outcomeId,
	outcomeAmount,
	onInputOutcomeId,
	onInputOutcomeAmount,

	currencyList,
}) => {
	return (
		<div className={s.converter}>
			<div className={s.currency}>
				<div className={s.currencyId}>
					<img
						src={`https://flagcdn.com/${originalId.toLowerCase()}.svg`}
						alt={originalId}
					/>
					<SelectCurrency
						currencyId={originalId}
						onInputCurrencyId={onInputOriginalId}
						currencyList={currencyList}
					/>
				</div>
				<input
					value={originalAmount}
					onInput={onInputOriginalAmount}
					type="number"
				/>
			</div>

			<div className={s.currency}>
				<div className={s.currencyId}>
					<img
						src={`https://flagcdn.com/${outcomeId.toLowerCase()}.svg`}
						alt={outcomeId}
					/>
					<SelectCurrency
						currencyId={outcomeId}
						onInputCurrencyId={onInputOutcomeId}
						currencyList={currencyList}
					/>
				</div>
				<input
					value={outcomeAmount}
					onInput={onInputOutcomeAmount}
					type="number"
				/>
			</div>
		</div>
	)
}

export default Converter
