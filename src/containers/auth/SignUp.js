import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { Navigate } from 'react-router-dom';
import signUpAction from '../../modules/signUp';
import {
  getToken, getUser, getUserError, getUserPending,
} from '../../redux/reducers/usersReducer';
import signInAction from '../../modules/signIn';
import { checkUser } from '../../modules/checkAuth';
import '../../styles/form.css';
import Spinner from '../../components/Spinner';

function SignUp({
  signUp,
  getUser,
  error,
  token,
  pending,
  signIn,
}) {
  // create state for user and redirection
  const [user, setUser] = useState({
    username: '',
    email: '',
    password: '',
    passwordConfirmation: '',
  });

  const [redirect, setRedirect] = useState(false);

  // when the component is mounting,
  // check if user is already logged in
  useEffect(() => {
    if (checkUser()) {
      setRedirect(true);
    }
  }, []);

  const handleChange = e => {
    e.preventDefault();
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (user.password === user.passwordConfirmation) {
      signUp(user).then(data => {
        const info = {
          email: data.email,
          password: data.password,
        };
        signIn(info).then(res => {
          console.log(res);
          setRedirect(true);
        });
      });
    }
    return null;
  };

  const shouldShowSpinner = () => {
    if (pending === false) return false;
    return true;
  };

  if (shouldShowSpinner()) {
    return (
      <Spinner />
    );
  }

  return (
    redirect
      ? <Navigate to="/" />
      : (
        <div className="container-fluid h-100 body">
          <div className="row h-100">
            <form onSubmit={handleSubmit} className="col-12 col-md-4 m-md-auto p-0 bg-white text-dark rounded" action="index.html" method="post">
              <img className="img-fluid rounded-circle" width="50" src="https://secure.gravatar.com/avatar/9c275cba24f7c939201cda28f832f8e0?d=404&s=160" alt="" />
              <div className="welcome text-center pt-5 pl-5 pr-5 pb-3">
                <p>Sign up</p>
              </div>
              <div className="p-3">
                <div className="input-group mb-2">
                  <div className="input-group-prepend">
                    <div className="input-group-text">
                      @
                    </div>
                  </div>
                  <input name="username" onChange={handleChange} type="text" className="form-control" id="inlineFormInputGroup" placeholder="Username" />
                </div>
                <div className="input-group mb-2">
                  <div className="input-group-prepend">
                    <div className="input-group-text">***</div>
                  </div>
                  <input name="password" onChange={handleChange} type="password" className="form-control" id="inlineFormInputGroup" placeholder="Password" />
                </div>
                <div className="input-group mb-2">
                  <div className="input-group-prepend">
                    <div className="input-group-text">***</div>
                  </div>
                  <input name="passwordConfirmation" onChange={handleChange} type="password" className="form-control" id="inlineFormInputGroup" placeholder="Confirm password" />
                </div>
              </div>
              <button className="{display} w-100 text-center text-uppercase bg-oschool p-3 text-white" type="submit" name="button">Sign Up </button>
            </form>
          </div>
        </div>
      )
  );
}

const mapStateToProps = state => ({
  error: getUserError(state),
  getUser: getUser(state),
  pending: getUserPending(state),
  token: getToken(state),
});

const mapDispatchToProps = dispatch => bindActionCreators({
  signUp: signUpAction,
  signIn: signInAction,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);

SignUp.propTypes = {
  signUp: PropTypes.func.isRequired,
  signIn: PropTypes.func.isRequired,
  pending: PropTypes.bool,
  error: PropTypes.string,
  token: PropTypes.string,
  getUser: PropTypes.shape({
    username: PropTypes.string,
  }),
};

SignUp.defaultProps = {
  pending: true,
  error: null,
  getUser: {},
  token: '',
};
