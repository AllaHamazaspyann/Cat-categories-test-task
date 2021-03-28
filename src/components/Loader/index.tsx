import React from 'react';

import { LoaderContainer } from './styled';

const Loader: React.FC = () => {
    return (
        <LoaderContainer className='loader center'>
            <i className='fa fa-cog fa-spin' />
        </LoaderContainer>
    )
}

export default Loader;