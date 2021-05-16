import {FC} from 'react';
import styled from 'styled-components';
import {Colors} from '../../styledHelpers/Colors';

const Wrapper = styled.div`
    width:1200px;
    height:60px;
    background-color:${Colors.blue};
    display: grid;
    grid-template-columns:200px 2fr 1fr;
    align-items:center;
`;

const Left = styled.div`
    grid-column:1;

`;

const Middle = styled.div`
    grid-column:2;

    li{
        display:inline;
        margin:0 10px;
    }

`;

const Right = styled.div`
    grid-column:3;

`;

export const TopBar: FC = () => {
    return(
        <Wrapper>
            <Left>
                ANNARELL
            </Left>
            <Middle>
                <ul>
                    <li>O mnie</li>
                    <li>Oferta</li>
                    <li>Cennik</li>
                    <li>Galeria</li>
                    <li>Kontakt</li>
                </ul>
            </Middle>
            <Right>
                {/* ikony */}
                nrTelefonu
                FB
                INSTAGRAM

            </Right>
        </Wrapper>
    );
};