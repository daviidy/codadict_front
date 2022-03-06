// we import the appropriate action creators
import { signUpError, signUpPending, signUpSuccess } from '../redux/actions';
import REACT_APP_API_URL from './env';

const signUp = data => async dispatch => {
  dispatch(signUpPending());
  try {
    const first = await fetch(
      `${REACT_APP_API_URL}/signup`,
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
    localStorage.setItem('id', second.id);
    localStorage.setItem('username', second.username);
    localStorage.setItem('email', second.email);
    localStorage.setItem('token', second.admin);
    second.password = data.password;
    return second;
  } catch (error) {
    dispatch(signUpError(error));
    return error;
  }
};

export default signUp;
