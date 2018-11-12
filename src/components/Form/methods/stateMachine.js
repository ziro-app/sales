/* Syntax -> const machine = { state: { action: next_state } } */
/* The state machine is an object whose keys are all the possible state names */
/* States are also objects whose keys are actions and whose values are the next possible states */
/* This state machine was implemented to catch errors derived from async code */
/* changeUiState is a transition function for the state machine */

const machine = {
	fetching: { SUCCESS: 'fetched', ERROR: 'error' },
	fetched: {},
	error: {}
}

export const

initialUiState = 'fetching',

changeUiState = that => action =>
	that.setState( ({ uiState }) => ({ uiState: machine[uiState][action] }) )