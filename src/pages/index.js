import React from "react"
import { graphql } from "gatsby"
import styled, { css } from "styled-components"
import { Flex, Box } from "@rebass/grid"
import Hero from "../components/Hero"
import Layout from "../components/Layout"
import HeroText from "../components/HeroText"
import Social from "../components/Social"
import Technologies from "../components/Technologies"

import { media } from "../utils/style"

const StyledHero = styled(Hero)`
  margin-top: -62px;
`

const Section = styled.div`
  text-align: center;
  padding-top: 45px;
  padding-bottom: 40px;
  ${props =>
    props.dark &&
    css`
      background: #292929;
      h2 {
        color: #fff;
      }
      h3 {
        color: #fff;
      }
      div {
        color: #979797;
      }
    `}
`

const SectionTitle = styled.h2`
  font-size: 2em;
  margin: 0.67em 0;
  ${media.xs`
      font-size:1.5em;
`}
`

const indexPage = ({ data }) => (
  <Layout>
    <StyledHero fluid={data.hero.edges[0].node.fluid}>
      <HeroText />
      <Social edges={data.allSocialJson.edges} />
    </StyledHero>
    <Section id="about-me">
      <h1>About Me</h1>
      <Flex alignItems="center" flexDirection="column">
        <Box px={2} width={[1, 1 / 2]}>
          <p>
            Hello, my name is Gabriel Lopez. I started my journey as a software
            developer about a year ago. I remember learning HTML for the first
            time and thinking to myself that programming was easier than I
            thought. Since then, I have faced many challenges such as my
            computer burning out and programming while working full time. I have
            tackled these challenges and others because programming is much more
            than a hobby of mine. It is something I love. I hope that this
            portfolio website shows my devotion to it as well as the sweat
            equity I have put in.
          </p>
        </Box>
      </Flex>
    </Section>
    <Section id="technologies">
      <SectionTitle>My Favorite Technologies</SectionTitle>
      <Technologies edges={data.allLogos.edges} />
    </Section>
  </Layout>
)

export default indexPage
export const pageQuery = graphql`
  query indexQuery {
    allSocialJson {
      edges {
        node {
          url
          type
        }
      }
    }
    allLogos: allImageSharp(
      filter: { original: { src: { regex: "/logo/" } } }
      sort: { fields: original___src }
    ) {
      edges {
        node {
          id
          fixed(height: 80, grayscale: true) {
            ...GatsbyImageSharpFixed_withWebp_tracedSVG
          }
        }
      }
    }
    hero: allImageSharp(
      filter: { original: { src: { regex: "/action-astronomy/" } } }
    ) {
      edges {
        node {
          id
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  }
`
