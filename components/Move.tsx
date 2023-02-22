/** @jsxImportSource @emotion/react */
import React from "react"
import { Timeline, Tween } from "react-gsap"
import { css, jsx } from '@emotion/react'
import styled from "@emotion/styled";

export default function Move(): JSX.Element {
    return (
        <div css={Wrapper}>
            <Timeline target={<FirstCircles>First</FirstCircles>}>
                <Tween from={{ opacity: 0 }} to={{ opacity: 1 }} duration={2} />
                <Tween to={{ x: "125%" }} duration={2} />
            </Timeline>

            <Timeline target={<SecondCircles>Second</SecondCircles>}>
                <Tween from={{ opacity: 0 }} to={{ opacity: 1 }} duration={2} />
                <Tween to={{ x: "-125%" }} duration={2} />
            </Timeline>

            <Timeline target={<ThirdCircles>Third</ThirdCircles>}>
                <Tween from={{ opacity: 0 }} to={{ opacity: 1 }} duration={2} />
                <Tween to={{ y: "-100%" }} duration={2} />
            </Timeline>

            <Timeline target={<FourCircles>Four</FourCircles>}>
                <Tween from={{ opacity: 0 }} to={{ opacity: 1 }} duration={2} />
                <Tween to={{ y: "100%" }} duration={2} />
            </Timeline>
        </div>
    )
}

const Wrapper = css`
    display: flex;
    justify-content: center;
    margin-top: 125px;
`

const FirstCircles = styled.div`
    width: 150px;
    height: 150px;
    border-radius: 50%;
    position: relative;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-content: center;
    font-size: 20px;
    font-weight: bold;
    color: #fff;
    background-image: linear-gradient(135deg, #f83600 0%, #f9d423 100%);
    margin: 15px;
`

const SecondCircles = styled(FirstCircles)`
    background-image: linear-gradient(-20deg, #b721ff 0%, #21d4fd 100%);
`

const ThirdCircles = styled(FirstCircles)`
    background-image: linear-gradient(to top, #e8198b 0%, #c7eafd 100%);
`

const FourCircles = styled(FirstCircles)`
    background-image: linear-gradient(to top, #0fd850 0%, #f9f047 100%);
    margin-right: 0;
`