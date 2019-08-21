export const phoneMask = (value) => {
	if ( !value ){
		return value;
	}

	let phone = value.replace(/[^\d]/gi, '');
	const l = phone.length;

	switch(true){
		case (l === 0):
			return '';
		case (l === 1):
			return phone;
		case (l > 1 && l < 5):
			return `+${phone[0]}(${phone.slice(1,4)}`; 
		case ( l >= 5 && l < 8):
			return `+${phone[0]}(${phone.slice(1,4)})${phone.slice(4,7)}`;
		case (l >= 8 &&  l < 10):
			return `+${phone[0]}(${phone.slice(1,4)})${phone.slice(4,7)}-${phone.slice(7,9)}`;
		default:
			return phone = `+${phone[0]}(${phone.slice(1,4)})${phone.slice(4,7)}-${phone.slice(7,9)}-${phone.slice(9,11)}`;
	}
}