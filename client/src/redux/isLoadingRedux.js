// selectors
export const getIsLoading = ({ loading }) => {
	return loading
}

// actions
const createActionName = actionName => `app/loading/${actionName}`
const SET_LOADING = createActionName('SET_LOADING')

// action creators
export const setLoading = payload => ({ type: SET_LOADING, payload })

// reducer
const isloadingReducer = (statePart = false, action) => {
	switch (action.type) {
		case SET_LOADING:
			return action.payload
		default:
			return statePart
	}
}

export default isloadingReducer