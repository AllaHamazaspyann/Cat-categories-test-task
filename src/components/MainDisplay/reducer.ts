import * as actionType from '../../helpers/actionTypes';

const initialState = {
  itemsOnCategories: {
    1: []
  },
  loading: true,
  catCategoryPages: {
    1: 0
  },
  categoryId: 1,
}

  export const mainDisplay = (state=initialState, action: any) => {
    switch (action.type) {
        case actionType.GET_ITEMS: {
          return {
            ...state,
            itemsOnCategories: action.items,
            loading: false,
            categoryId: action.categoryId,
            ...(action.newCategoryPages && {catCategoryPages: action.newCategoryPages})
          }
        }
        case actionType.SET_LOADER: {
          return {
            ...state,
            loading: action.loading
          }
        }
        case actionType.UPDATE_CATEGORY_ID: {
          return {
            ...state,
            categoryId: action.id
          }
        }
        default: {
          return state
        }
      }
  }