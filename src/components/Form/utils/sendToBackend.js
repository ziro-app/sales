const sendToBackend = state => Promise.reject(state).then( value => console.log(value))

export default sendToBackend