export const

row = {
	display: 'grid',
	gridTemplateRows: '35px 35px',
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

data = {
	padding: '5px 20px'	
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
	fontSize: '1.5rem',
	color: 'rgba(48, 62, 77, 0.8)',
	backgroundColor: 'rgba(48,62,77,0.024)',
	boxShadow: `0px 3px 10px 0px rgba(48,62,77,0.10), 0px 3px 20px 0px rgba(48,62,77,0.08), 
	0px 3px 30px 0px rgba(48,62,77,0.06), 0px 3px 40px 0px rgba(48,62,77,0.04)`
},

selectSubmit = Object.assign({}, select, {
	cursor: 'initial',
	backgroundColor: '#FFF',
	boxShadow: 'none'
}),

message = {
	gridArea: 'message',
	margin: '0 0 0 20px'
},

submitting = {
	display: 'grid',
	gridTemplateColumns: '20px 1fr',
	alignItems: 'center',
},

success = {
	color: '#ACCD82',
	fontWeight: '600'
},

error = Object.assign({}, submitting, {
	color: '#F16B6F'
})