const getResellerAddress = (addresses, reseller) => {
	if (reseller) {
		const [ resellerAddress ] = addresses.filter( address => Boolean(address[reseller]) )
		const [ favorites ] = addresses.filter( address => Boolean(address['FAVORITOS']) )
		if (resellerAddress && favorites)
			return [ ...Object.values(resellerAddress)[0], ...favorites['FAVORITOS'] ]
		if (favorites)
			return [ ...favorites['FAVORITOS'] ]
		return []
	}
	return []
}

export default getResellerAddress