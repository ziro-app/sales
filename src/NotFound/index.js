import React from 'react'
import { Image } from 'cloudinary-react'
import { container, title } from './styles'

const NotFound = () =>
	<div style={container}>
	    <Image
			cloudName='ziro'
			width='45'
			publicId='logo-round_kxn8sa'
			version='1508000699'
			format='png'
			secure='true'
			alt='logo'
	    />
		<h1 style={title}>Essa página não existe. Verifique a URL digitada</h1>
	</div>

export default NotFound