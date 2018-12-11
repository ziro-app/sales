import React from 'react'
import PropTypes from 'prop-types'
import { Image } from 'cloudinary-react'
import BackArrow from './BackArrow'
import { container, icons, description } from './styles'

const Header = ({ path, title, children }) =>
	<div style={container}>
		<div style={icons}>
			<BackArrow path={path} />
		    <Image
				cloudName='ziro'
				width='45'
				publicId='logo-round_kxn8sa'
				version='1508000699'
				format='png'
				secure='true'
				alt='logo'
		    />
	    </div>
		<h1 style={description}>{title}</h1>
		{children}
	</div>

Header.propTypes = {
	path: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
	children: PropTypes.element.isRequired
}

export default Header