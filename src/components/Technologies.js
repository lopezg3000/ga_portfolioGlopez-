import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"

import { media } from "../utils/style"

const Wrapper = styled.div`
  width: 60%;
  margin: 0 auto;
  ${media.xs`
    width:100%
    `}
`

const Item = styled.div`
  padding: 1.5em;
  ${media.xs`
        padding: 1em;
    `}
  display:inline-block;
`

class Technologies extends React.Component {
  render() {
    const { edges } = this.props
    return (
      <Wrapper>
        {edges.map(({ node: item }) => (
          <Item key={Item.id}>
            <Img fixed={item.fixed} />
          </Item>
        ))}
      </Wrapper>
    )
  }
}

export default Technologies
