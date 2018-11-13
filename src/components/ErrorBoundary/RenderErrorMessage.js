import React from 'react'
import { Image } from 'cloudinary-react'
import { container } from './styles'

const RenderErrorMessage = () =>
	<div style={container}>
	    <Image
	      cloudName='ziro'
	      width='45'
	      publicId='logo-round_kxn8sa'
	      version='1508000699'
	      format='png'
	      secure='true'
	    />
		<p>Ocorreu um erro na renderização do aplicativo</p>
		<p>Tente novamente ou contate o suporte</p>
	</div>

export default RenderErrorMessage