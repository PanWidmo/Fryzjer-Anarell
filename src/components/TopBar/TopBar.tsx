import {FC} from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    width:1200px;
    background-color:red;

`;

export const TopBar: FC = () => {
    return(
        <Wrapper>
            TOP
        </Wrapper>
    );
};