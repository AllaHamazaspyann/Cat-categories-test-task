import styled from 'styled-components';
import { COLORS } from '../../constants';

export const Container = styled.div`
    max-width: 300px;
    width: 100%;
    box-shadow: ${COLORS.boxShadow2} 0px 1px 4px;
    margin: 12px;
    max-height: 100px;
    overflow: hidden;
    padding: 10px;
    border: 1px solid ${COLORS.grey};
    height: 150px;
    flex-basis: 150px;

    @media(min-width: 769px){
        padding: 10px;
        max-width: 150px;
    }
`;

export const CatImg = styled.img`
    width: 100%;
    height: 100%;
    object-fit: contain;
`;
