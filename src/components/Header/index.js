import React from 'react'
import PropTypes from 'prop-types'
import { Image } from 'cloudinary-react'
import BackSvg from './BackSvg'
import { container, icons, arrow, description } from './styles'

const Header = ({ title, path, children }) =>
	<div style={container}>
		<div style={icons}>
		    { path === '/cadastrar'
			    ?
			    	<BackSvg style={arrow} size={27} color={'rgb(48,62,77)'} />
			    :
			    	null
		    }
		    <Image
				cloudName='ziro'
				width='45'
				publicId='logo-round_kxn8sa'
				version='1508000699'
				format='png'
				secure='true'
		    />
	    </div>
		<h1 style={description}>{title}</h1>
		{children}
	</div>

Header.propTypes = {
	title: PropTypes.string.isRequired,
	path: PropTypes.string.isRequired,
	children: PropTypes.element.isRequired
}

export default Header