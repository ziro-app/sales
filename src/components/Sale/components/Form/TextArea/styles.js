export const

area = {
	WebkitAppearance: 'none',
	MozAppearance: 'none',
	outline: 'none',
	border: 'none',
	borderRadius: '25px',
	boxSizing: 'border-box',
	width: '100%',
	padding: '22px 22px',
	backgroundColor: 'rgba(48,62,77,0.025)',
	fontSize: '1.6rem',
	color: 'rgba(48,62,77,0.8)',
	fontWeight: '700'	
},

areaFilled = Object.assign({}, area, {
	color: 'rgba(48,62,77,0.8)',
	boxShadow: `0px 0px 10px 0px rgba(48,62,77,0.08), 0px 0px 20px 0px rgba(48,62,77,0.06), 
	0px 0px 30px 0px rgba(48,62,77,0.04), 0px 0px 40px 0px rgba(48,62,77,0.02)`
})