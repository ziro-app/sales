export const

container = {
	display: 'grid',
	gridRowGap: '10px',
	margin: '0',
},

title = {
	display: 'grid',
	gridTemplateColumns: '25% 25% 50%',
	fontSize: '1.4rem',
	color: 'rgba(48, 62, 77, 0.8)',
	fontWeight: '700'
},

row = Object.assign({}, title, {
	fontWeight: '400'
}),

reseller = {
	whiteSpace: 'nowrap',
	overflow: 'hidden',
	textOverflow: 'ellipsis'
}