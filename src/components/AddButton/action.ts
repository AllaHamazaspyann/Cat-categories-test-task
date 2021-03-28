import { getItems } from '../SideBarItem/actions';
import { setLoader } from '../SideBarItem/actions';

export const getMoreItems = () => (dispatch: any, getState: any) => {
    const { 
        mainDisplay: {
            categoryId, 
            catCategoryPages, 
            itemsOnCategories
        } 
    } = getState();

    const newCategoryItems = { ...itemsOnCategories }

    dispatch(setLoader());
    
    if (catCategoryPages.hasOwnProperty(categoryId)) {
        const newCategoryPages = { ...catCategoryPages }
        newCategoryPages[categoryId] = newCategoryPages[categoryId] + 1;
            
        dispatch(getItems(categoryId, newCategoryPages[categoryId], newCategoryPages, newCategoryItems))
    } else {
        const newCategoryPages = { ...catCategoryPages }
        newCategoryPages[categoryId] = 0;

        dispatch(getItems(categoryId, 0, newCategoryPages, newCategoryItems));
    }
}