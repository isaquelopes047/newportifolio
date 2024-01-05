import styled from 'styled-components';
import { AiFillAmazonCircle } from "react-icons/ai";

export default function MenuSuperior() {
    return (
        <MainMenu>
            <ul>
                <a href="#">
                    <li>Sobre</li>
                </a>
                <a href="#">
                    <li>Contato</li>
                </a>
                <a href="#">
                    <li>Projetos</li>
                </a>
            </ul>
        </MainMenu>
    )
}

const MainMenu = styled.nav`
    width: 100vw;
    min-height: 90px;
    border-bottom: 1px solid #cecece;

    & > ul {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        margin: 0;
        padding: 0;

        & > a {

            & > li {
                min-width: 100px;
                width: auto;
                height: 90px;
                list-style: none;
                display: flex;
                justify-content: center;
                align-items: center;
                border-bottom: 3px solid #fff;
                transition: 0.3s;
                font-family: 'Josefin Sans', sans-serif;
                font-family: 'Raleway', sans-serif;

                & > a, &:hover {
                    border-bottom: 3px solid orangered;
                    transition: 0.3s;
                    color: orangered;
                }
            }
            
        }
    }
`

