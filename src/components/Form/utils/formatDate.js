const formatDate = date =>
	`${date.toString().substr(8,2)}/${date.toString().substr(4,3)}/${date.getFullYear()}`

export default formatDate