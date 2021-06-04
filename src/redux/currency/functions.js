import store from '../store'
import {
	convertOriginal as originalAction,
	convertOutcome as outcomeAction,
} from './actions'

export const convertOriginal = (original, outcome) => {
	const url = `https://free.currconv.com/api/v7/convert?q=${original}_${outcome},${outcome}_${original}&compact=ultra&apiKey=86ec7e09e97d7e0a9e48`
	console.log(url)
	fetch(url)
		.then(response => response.json())
		.then(json => {
			const rate = json[original + '_' + outcome]
			const originalAmount = store.getState().currency.original.amount

			store.dispatch(originalAction(originalAmount * rate))
		})
}

export const convertOutcome = (original, outcome) => {
	const url = `https://free.currconv.com/api/v7/convert?q=${original}_${outcome},${outcome}_${original}&compact=ultra&apiKey=86ec7e09e97d7e0a9e48`
	console.log(url)
	fetch(url)
		.then(response => response.json())
		.then(json => {
			const rate = json[outcome + '_' + original]
			const outComeAmount = store.getState().currency.outcome.amount

			store.dispatch(outcomeAction(outComeAmount * rate))
		})
}
