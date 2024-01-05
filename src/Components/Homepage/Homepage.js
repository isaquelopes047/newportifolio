import styled from 'styled-components';
import backgroundHome from '../../assets/img/backgroundHome.png';
import perfil from '../../assets/img/perfil.png';

export default function HomePage() {
    return (
        <HomeMain>  
            <div className='ContainerPadrao titleHome'>
                <p>I'M ISAQUE LOPES _______</p>
                <p>DEVELOPER</p>
                <div className='ContactMe'>
                    <span>
                        Contact me
                    </span>
                </div>
                <div>
                    asdasdasfasd
                </div>
            </div>
            <div className='ContainerPadrao'>
                <div className='spaceLeft'>
                    <div className='perfilHome'>

                    </div>
                </div>
            </div>
        </HomeMain>
    )
}

const HomeMain = styled.div`
    width: 100vw;
    height: calc(100vh - 95px);
    background-image: url(${backgroundHome});
    background-size: cover;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row; 
    padding: 50px;

    @media (max-width: 925px) {
        flex-direction: column;
        height: auto;
        padding: 10px;
    }

    & > .ContainerPadrao{
        width: 49vw;
        min-height: 50vh;
        display: flex;
        justify-content: center;
        align-items: flex-start;
        flex-direction: column;

        @media (max-width: 925px) {
            width: 90vw;
        }

        @media (max-width: 508px) {
            border-bottom: 1px solid transparent;
        }

        & > .ContactMe{
            width: 200px;
            height: 60px;
            border: 1px solid #fff;
            border-radius: 5px;
            display: flex;
            justify-content: center;
            align-items: center;
            background-color: transparent;
            transition: 0.3s;

            &:hover{
                background-color: #161616;
                cursor: pointer;
                transition: 0.3s;
            }

            & > span {
                color: #fff;
                font-family: 'Heebo', sans-serif;
            }
        }

        & > .spaceLeft{
            width: 50vw;
            min-height: 50vh;
            display: flex;
            justify-content: flex-end;
            align-items: center;

            @media (max-width: 925px) {
                width: 90vw;
                justify-content: center;
            }

            @media (max-width: 508px) {
                border-bottom: 1px solid transparent;
            }
            
                & > .perfilHome{
                    width: 400px;
                    height: 400px;
                    border: 10px solid #fff;
                    border-radius: 100%;
                    background-image: url(${perfil});
                    background-size: contain;
                    background-repeat: no-repeat;
                    background-position: center;
                }
        }

    }

    /* Style of the title in Home Page */
    & > .titleHome {
        & > p {
            color: #fff;
            font-family: 'Heebo', sans-serif;
            margin: 0;
            padding: 0;
        }

        & > p:nth-child(1) {
            font-weight: 300;
            font-size: 2rem;

            @media (max-width: 925px) {
                font-size: 1rem;
            }
        }

        & > p:nth-child(2) {
            font-weight: 900;
            font-size: 7rem;

            @media (max-width: 925px) {
                font-size: 5rem;
            }

            @media (max-width: 508px) {
                font-size: 3rem;
            }
        }
    }
`