import s from './FlagIcon.module.css'

const FlagIcon = ({ currencyId }) => {
	const imgSrc = `https://flagcdn.com/${currencyId.toLowerCase()}.svg`
	return (
		<div className={s.flag}>
			<img src={imgSrc} alt={currencyId} />
		</div>
	)
}

export default FlagIcon
