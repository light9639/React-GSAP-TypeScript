import React, { useRef, useLayoutEffect } from 'react'
import { gsap } from "gsap";
import styled from "@emotion/styled";

export default function Text(): JSX.Element {
    const root = useRef() as React.MutableRefObject<HTMLDivElement>;

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            gsap.to(".box1", { rotation: "+=360", duration: "3" });
            gsap.to(".box2", { rotation: "+=720", duration: "3" });
            gsap.to(".box3", { rotation: "+=1080", duration: "3" });
            gsap.to(".box4", { rotation: "+=1440", duration: "3" });
        }, root);

        return () => ctx.revert();
    }, []);

    return (
        <TextWrapper ref={root}>
            <FirstText className="box1">First</FirstText>
            <SecondText className="box2">Second</SecondText>
            <ThirdText className="box3">Third</ThirdText>
            <FourText className="box4">Four</FourText>
        </TextWrapper>
    )
}

const TextWrapper = styled.div`
    display: flex;
    margin-left: 30px;
`

const FirstText = styled.div`
    width: 150px;
    height: 150px;
    font-size: 20px;
    background-image: linear-gradient(135deg, #f83600 0%, #f9d423 100%);
    border-radius: 50%;
    color: #fff;
    font-weight: bold;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 50px 15px 50px 0px;
`

const SecondText = styled(FirstText)`
    background-image: linear-gradient(-20deg, #b721ff 0%, #21d4fd 100%);
`

const ThirdText = styled(FirstText)`
    background-image: linear-gradient(to top, #e8198b 0%, #c7eafd 100%);
`

const FourText = styled(FirstText)`
    background-image: linear-gradient(to top, #0fd850 0%, #f9f047 100%);
    margin-right: 0;
`