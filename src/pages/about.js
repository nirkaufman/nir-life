import React from "react"
import SEO from "../components/seo"
import Layout from "../components/layout"
import styled from "@emotion/styled"

const Content = styled.div`
  text-align: center;
  margin: 0 auto;
  max-width: 860px;
  padding: 1.45rem 1.0875rem;
`

const Description = styled.p`
  padding: 0;
  margin-bottom: 1rem;
  font-size: 1.4rem;
`
const Email = styled.a`
  padding: 0;
  margin-bottom: 2rem;
  display: inline-block;
  font-size: 1.4rem;
`

const Marker = styled.h3`
  display: inline;
  border-radius: 1em 0 1em 0;
  background-image: linear-gradient(
    -100deg,
    rgba(255, 250, 150, 0.15),
    rgba(255, 250, 150, 0.8) 100%,
    rgba(255, 250, 150, 0.25)
  );
`


const About = () => {
  return (
    <Layout>
      <SEO title="About Nir kaufman" />
      <Content>
        <h1>Nir Kaufman</h1>
        <Description>
          Frontend developer, <Marker>community enthusiast</Marker>, meetup organizer, international public speaker,
          trainer, author, mentor, < br/><Marker>Google Developer Expert</Marker> in web technologies. <br/>
          When I'm not coding I make electronic <Marker>music</Marker>, and <Marker>vegan</Marker> food.
        </Description>
      </Content>
    </Layout>
  )
}

export default About
