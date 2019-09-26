import React from "react"
import styled from "styled-components"
import Typist from "react-typist"

import { media } from "../utils/style"

const StyledTypist = styled(Typist)`
  color: #fff;
  letter-spacing: 17px;
  margin: 0 auto;
  font-size: 72px;
  line-height: 80px;
  font-weight: 100;
  text-transform: uppercase;
  font-family: "Raleway";
  ${media.xs`
        font-size:38px;
        line-height: 44px;
        letter-spacing: 8px;
    `}
`

class HeroText extends React.Component {
  render() {
    if (this.props.text) {
      return (
        <StyledTypist cursor={{ show: false }} {...this.props}>
          <strong>{this.props.text.split(" ").slice(0, 1)}</strong>
          <br />
          {this.props.text
            .split(" ")
            .slice(1)
            .join(" ")}
        </StyledTypist>
      )
    } else {
      return (
        <StyledTypist cursor={{ show: false }} {...this.props}>
          <strong key={1}>I</strong> Design Responsive Websites
          <Typist.Backspace count={27} delay={1000} />
          <span key={2}> Make Fast Web Apps</span>
          <Typist.Backspace count={19} delay={1000} />
          <span key={3}> Improve Existing Software</span>
          <Typist.Backspace count={26} delay={1000} />
          <span key={4}> Live In The Greater Houston Area</span>
          <Typist.Delay ms={300} />
          <span key={5}>.</span>
          <Typist.Delay ms={600} />
          <span key={6}>.</span>
          <Typist.Delay ms={900} />
          <span key={7}>.</span>
          <Typist.Backspace count={37} delay={10} />
          <strong>But Mostly I Just</strong> Use Technology To Make People's
          Lives Better.
        </StyledTypist>
      )
    }
  }
}

export default HeroText
