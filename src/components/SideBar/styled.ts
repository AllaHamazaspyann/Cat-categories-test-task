import styled from "styled-components";
import { COLORS } from '../../constants';

export const Container = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    height: 100vh;
    justify-content: flex-start;
    max-width: 250px;
    width: 100%;
    position: fixed;

    @media(max-width: 768px) {
        position: unset;
        justify-content: unset;
        max-width: unset;
        flex-direction: unset;
        flex-wrap: wrap;
        height: unset;
    }
`

export const Wrapper = styled.div`
    background-color: ${COLORS.primaryColor}; 
    width: 100%;
    box-shadow: ${COLORS.boxShadow2} 1.95px 1.95px 2.6px;

    @media(min-width: 769px){
        max-width: 250px;
    }
`