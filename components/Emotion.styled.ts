/** @jsxImportSource @emotion/react */
import { css, keyframes } from '@emotion/react'
import styled from "@emotion/styled";

const floating1 = keyframes`
    0 {
        transform: translateY(0);
    }
    33% {
        transform: translateY(-100px);
    }
    66% {
        transform: translateY(100px);
    }
    100% {
        transform: translateY(0);
    }
`

const floating2 = keyframes`
    0 {
        transform: translateY(0);
    }
    33% {
        transform: translateY(-75px);
    }
    66% {
        transform: translateY(75px);
    }
    660% {
        transform: translateY(0);
    }
`

const floating3 = keyframes`
    0 {
        transform: translateY(0);
    }
    33% {
        transform: translateY(-50px);
    }
    66% {
        transform: translateY(50px);
    }
    100% {
        transform: translateY(0);
    }
`

const floating4 = keyframes`
    0 {
        transform: translateY(0);
    }
    33% {
        transform: translateY(-25px);
    }
    66% {
        transform: translateY(25px);
    }
    100% {
        transform: translateY(0);
    }
`

export const EmotionWrapper = css`
    display: flex;
    margin-top: 125px;
    margin-left: 30px;
`

export const FirstStyle = styled.div`
    width: 150px; 
    height: 150px; 
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    font-size: 20px;
    font-weight: bold;
    border-radius: 100%;
    margin: 15px;
    background-image: linear-gradient(135deg, #f83600 0%, #f9d423 100%);
    animation: ${floating1} 3s ease infinite;
`

export const SecondText = styled(FirstStyle)`
    background-image: linear-gradient(-20deg, #b721ff 0%, #21d4fd 100%);
    animation: ${floating2} 3s ease infinite;
`

export const ThirdText = styled(FirstStyle)`
    background-image: linear-gradient(to top, #e8198b 0%, #c7eafd 100%);
    animation: ${floating3} 3s ease infinite;
`

export const FourText = styled(FirstStyle)`
    background-image: linear-gradient(to top, #0fd850 0%, #f9f047 100%);
    animation: ${floating4} 3s ease infinite;
    margin-right: 0;
`