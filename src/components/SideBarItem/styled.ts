import styled from 'styled-components';

import { IItemName } from './types';
import { COLORS } from '../../constants';


export const Container = styled.div`
    color: ${COLORS.white};
    padding: 0 10px;
    display: flex;
    align-items: center;

    @media(min-width: 769px){
        border-bottom: 1px solid ${COLORS.white};
        padding: 10px;
    }
`;

export const ItemName = styled.h3<IItemName>`
    font-size: 14px;
    text-transform: capitalize;
    cursor: pointer;

    ${(props): string => {
        const { isActive } = props;
        const activeColor = isActive ? '#ffe205' : '#fff'; 

        return `
            color: ${activeColor}
        `;
    }}
`
export const Icon = styled.img`
    width: 12px;
    margin-right: 8px;
`