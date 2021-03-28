import FetchApi from '../../helpers/fetchApi';
import { Dispatch } from 'redux';
import * as actionType from '../../helpers/actionTypes';
import { INewCategoryPages } from './types';
 
export const getItems = (
  categoryId: number, 
  page: number, 
  newCategoryPages?: INewCategoryPages, 
  newCategoryItems?: any ) => async (dispatch : Dispatch ) => {

  try{
     const response = await FetchApi.get(`https://api.thecatapi.com/v1/images/search?limit=10&page=${page}&category_ids=${categoryId}`);
     
     if (newCategoryItems.hasOwnProperty(categoryId)) {
        newCategoryItems[categoryId] = newCategoryItems[categoryId].concat(response)
     } else {
        newCategoryItems[categoryId] = response
     }

     dispatch({
        type: actionType.GET_ITEMS,
        items: newCategoryItems,
        loading: false,
        categoryId,
        newCategoryPages
      });

  }catch(e){
    console.log(e);
  }
}

export const updateCategoryId = (id: number) => {
  return {
    type: actionType.UPDATE_CATEGORY_ID,
    id,
  }
}

export const setLoader = () => {
  return {
    type: actionType.SET_LOADER,
    loading: true,
  }
}

