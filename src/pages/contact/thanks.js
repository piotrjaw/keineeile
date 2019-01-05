import React from "react";
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components'
import Layout from '../../components/Layout'
import { font, media, underline } from '../../components/common-styles'

const P = styled.p`
  ${font('serif')};
  font-size: 16px;
  line-height: 1.71;
  text-align: center;
`

const H1 = styled.h1`
  ${font('serif')};
  font-size: 25px;
  line-height: 1.71;
  text-align: center;
`

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  justify-content: center;
  max-width: 700px;
  margin: 0 auto;
  width: 100%;
`

const UnderlineSpan = styled.span`
  ${underline}
  font-weight: bold;

  :after {
    bottom: 0;
  }
`

const StyledImage = styled(Img)`
  display: inline-block;
  flex-shrink: 0;
  margin-top: 50px;
  margin-bottom: 20px;
  position: relative;
  width: 100%;

  ${
    media.desktop`
      left: -64px;
      margin-bottom: -100px;
      margin-right: -64px;
      margin-top: 0;
      max-width: 40vw;
      top: -130px;
    `
  }

  ${
    media.largeDesktop`
      max-width: 40vw;
    `
  }
`

const Section = styled.section`
  display: flex;
  flex-direction: column-reverse;

  ${
    media.desktop`
      flex-direction: row;
    `
  }
`

export default class ThankYouPage extends React.Component {
  render() {
    const { data } = this.props;
    return (
      <Layout>
        <Section>
          <StyledImage fluid={ data.image.childImageSharp.fluid } />
          <ContentWrapper>
            <H1><UnderlineSpan>Dziękujemy!</UnderlineSpan></H1>
            <P>Skontaktujemy się z Tobą tak szybko, jak to możliwe.</P>
          </ContentWrapper>
        </Section>
      </Layout>
    );
  }
}

export const query = graphql`
  query {
    image: file(relativePath: { eq: "contact.png" }) {
      childImageSharp {
        fluid(maxWidth: 300) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
