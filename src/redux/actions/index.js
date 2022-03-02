import {
  FETCH_PROJECTS_SUCCESS,
  ADD_PROJECT_SUCCESS,
  SINGLE_PROJECT_SUCCESS,
  UPDATE_PROJECT_SUCCESS,
  DELETE_PROJECT_SUCCESS,
} from './actionsTypes';

export const fetchProjectsSuccess = projects => ({
  type: FETCH_PROJECTS_SUCCESS,
  projects,
});

export const addProjectSuccess = () => ({
  type: ADD_PROJECT_SUCCESS,
});

export const singleProjectSuccess = project => ({
  type: SINGLE_PROJECT_SUCCESS,
  project,
});

export const updateProjectSuccess = () => ({
  type: UPDATE_PROJECT_SUCCESS,
});

export const deleteProjectSuccess = () => ({
  type: DELETE_PROJECT_SUCCESS,
});
