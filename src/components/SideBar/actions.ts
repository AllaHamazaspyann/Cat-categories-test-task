import { Dispatch } from 'redux';

import FetchApi from '../../helpers/fetchApi';
import * as actionType from '../../helpers/actionTypes';

export const getUserInfo = () => async (dispatch : Dispatch ) => {
  try{
     const response = await FetchApi.get(`https://api.thecatapi.com/v1/categories`);
     dispatch({
        type: actionType.GET_CATEGORIES,
        categories: response,
      });

  }catch(e){
    console.log(e);
  }
}