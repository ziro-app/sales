export const

row = {
	display: 'grid',
	gridTemplateColumns: '100px 1fr',
	gridTemplateAreas: `
		'label select'
		'. message'
	`,
	alignItems: 'center',
	gridColumnGap: '5px'
},

label = {
	gridArea: 'label',
	fontWeight: '600'
},

select = {
	gridArea: 'select',
	width: '100%',
	padding: '5px 20px',
	WebkitAppearance: 'none',
	MozAppearance: 'none',
	outline: 'none',
	cursor: 'pointer',
	border: 'none',
	borderRadius: '20px',
	fontSize: '1.4rem',
	color: 'rgba(48, 62, 77, 0.8)',
	backgroundColor: 'rgba(48,62,77,0.024)',
	boxShadow: `0px 3px 10px 0px rgba(48,62,77,0.10), 0px 3px 20px 0px rgba(48,62,77,0.08), 
	0px 3px 30px 0px rgba(48,62,77,0.06), 0px 3px 40px 0px rgba(48,62,77,0.04)`
},

error = {
	gridArea: 'message',
	display: 'grid',
	gridTemplateColumns: '16px 1fr',
	alignItems: 'center',
	margin: '10px 0 0 20px',
	color: '#F16B6F'
}