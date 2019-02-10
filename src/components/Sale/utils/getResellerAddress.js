const getResellerAddress = (addresses, reseller) => {
	if (reseller) {
		const [ resellerAddress ] = addresses.filter( address => Boolean(address[reseller]) )
		const [ favorites ] = addresses.filter( address => Boolean(address['FAVORITOS']) )
		return [ ...Object.values(resellerAddress), ...favorites['FAVORITOS'] ]
	}
	return []
}

export default getResellerAddress