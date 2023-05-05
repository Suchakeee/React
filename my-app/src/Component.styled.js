import Styled from 'styled-components'

export const Container = Styled.button`
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
