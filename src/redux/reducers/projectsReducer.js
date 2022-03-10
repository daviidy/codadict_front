import {
  FETCH_PROJECTS_PENDING,
  FETCH_PROJECTS_SUCCESS,
  FETCH_PROJECTS_ERROR,
  ADD_PROJECT_PENDING,
  ADD_PROJECT_SUCCESS,
  ADD_PROJECT_ERROR,
  UPDATE_PROJECT_PENDING,
  UPDATE_PROJECT_SUCCESS,
  UPDATE_PROJECT_ERROR,
  SINGLE_PROJECT_PENDING,
  SINGLE_PROJECT_SUCCESS,
  SINGLE_PROJECT_ERROR,
} from '../actions/actionsTypes';

export const projectsState = {
  pending: false,
  projects: [],
  singleProject: {},
  error: null,
};

const projects = (state = projectsState, action = {}) => {
  switch (action.type) {
    case FETCH_PROJECTS_PENDING:
      return {
        ...state,
        pending: true,
      };

    case FETCH_PROJECTS_SUCCESS:
      return {
        ...state,
        pending: false,
        projects: action.projects,
      };

    case FETCH_PROJECTS_ERROR:
      return {
        ...state,
        pending: false,
        error: action.error,
      };

    case ADD_PROJECT_PENDING:
      return {
        ...state,
        pending: true,
      };

    case ADD_PROJECT_SUCCESS:
      return {
        ...state,
        pending: false,
      };

    case ADD_PROJECT_ERROR:
      return {
        ...state,
        pending: false,
        error: action.error,
      };

    case SINGLE_PROJECT_PENDING:
      return {
        ...state,
        pending: true,
      };

    case SINGLE_PROJECT_SUCCESS:
      return {
        ...state,
        pending: false,
        singleProject: action.project,
      };

    case SINGLE_PROJECT_ERROR:
      return {
        ...state,
        pending: false,
        error: action.error,
      };

    case UPDATE_PROJECT_PENDING:
      return {
        ...state,
        pending: true,
      };

    case UPDATE_PROJECT_SUCCESS:
      return {
        ...state,
        pending: false,
      };

    case UPDATE_PROJECT_ERROR:
      return {
        ...state,
        pending: false,
        error: action.error,
      };

    default:
      return state;
  }
};

export const getProjects = state => state.projects.projects;
export const getProject = state => state.projects.singleProject;
export const getProjectsPending = state => state.projects.pending;
export const getProjectsError = state => state.projects.error;
export default projects;
