import styled from "styled-components";

import { IMainProps } from './types'; 
import { COLORS } from '../../constants';

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    padding: 50px 50px 20px 50px;
    min-height: 70vh;
`

export const Header = styled.h1`
    text-transform: capitalize;
    color: ${COLORS.headerShade};
    padding: 15px;
    text-align: center;
    margin-bottom: 0;
    padding-bottom: 0;
`

export const Wrapper = styled.div<IMainProps>`
    display: flex; 
    flex-direction: column;

    ${(props): string => {
        const { isMain } = props;
        let styles = ``;

        if(isMain){
            return styles+= '@media(min-width: 769px){width: calc(100% - 250px)};';
        }

        return styles;
    }}

`