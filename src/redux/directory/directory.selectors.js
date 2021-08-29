import {createSelector} from 'reselect';

//Pulls off the directory piece of state in the Redux Store (these are the images and titles used on homepage)
const selectDirectory = state => state.directory;

//Creates a memoized selector with the directory piece of state - cached result is used in directory.component.jsx mapStateToProps
export const selectDirectorySections = createSelector(
  [selectDirectory],
  directory => directory.sections
);
