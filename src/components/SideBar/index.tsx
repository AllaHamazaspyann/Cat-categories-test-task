import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from 'typesafe-actions';

import SideBarItem from '../SideBarItem';

import { getUserInfo } from './actions';
import { ICategory } from './types';

import { Container, Wrapper } from './styled';

const SideBar: React.FC = () => {
    const dispatch = useDispatch();

    const sideBarCategoriesState = useSelector((state: RootState) => state.sideBarCategories);
    const mainDisplayState = useSelector((state: RootState) => state.mainDisplay);
    
    const { categoryId } = mainDisplayState
    
    useEffect(() => {
        dispatch(getUserInfo());
    }, []);

    const { categories } = sideBarCategoriesState;

    return (
        <Wrapper>
            <Container>
                {categories.map((category: ICategory, index: number) => (
                    <SideBarItem 
                        key={index} 
                        name={category.name} 
                        id={category.id}
                        isActive={category.id === categoryId} 
                    />
                ))}
            </Container>
        </Wrapper>
        
    );
};

export default SideBar;
