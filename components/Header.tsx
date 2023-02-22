/** @jsxImportSource @emotion/react */
import React from 'react'
import { Link } from 'react-router-dom'
import { css, jsx } from '@emotion/react'

export default function Header(): JSX.Element {
    return (
        <div css={HeaderCSS}>
            <Link to="/">Home</Link>
            <Link to="/Move">Move</Link>
            <Link to="/Emotion">Emotion</Link>
        </div>
    )
}

const HeaderCSS = css`
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    margin-bottom: 25px;
    gap: 25px;
    background-color: #000;
    width: 100%;
    padding: 20px 0;

    @media (max-width: 767px) {
        flex-wrap: wrap;
    }

    a {
        font-size: 1rem;
        color: #fff;
        font-weight: 600;
        transition: .5s;

        &:hover,
        &:focus {
            color: #00a8f2;
        }

        @media (max-width: 767px) {
            font-size: 0.9rem;
        }
    }
`
