import {
  FETCH_PROJECTS_PENDING,
  FETCH_PROJECTS_SUCCESS,
  FETCH_PROJECTS_ERROR,
  ADD_PROJECT_PENDING,
  ADD_PROJECT_SUCCESS,
  ADD_PROJECT_ERROR,
  SINGLE_PROJECT_PENDING,
  SINGLE_PROJECT_SUCCESS,
  SINGLE_PROJECT_ERROR,
  UPDATE_PROJECT_PENDING,
  UPDATE_PROJECT_SUCCESS,
  UPDATE_PROJECT_ERROR,
  DELETE_PROJECT_PENDING,
  DELETE_PROJECT_SUCCESS,
  DELETE_PROJECT_ERROR,
  SIGN_UP_PENDING,
  SIGN_UP_SUCCESS,
  SIGN_UP_ERROR,
  SIGN_IN_PENDING,
  SIGN_IN_SUCCESS,
  SIGN_IN_ERROR,
  GET_USER_PENDING,
  GET_USER_SUCCESS,
  GET_USER_ERROR,
  FETCH_USER_PENDING,
  FETCH_USER_SUCCESS,
  FETCH_USER_ERROR,
} from './actionsTypes';

export const fetchProjectsPending = () => ({
  type: FETCH_PROJECTS_PENDING,
});

export const fetchProjectsSuccess = projects => ({
  type: FETCH_PROJECTS_SUCCESS,
  projects,
});

export const fetchProjectsError = error => ({
  type: FETCH_PROJECTS_ERROR,
  error,
});

export const addProjectPending = () => ({
  type: ADD_PROJECT_PENDING,
});

export const addProjectSuccess = () => ({
  type: ADD_PROJECT_SUCCESS,
});

export const addProjectError = error => ({
  type: ADD_PROJECT_ERROR,
  error,
});

export const singleProjectPending = () => ({
  type: SINGLE_PROJECT_PENDING,
});

export const singleProjectSuccess = project => ({
  type: SINGLE_PROJECT_SUCCESS,
  project,
});

export const singleProjectError = error => ({
  type: SINGLE_PROJECT_ERROR,
  error,
});

export const updateProjectPending = () => ({
  type: UPDATE_PROJECT_PENDING,
});

export const updateProjectSuccess = () => ({
  type: UPDATE_PROJECT_SUCCESS,
});

export const updateProjectError = error => ({
  type: UPDATE_PROJECT_ERROR,
  error,
});

export const deleteProjectPending = () => ({
  type: DELETE_PROJECT_PENDING,
});

export const deleteProjectSuccess = () => ({
  type: DELETE_PROJECT_SUCCESS,
});

export const deleteProjectError = error => ({
  type: DELETE_PROJECT_ERROR,
  error,
});

export const signUpPending = () => ({
  type: SIGN_UP_PENDING,
});

export const signUpSuccess = user => ({
  type: SIGN_UP_SUCCESS,
  user,
});

export const signUpError = error => ({
  type: SIGN_UP_ERROR,
  error,
});

export const signInPending = () => ({
  type: SIGN_IN_PENDING,
});

export const signInSuccess = token => ({
  type: SIGN_IN_SUCCESS,
  token,
});

export const signInError = error => ({
  type: SIGN_IN_ERROR,
  error,
});

export const getUserPending = () => ({
  type: GET_USER_PENDING,
});

export const getUserSuccess = user => ({
  type: GET_USER_SUCCESS,
  user,
});

export const getUserError = error => ({
  type: GET_USER_ERROR,
  error,
});

export const fetchUserPending = () => ({
  type: FETCH_USER_PENDING,
});

export const fetchUserSuccess = user => ({
  type: FETCH_USER_SUCCESS,
  user,
});

export const fetchUserError = error => ({
  type: FETCH_USER_ERROR,
  error,
});
