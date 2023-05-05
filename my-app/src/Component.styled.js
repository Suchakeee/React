import styled from 'styled-components';
import { Temperature } from '@styled-icons/fluentui-system-regular/Temperature';

export const ContainerNameapp = styled.div`
    padding: 1rem 4rem;
    -webkit-backdrop-filter: blur(10px);
    backdrop-filter: blur(10px);
    background-color: rgba(255, 255, 255, 0.4); 
    border-radius: 0.5rem;

`;

export const ContainerButton = styled.button`
    background-color: rgb(11,5,28);
    padding: 1em 2em;
    border: none;
    border-radius: 5px;
    font-weight: bold;
    letter-spacing: 5px;
    text-transform: uppercase;
    color: rgb(0, 255, 21);
    transition: all 1000ms;
    font-size: 15px;
    position: relative;
    overflow: hidden;

    &:hover {
        color: #000000;
        transform: scale(1.1);
        box-shadow: 4px 5px 17px -4px rgb(0, 255, 21);
        }
    
        &:before {
        content: "";
        position: absolute;
        left: -50px;
        top: 0;
        width: 0;
        height: 100%;
        background-color: rgb(0, 255, 21);;
        transform: skewX(45deg);
        z-index: -1;
        transition: width 1000ms;
        }
    
        &:hover::before {
        width: 150%;
        }
    
`;

export const ContainerCharts = styled.div`
width: 200px;
height: 300px;
margin: 0 auto;
text-align: center;
// padding: 1rem;
// border: 1px solid red;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding-top: 20px;
-webkit-backdrop-filter: blur(10px);
backdrop-filter: blur(10px);
background-color: rgba(255, 255, 255, 0.4); 
border-radius: 0.9rem;
box-shadow: 0px 5px 15px rgba(0, 255, 21, 0.25);
`;

export const TempOrange = styled(Temperature)`
color:#FF4500;


`;

