import React from "react"
import Layout from "../components/layout/Layout"
import { page, text } from "../examples/home.module.css"
import { ExampleButton } from "../examples/button"
import styled from "styled-components"

export default function Home() {
  return (
    <Layout>
      <Wrapper>
        <ExampleButton>click me</ExampleButton>
        <h1>Home Page</h1>
        <h1>Hello world!</h1>
        <h1>Hello people!</h1>
        <p className={text}>lorem ipsum dolor sit amet, consectetur</p>
      </Wrapper>
    </Layout>
  )
}

const Wrapper = styled.section`
  color: rgb(6, 174, 111);

  .text {
    color: yellowgreen;
    text-transform: capitalize;
  }
`
