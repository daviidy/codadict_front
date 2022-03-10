import { signInError, signInPending, signInSuccess } from '../redux/actions';
import API_URL from './env';

const signIn = data => async dispatch => {
  dispatch(signInPending());
  try {
    const first = await fetch(
      `${API_URL}/auth`,
      {
        headers: {
          'Content-Type': 'application/json',
        },
        mode: 'no-cors',
        method: 'POST',
        body: JSON.stringify(data),
      },
    );
    const second = await first.json();
    dispatch(signInSuccess(second.token));
    localStorage.setItem('email', data.email);
    localStorage.setItem('token', second.token);
    return second.token;
  } catch (error) {
    dispatch(signInError(error));
    return error;
  }
};

export default signIn;
