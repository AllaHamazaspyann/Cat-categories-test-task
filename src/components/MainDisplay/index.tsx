import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from 'typesafe-actions';

import CatBox from '../CatBox';
import AddButton from '../AddButton';
import Loader from '../Loader';

import { ICategory } from '../SideBar/types';
import { getItems } from '../SideBarItem/actions';

import { Container, Header, Wrapper } from './styled';

const MainDisplay: React.FC = () => {
    const dispatch = useDispatch();

    const mainDisplayState = useSelector((state: RootState) => state.mainDisplay);
    const sideBarCategoriesState = useSelector((state: RootState) => state.sideBarCategories);
    
    const { categories } = sideBarCategoriesState;
    const { 
        itemsOnCategories, 
        loading, 
        categoryId 
    } = mainDisplayState;
    
    useEffect(() => {
        const newCategoryItems = { ...itemsOnCategories }
        dispatch(getItems(1, 0, undefined, newCategoryItems));
    }, []);
    
    return (
        <Wrapper isMain={true}>
            {categories.map((category: ICategory) => (
                category.id === categoryId && <Header key={category.name}>{category.name}</Header> 
            ))}
             
            <Wrapper>
                { loading 
                    ? 
                    <Loader/> 
                    : 
                    <Container>
                        { itemsOnCategories[categoryId]?.map((item: any) => (
                            <CatBox key={item.id} src={item.url}/>
                        )) }
                    </Container>
                }
                <AddButton/>
            </Wrapper>
        </Wrapper>
    )
}

export default MainDisplay;
