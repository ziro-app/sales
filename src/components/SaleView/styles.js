export const

container = {
	display: 'grid',
	gridRowGap: '10px',
	width: '100%',
	textAlign: 'left',
	fontSize: '1.4rem',
	color: 'rgba(48, 62, 77, 0.8)'
},

row = {
	display: 'grid',
	gridTemplateColumns: '100px 1fr',
	alignItems: 'center',
	gridColumnGap: '5px'
},

label = {
	fontWeight: '600'
},

data = {
	padding: '5px 20px'	
},

select = Object.assign({}, data, {
	WebkitAppearance: 'none',
	MozAppearance: 'none',
	outline: 'none',
	border: 'none',
	borderRadius: '20px',
	fontSize: '1.4rem',
	color: 'rgba(48, 62, 77, 0.8)',
	backgroundColor: 'rgba(48,62,77,0.024)',
	boxShadow: `0px 3px 10px 0px rgba(48,62,77,0.10), 0px 3px 20px 0px rgba(48,62,77,0.08), 
	0px 3px 30px 0px rgba(48,62,77,0.06), 0px 3px 40px 0px rgba(48,62,77,0.04)`
})