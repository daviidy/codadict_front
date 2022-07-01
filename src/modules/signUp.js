// we import the appropriate action creators

// We import some actions creators
// They return actions objects

import { signUpError, signUpPending, signUpSuccess } from '../redux/actions';
import API_URL from './env';

const signUp = data => async dispatch => {
  // we dispatch the action to the user reducer
  dispatch(signUpPending());
  try {
    const first = await fetch(
      `${API_URL}/signup`,
      {
        headers: {
          'Content-Type': 'application/json',
        },
        mode: 'cors',
        method: 'POST',
        body: JSON.stringify(data),
      },
    );
    const second = await first.json();
    dispatch(signUpSuccess(second));
    localStorage.setItem('username', data.username);
    localStorage.setItem('email', data.email);
    localStorage.setItem('token', second.auth_token);
    second.password = data.password;
    return second;
  } catch (error) {
    dispatch(signUpError(error));
    return error;
  }
};

export default signUp;
