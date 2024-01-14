import { API_URL } from '../config'

//selectors
export const getUser = ({ user }) =>  user;

// actions
const createActionName = actionName => `app/users/${actionName}`;
const LOG_IN = createActionName('LOG_IN');
const LOG_OUT = createActionName('LOG_OUT');

// action creators
export const logIn = payload => ({ type: LOG_IN, payload });
export const logOut = payload => ({ type: LOG_OUT, payload });

export const isUserLoginedIn = () => {
  return(dispatch) => {
    
    fetch(`${API_URL}/auth/user`)
    .then(res => res.json())
      .then(res => {
        if(res.status === 200) {
          dispatch(logIn( res.user ));
        } else {
          console.log('No user logined in')
        }
      })
  };
};

const usersReducer = (statePart = [], action) => {
  switch (action.type) {
    case LOG_IN:
      return action.payload;
    case LOG_OUT:
      return null;
    default:
      return statePart;
  };
};

export default usersReducer;