import React from "react"
import SEO from "../components/seo"
import Layout from "../components/layout"
import styled from "@emotion/styled"
import { AnimatedLink } from "../components/shared"

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
  line-height: 1.8rem;
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
          Frontend developer,<AnimatedLink href={"https://www.meetup.com/fed-on-the-rocks/"} target={"_blank"}><Marker>community enthusiast</Marker>, meetup organizer</AnimatedLink>, international public speaker,
          trainer, author, and mentor, < br/><AnimatedLink href={"https://developers.google.com/community/experts/directory/profile/profile-nir-kaufman"} target={"_blank"}><Marker>Google developer expert</Marker> in web technologies.</AnimatedLink> <br/>
          When I'm not coding I produce electronic <Marker>music</Marker>, and <Marker>vegan</Marker> food.
        </Description>
      </Content>
    </Layout>
  )
}

export default About
