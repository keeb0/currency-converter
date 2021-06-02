import s from './Currency.module.css'
import FlagIcon from './FlagIcon/FlagIcon'
import SelectCurrencyContainer from './SelectCurrency/SelectCurrencyContainer'

const Currency = ({ currencyId, updateCurrencyIdCreator }) => {
	return (
		<div className={s.currency}>
			<FlagIcon currencyId={currencyId} />
			<SelectCurrencyContainer
				currencyId={currencyId}
				updateCurrencyIdCreator={updateCurrencyIdCreator}
			/>
		</div>
	)
}

export default Currency
