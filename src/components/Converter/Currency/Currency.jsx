import s from './Currency.module.css'
import SelectCountry from './SelectCountry/SelectCountry'
import FlagIcon from './FlagIcon/FlagIcon'

const Currency = ({
	countryList,
	dispatch,
	countryCode,
	actionType,
}) => {
	return (
		<div className={s.currency}>
			<FlagIcon selectedCountry={countryList[countryCode]} />
			<SelectCountry
				countryList={countryList}
				dispatch={dispatch}
				selectedCountry={countryCode}
				actionType={actionType}
			/>
		</div>
	)
}

export default Currency
