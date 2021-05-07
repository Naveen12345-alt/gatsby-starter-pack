import React from "react"
import styled from "styled-components"
import { StaticImage } from "gatsby-plugin-image"

const images = () => {
  // Image Optimization plugin: Gatsby image plugin
  return (
    <Wrapper>
      <article>
        <h4>constrained/default</h4>
        <StaticImage
          src="../assets/images/recipe-1.jpeg"
          alt="fond"
          placeholder="tracedSVG"
          layout="constrained"
          as="section"
          className="example-img"
        />
      </article>
      <article>
        <h4>fixed</h4>
        <StaticImage
          src="../assets/images/recipe-1.jpeg"
          alt="fond"
          placeholder="blurred"
          layout="fixed"
          width={200}
          as="div"
          className="example-img"
        />
      </article>
      <article>
        <h4>full width</h4>
        <StaticImage
          src="../assets/images/recipe-1.jpeg"
          alt="fond"
          placeholder="dominantColor"
          layout="fullWidth"
          as="article"
          className="example-img"
        />
      </article>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  width: 70vw;
  margin: 0 auto;
  display: grid;
  text-align: center;
  gap: 2rem;
  article {
    border: 2px solid red;
  }
  .example-img {
    border-radius: 1rem;
    // fix for correcting image height
    height: 300px;
  }

  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr 1fr;
    .example-img {
      height: 200px;
    }
  }
`

export default images
