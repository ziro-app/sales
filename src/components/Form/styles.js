export const

form = {
	maxWidth: '400px',
	margin: '40px auto 60px',
	padding: '0px 15%',
	display: 'grid',
	justifyItems: 'center',
	gridRowGap: '25px'
},

logo = {
	marginBottom: '-20px'
},

title = {
	textAlign: 'center',
	color: 'rgba(48,62,77,0.8)',
	fontSize: '2.1rem',
	margin: '0'
},

input = {
	WebkitAppearance: 'none',
	MozAppearance: 'none',
	outline: 'none',
	border: 'none',
	borderRadius: '25px',
	width: '100%',
	height: '22px',
	padding: '12px 0px',
	backgroundColor: 'rgba(48,62,77,0.025)',
	fontSize: '1.6rem',
	textIndent: '25px',
	color: 'rgba(48,62,77,0.8)',
	fontWeight: '700'
},

inputFocus = Object.assign( {}, input, {
	boxShadow: `0px 0px 10px 0px rgba(48,62,77,0.08), 0px 0px 20px 0px rgba(48,62,77,0.06), 
	0px 0px 30px 0px rgba(48,62,77,0.04), 0px 0px 40px 0px rgba(48,62,77,0.02)`
})