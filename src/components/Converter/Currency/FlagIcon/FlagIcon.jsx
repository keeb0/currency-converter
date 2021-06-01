import s from './FlagIcon.module.css'

const FlagIcon = ({ selectedCountry }) => {
	return (
		<div className={s.flag}>
			<img src={selectedCountry && selectedCountry.flag} />
		</div>
	)
}

export default FlagIcon
