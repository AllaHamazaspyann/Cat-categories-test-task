import React from 'react';

import { Container, CatImg } from './styled';
import { ICatBoxProps } from './types';

const CatBox: React.FC<ICatBoxProps> = (props) => {
    const { src }  = props;

    return (
        <Container>
            <CatImg src={src}/>
        </Container>
    )
}

export default CatBox;