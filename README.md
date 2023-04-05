# ✅ GSAP를 Emotion을 이용하여 스타일링한 애니메이션 예제 파일입니다.
:octocat: 바로 가기 : https://light9639.github.io/React-GSAP-TypeScript/

![light9639 github io_React-GSAP-TypeScript_](https://user-images.githubusercontent.com/95972251/229793921-7b0b22b0-0db6-4c8b-abf6-ddaed2bfadd9.png)

:sparkles: ✅ GSAP를 Emotion을 이용하여 스타일링한 애니메이션 예제 파일입니다. :sparkles:
## :tada: React 프로젝트 생성
- React 생성
```bash
npm create-react-app my-app
# or
yarn create react-app my-app
```

- vite를 이용하여 프로젝트를 생성하려면
```bash
npm create vite@latest
# or
yarn create vite
```
- 터미널에서 실행 후 프로젝트 이름 만든 후 React 선택, Typescirpt-SWC 선택하면 생성 완료.
## ☄️ react-router-dom, emotion 및 gsap 관련 라이브러리 설치
- 프로젝트를 진행하려면 `react-router-dom`, `emotion` 및 `gsap` 관련 라이브러리를 설치한다.
```bash
$ npm install @emotion/react @emotion/styled gsap react-gsap react-router-dom
# or
$ yarn add @emotion/react @emotion/styled gsap react-gsap react-router-dom
```
## ✒️ App.tsx, main.tsx, GlobalStyle.tsx, Header.tsx 수정 및 작성
### ⚡ App.tsx
- `react-router-dom`을 이용하여 페이지 전환시 다른 페이지가 나오도록 만든다.
```typescript
import React, { useState, useRef, useLayoutEffect } from 'react'
import { gsap } from "gsap";
import reactLogo from './assets/react.svg'
import Move from "@components/Move";
import Text from "@components/Text";
import Header from "@components/Header";
import Emotion from "@components/Emotion";
import { Routes, Route } from 'react-router-dom'

export default function App(): JSX.Element {
  return (
    <div className="App">
      <Header></Header>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="https://cdn.worldvectorlogo.com/logos/gsap-greensock.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      {/* <h1>React Gsap Template</h1> */}
      <Routes>
        <Route path="/" element={<Text />} />
        <Route path="Move" element={<Move />} />
        <Route path="Emotion" element={<Emotion />} />
      </Routes>
    </div>
  )
}
```
### ⚡ GlobalStyle.tsx
- `emotion`의 전역 스타일링을 사용하여 적용할 스타일을 작성한 후. `main.tsx`에 `import` 한다.
```typescript
import { Global, css } from '@emotion/react'

const style = css`
  * {
    margin: 0;
    padding: 0;
  }

  body {
    box-sizing: border-box;
  }

  #root {
    max-width: 1280px;
    margin: 0 auto;
    padding: 2rem;
    text-align: center;
  }

  .logo {
    height: 7rem;
    padding: 1.5em;
    will-change: filter;
  }

  .logo:hover {
    filter: drop-shadow(0 0 2em #3cba92);
  }

  .logo.react:hover {
    filter: drop-shadow(0 0 2em #61dafbaa);
  }

  @keyframes logo-spin {
    from {
      transform: rotate(0deg);
    }

    to {
      transform: rotate(360deg);
    }
  }

  @media (prefers-reduced-motion: no-preference) {
    a:nth-of-type(2) .logo {
      animation: logo-spin infinite 20s linear;
    }
  }

  .card {
    padding: 2em;
  }

  .read-the-docs {
    color: #888;
  }

  :root {
    font-family: Inter, Avenir, Helvetica, Arial, sans-serif;
    font-size: 16px;
    line-height: 24px;
    font-weight: 400;

    color-scheme: light dark;
    color: rgba(255, 255, 255, 0.87);
    background-color: #242424;

    font-synthesis: none;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-text-size-adjust: 100%;
  }

  a {
    font-weight: 500;
    color: #646cff;
    text-decoration: inherit;
  }

  a:hover {
    color: #535bf2;
  }

  body {
    margin: 0;
    display: flex;
    place-items: center;
    min-width: 320px;
    margin-top: 75px;
  }

  h1 {
    font-size: 2.5rem;
    line-height: 1.1;
  }

  button {
    border-radius: 8px;
    border: 1px solid transparent;
    padding: 0.6em 1.2em;
    font-size: 1em;
    font-weight: 500;
    font-family: inherit;
    background-color: #1a1a1a;
    cursor: pointer;
    transition: border-color 0.25s;
  }

  button:hover {
    border-color: #646cff;
  }

  button:focus,
  button:focus-visible {
    outline: 4px auto -webkit-focus-ring-color;
  }

  @media (prefers-color-scheme: light) {
    :root {
      color: #213547;
      background-color: #ffffff;
    }

    a:hover {
      color: #747bff;
    }

    button {
      background-color: #f9f9f9;
    }
  }
`

export default function GlobalStyle() {
  return <Global styles={style} />
}
```

### ⚡ main.tsx
- `GlobalStyle.tsx`를 `import`하여 전역 스타일링을 적용시킨다.
- `react-router-dom` 중 `HashRouter`를 이용하여 `/#/이름`의 라우팅을 실행되도록 한다. 
- 왜냐하면 `Github`에서 라우팅을 하다가 새로고침을 실행하면 오류가 발생하기 때문에 `/#/이름`으로 라우팅 사용하여 오류 페이지를 없애기 위해서이다.
```typescript
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { HashRouter } from 'react-router-dom'
import GlobalStyle from "@components/GlobalStyle";

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <HashRouter>
      <GlobalStyle />
      <App />
    </HashRouter>
  </React.StrictMode>,
)
```

### ⚡ Header.tsx
- 맨 상단에 `react-router-dom`의 `Link`를 사용하여 페이지 전환이 가능하도록 작성한다.
```typescript
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
```
## ✒️ Gsap 파일 Emotion.tsx, Text.tsx, Move.tsx, Emotion.styled.ts 수정 및 작성
- `GSAP`의 여러 기능을 이용하여 제작한 3가지 애니메이션 예제 파일 작성법입니다.
### ⚡ Emotion.tsx
- `/** @jsxImportSource @emotion/react */`를 선언하여 `typescipt`에서 `emotion`을 사용할 때 오류가 나지 않도록 한다.
- 밑에 있는 `Emotion.styled.ts`파일에서 여러 변수들을 `import`하여 사용한다.
```typescript
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
```
### ⚡ Emotion.styled.ts
- `@emotion/react`에서 `keyframes`을 사용하여 4가지 애니메이션을 제작한다.
- 4가지 애니메이션은 위아래로 움직이는 애니메이션이며, 각각의 움직임을 다르게 설정하였다.
- 이후 전체적인 페이지와 원의 스타일링을 한 후 `styled(FirstStyle)`을 원의 속성을 공유하도록 한다.
```typescript
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
```
### ⚡ Text.tsx
- 이 페이지에서는 각각의 원이 몇바퀴를 돌아가는지를 만든 4가지 애니메이션 페이지이다.
```typescript
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
```
### ⚡ Move.tsx
- 이 페이지에서는 각각의 원이 상하좌우로 이동하도록 만든 애니메이션 페이지이다.
```typescript
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
```
## 📎 출처
- <a href="https://velog.io/@wlsdnjs156/React-gsap%EC%88%9C%EC%B0%A8%EC%A0%81-%EC%97%90%EB%8B%88%EB%A9%94%EC%9D%B4%EC%85%98">React - gsap(순차적 에니메이션)</a>
- <a href="https://wazacs.tistory.com/38">React 에서 애니메이션, 인터렉션 구축하기 (emotion / tweenmax)</a>
