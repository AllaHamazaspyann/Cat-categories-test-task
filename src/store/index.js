import { combineReducers } from 'redux';
import { sideBarCategories } from '../components/SideBar/reducer';
import { mainDisplay } from '../components/MainDisplay/reducer';

export default combineReducers ({
    sideBarCategories,
    mainDisplay
  });