import React,{FC} from 'react';
import styled from 'styled-components';

import {TopBar} from '../TopBar/TopBar';

const Wrapper = styled.section`
    width:1200px;
    margin:0 auto;


`;

const Content = styled.div`

`;

const MainPage: FC = () => {
    return (
        <Wrapper>
            <TopBar/>
            <Content>
                Strona fryzjer pozdrawiam :)
            </Content>
        </Wrapper>
    );
};

export default MainPage;