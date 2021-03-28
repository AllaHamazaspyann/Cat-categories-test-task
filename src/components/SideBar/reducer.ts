import * as actionType from '../../helpers/actionTypes';

const initialState = {
   categories: [],
}


  export const sideBarCategories = (state=initialState, action: any) => {
    switch (action.type) {
        case actionType.GET_CATEGORIES: {
          return {
            ...state,
            categories: action.categories,
          }
        }
        default: {
          return state
        }
      }
  }