import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'typesafe-actions';

import { IDisplayItemProps } from './types';
import { getItems, setLoader, updateCategoryId } from './actions';
import { Container, ItemName, Icon } from './styled';

const SideBarItem: React.FC<IDisplayItemProps> = (props) => {
    const dispatch = useDispatch();
    const mainDisplayState = useSelector((state: RootState) => state.mainDisplay);
    const { catCategoryPages, itemsOnCategories } = mainDisplayState

    const { name, id, isActive } = props;

    const getCategoryItems = (id: number, page: number) => {
        const newCategoryPages = { ...catCategoryPages }
        dispatch(updateCategoryId(id));
        if (!catCategoryPages.hasOwnProperty(id)) {
            dispatch(setLoader());
            newCategoryPages[id] = 0
            const newCategoryItems = { ...itemsOnCategories }
            dispatch(getItems(id, page, newCategoryPages, newCategoryItems));
        }
    }

    return (
        <Container>
            <Icon src={require('../../images/foreground.png')}/>
            <ItemName isActive={isActive} onClick={() => getCategoryItems(id, 0)}>{name}</ItemName>
        </Container>
    )
}

export default SideBarItem;
