export const

radioGroup = {
	display: 'grid',
	gridTemplateColumns: '1fr 1fr',
	gridColumnGap: '10px',
	width: '100%',
	textAlign: 'center',
	fontWeight: '700',
	color: 'rgba(48,62,77,0.3)'
},

radioNotSelected = {
	width: '100%',
	padding: '20px 0',
	borderRadius: '5px',
	backgroundColor: 'rgba(48,62,77,0.025)'
},

radioSelected = Object.assign( {}, radioNotSelected, {
	color: 'rgba(48,62,77,0.8)',
	boxShadow: `0px 0px 10px 0px rgba(48,62,77,0.08), 0px 0px 20px 0px rgba(48,62,77,0.06), 
	0px 0px 30px 0px rgba(48,62,77,0.04), 0px 0px 40px 0px rgba(48,62,77,0.02)`
}),

name = {
	fontSize: '1.6rem',
	margin: '0'
},

radio = {
	display: 'none'
}