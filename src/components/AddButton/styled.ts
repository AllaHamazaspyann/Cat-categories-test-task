import styled from 'styled-components';
import { COLORS } from '../../constants';

export const LoadButton = styled.button`
    border: 1px solid ${COLORS.grey};
    padding: 10px;
    box-shadow: ${COLORS.boxShadow1} 0px 3px 8px;
    margin: 0 auto 20px; 
    display: block;
    cursor: pointer;
    background-color: ${COLORS.primaryColor};
    color: ${COLORS.white};
`;