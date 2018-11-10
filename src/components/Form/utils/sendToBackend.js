const sendToBackend = state => Promise.resolve(state).then( value => console.log(value))

export default sendToBackend