/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { EmotionWrapper, FirstStyle, SecondText, ThirdText, FourText } from "./Emotion.styled";

export default function Emotion(): JSX.Element {
    return (
        <div css={EmotionWrapper}>
            <FirstStyle>First</FirstStyle>
            <SecondText>Second</SecondText>
            <ThirdText>Third</ThirdText>
            <FourText>Four</FourText>
        </div>
    )
}