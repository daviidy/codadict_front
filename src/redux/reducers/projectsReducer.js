import {
  FETCH_PROJECTS_SUCCESS,
  ADD_PROJECT_SUCCESS,
  UPDATE_PROJECT_SUCCESS,
  SINGLE_PROJECT_SUCCESS,
} from '../actions/actionsTypes';

export const projectsState = {
  pending: false,
  projects: [],
  singleProject: {},
  error: null,
};

const projects = (action, state = projectsState) => {
  switch (action.type) {
    case FETCH_PROJECTS_SUCCESS:
      return {
        ...state,
        pending: false,
        projects: action.projects,
      };

    case ADD_PROJECT_SUCCESS:
      return {
        ...state,
        pending: false,
      };

    case SINGLE_PROJECT_SUCCESS:
      return {
        ...state,
        pending: false,
        singleProject: action.project,
      };

    case UPDATE_PROJECT_SUCCESS:
      return {
        ...state,
        pending: false,
      };

    default:
      return state;
  }
};

export const getProjects = state => state.projects.projects;
export const getProject = state => state.projects.singleProject;

export default projects;
