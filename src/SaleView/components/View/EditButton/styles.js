export const

link = {
	marginTop: '20px'
},

edit = {
	WebkitAppearance: 'none',
	MozAppearance: 'none',
	outline: 'none',
	cursor: 'pointer',
	border: 'none',
	borderRadius: '20px',
	width: '100%',
	padding: '10px 25px',
	fontSize: '1.5rem',
	fontWeight: '700',
	color: '#FFF',
	backgroundColor: 'rgba(48,62,77,0.8)',
	boxShadow: `0px 5px 10px 1px rgba(48,62,77,0.20), 0px 5px 20px 1px rgba(48,62,77,0.16), 
	0px 5px 30px 1px rgba(48,62,77,0.12), 0px 5px 40px 1px rgba(48,62,77,0.08)`
},

submitting = Object.assign({}, edit, {
	marginTop: '20px',
	cursor: 'initial',
	color: 'rgba(48,62,77,0.3)',
	backgroundColor: 'rgba(48,62,77,0.03)',
	boxShadow: 'none'
})