export const

container = {
	display: 'grid',
	gridRowGap: '10px',
	margin: '0',
},

status = {
	margin: '0',
	fontSize: '1.8rem',
	color: 'rgba(48, 62, 77, 0.8)'
},

header = {
	display: 'grid',
	gridTemplateColumns: '25% 25% 50%',
	fontSize: '1.4rem',
	color: 'rgba(48, 62, 77, 0.8)',
	fontWeight: '700'
},

representative = {
	whiteSpace: 'nowrap',
	overflow: 'hidden',
	textOverflow: 'ellipsis'	
},

row = Object.assign({}, header, {
	fontWeight: '400'
}),

reseller = Object.assign({}, representative)