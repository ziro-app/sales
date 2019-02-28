export const

container = {
	width: '100%',
	display: 'grid',
	gridRowGap: '10px',
	margin: '0px 0px 50px',
},

title = {
	margin: '0 0 5px',
	fontSize: '1.6rem',
	color: 'rgba(48, 62, 77, 0.8)'
},

header = {
	display: 'grid',
	gridTemplateColumns: '30% 30% 40%',
	fontSize: '1.5rem',
	color: 'rgba(48, 62, 77, 0.8)',
	fontWeight: '600'
},

empty = {
	fontSize: '1.5rem',
	color: 'rgba(48, 62, 77, 0.8)',
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