import React from 'react';

import SideBar from './components/SideBar';
import MainDisplay from './components/MainDisplay';

import { Wrapper } from './styled';

const App = () => {
    return (
        <Wrapper>
            <SideBar/>
            <MainDisplay/>
        </Wrapper>
    )
}

export default App;