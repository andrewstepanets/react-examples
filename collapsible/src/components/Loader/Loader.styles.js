import styled, { keyframes } from 'styled-components';
import loaderIcon from './assets/ico_loader.svg';


const spin = keyframes`
    from {
        transform: rotate(0);
        transform-origin: center center;
    }
    to {
        transform: rotate(360deg);
        transform-origin: center center;
    }
`;

export const LoaderWrapper = styled.div`
    /* position: absolute;
    top: 50%;
    left: 50%; */
    width: 100%;
    height: 100%;
    /* transform: translate(-50%, -50%); */
    display: grid;
    place-items: center;
`;
export const LoaderIcon = styled.div`
    width: 100px;
    height: 100px;
    /* position: absolute;
    top: 0;
    left: 0; */
    background: url(${loaderIcon}) no-repeat 0 0;
    background-size: 100px 100px;
    animation: ${spin} 500ms infinite linear;
`;