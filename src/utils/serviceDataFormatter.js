export const serviceDataFormatter = ({
	client,
	courier,
	creationDate,
	deliveryAssets,
	docservice,
	finances,
	id,
	keeping,
	operator,
	recepient,
	sender,
	service,
	deliveryRFAssets
}) => {
	const request = {
		id,
		creationDate,
		operator,
		service,
		client:{
			...client
		},
		sender: {
			...sender
		},
		recepient: {
			...recepient
		},
		deliveryAssets,
		finances
	}

	switch(Number(service)) {
		case 1:
			return {
				...request,
				courier
			}
		case 2:
			return {
				...request,
				keeping
			}
		case 3:
		case 6:
			return {
				...request,
				courier: {
					...courier
				}
			}
		case 4:
			return {
				...request,
				courier: {
					...courier
				},
				deliveryRFAssets
			}
		case 5:
			return {
				...request,
				docservice
			}
		default:
			return request;
	}
}