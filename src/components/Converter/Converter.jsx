import Currency from './Currency/Currency'
import s from './Converter.module.css'

const Converter = ({
	convertibleCurrencyId,
	convertedCountryId,
	updateConvertibleCurrencyIdCreator,
	updateConvertedCurrencyIdCreator,
}) => {
	return (
		<div className={s.converter}>
			<div>dsa</div>
			<Currency
				currencyId={convertibleCurrencyId}
				updateCurrencyIdCreator={updateConvertibleCurrencyIdCreator}
			/>
			<Currency
				currencyId={convertedCountryId}
				updateCurrencyIdCreator={updateConvertedCurrencyIdCreator}
			/>
		</div>
	)
}

export default Converter
