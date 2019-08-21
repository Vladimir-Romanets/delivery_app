export const normalizeCost = (value) => {
	if (!value) return value;
	if (isNaN(parseFloat(value))) return '';

	const numbers = (value.replace(/,/, '.')).replace(/[^0-9\.]/g, '');

	if ( numbers.slice(-1) === '.' ){
		return numbers.match(/\./g).length === 1 ? numbers : numbers.slice(0, numbers.length - 1);
	} else {
		return parseInt((parseFloat(numbers) * 100), 10)/100;
	}
}