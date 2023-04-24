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
        <a href="https://greensock.com/gsap/" target="_blank">
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
