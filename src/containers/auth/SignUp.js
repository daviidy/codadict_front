import React, { useState } from 'react';
import '../../styles/form.css';

function SignUp() {
  const [user, setUser] = useState({
    username: '',
    email: '',
    password: '',
    passwordConfirmation: '',
  });

  const handleChange = e => {
    e.preventDefault();
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="container-fluid h-100">
      <div className="row">
        <div className="col-12">
          <div className="alert alert-success m-auto w-50 mt-3 mb-5">
            <strong>Success!</strong>
            {' '}
            Indicates a successful or positive action.
          </div>
        </div>
      </div>
      <div className="row h-100">
        <form className="col-12 col-md-4 m-md-auto p-0 bg-white text-dark rounded" action="index.html" method="post">
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
          <button className="w-100 text-center text-uppercase bg-oschool p-3 text-white" type="submit" name="button">Sign Up </button>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
