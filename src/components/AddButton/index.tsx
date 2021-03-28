import React from 'react';
import { useDispatch } from 'react-redux';

import { getMoreItems } from './action';

import { LoadButton } from './styled';

const Loader: React.FC = () => {
    const dispatch = useDispatch();

    return (
        <LoadButton onClick={() => dispatch(getMoreItems())}>
            Add items
        </LoadButton>
    )
}

export default Loader;
