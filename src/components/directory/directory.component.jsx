import React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';

import {selectDirectorySections} from '../../redux/directory/directory.selectors';

import MenuItem from '../menu-item/menu-item.component';
import './directory.styles.scss';

//Displays images and titles on home page
const Directory = ({sections}) => (
  <div className="directory-menu">
    {sections.map(({id, ...otherSectionProps}) => (
        <MenuItem key={id} {...otherSectionProps} />
    ))}
  </div>
);

//Maps the memoized selector to this component to be displayed on screen  - in a memozied selector the data is cached which helps to improve performance as the same calculations do not have to be performed multiple times and reduces the amount of re-renders as the cached result is the same
const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections
});


export default connect(mapStateToProps)(Directory);
