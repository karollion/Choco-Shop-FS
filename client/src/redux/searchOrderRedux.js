// selectors
export const getsearch = ({ searchOrder }) => {
	return searchOrder
}

// actions
const createActionName = actionName => `app/searchOrder/${actionName}`
const SET_SEARCH = createActionName('SET_SEARCH')

// action creators
export const setSearch = payload => ({ type: SET_SEARCH, payload })

// reducer
const searchOrderReducer = (statePart = false, action) => {
	switch (action.type) {
		case SET_SEARCH:
			return action.payload
		default:
			return statePart
	}
}

export default searchOrderReducer