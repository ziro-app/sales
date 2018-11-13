export const

message = {
	display: 'grid',
	justifyItems: 'center',
	marginTop: '15px',
	textAlign: 'center',
	fontSize: '1.4rem',
	fontWeight: '700',
	color: '#ACCD82'
},

messageError = Object.assign({}, message, {
	color: '#F16B6F'
}),

submit = {
	marginTop: '30px',
	WebkitAppearance: 'none',
	MozAppearance: 'none',
	outline: 'none',
	width: '100%',
	border: 'none',
	borderRadius: '20px',
	padding: '10px 25px',
	fontSize: '1.4rem',
	fontWeight: '700',
	color: '#FFF',
	backgroundColor: 'rgba(48,62,77,0.8)',
	boxShadow: `0px 3px 10px 0px rgba(48,62,77,0.10), 0px 3px 20px 0px rgba(48,62,77,0.08), 
	0px 3px 30px 0px rgba(48,62,77,0.06), 0px 3px 40px 0px rgba(48,62,77,0.04)`,
},

submitting = Object.assign({}, submit, {
	color: 'rgba(48,62,77,0.3)',
	backgroundColor: 'rgba(48,62,77,0.024)',
	boxShadow: 'none'
})