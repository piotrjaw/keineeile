import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Layout from '../components/Layout'
import RenderOnSize from '../components/RenderOnSize'
import { font, media, palette, underline } from '../components/common-styles'

const GreyRect = styled.div`
  background-color: ${palette('background', 'lightGray')};
  bottom: 98px;
  height: 100vh;
  position: absolute;
  right: 126px;
  width: 100vw;
  z-index: -2;
`

const MintRect = styled.div`
  background-color: ${palette('background', 'mint')};
  bottom: 200px;
  height: 100vh;
  right: -64px;
  position: absolute;
  width: 36vw;
  z-index: -2;
`

const H1 = styled.h1`
  ${font('serif')};
  position: relative;
  text-transform: uppercase;
`

const H2 = styled.h2`
  color: ${palette('text', 'gray')};
  ${font('serif')};
  font-size: 16px;

  ${
    media.desktop`
      font-size: 20px;
    `
  }
`

const Section = styled.section`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;

  ${
    media.tablet`
      flex-direction: row;
    `
  }
`

const StyledImage = styled(Img)`
  display: inline-block;
  width: 200%;
  margin: 10px 0;

  ${
    media.phone`
      width: 120%;
    `
  }

  ${
    media.tablet`
      max-width: 50vw;
      width: 100%;
    `
  }
`

const TitleSpan = styled.span`
  ${underline}
  font-size: 60px;

  :after {
    bottom: 7px;
    height: 20px;
    left: -20px;
    width: calc(100% + 40px);
  }

  ${
    media.desktop`
      font-size: 80px;

      :after {
        bottom: 12px;
        height: 32px;
      }
    `
  }
`

const TitleWrapper = styled.div`
  align-items: flex-end;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  margin-right: 75px;
`

const UnderlineSpan = styled.span`
  ${underline}

  :after {
    bottom: 0;
  }
`

export default class IndexPage extends React.Component {
  render() {
    const { data } = this.props;
    return (
      <Layout>
        <Section>
          <TitleWrapper>
            <H1>
              <TitleSpan>Keine</TitleSpan><br />
              <TitleSpan>Eile</TitleSpan><br />
              <TitleSpan>Schule</TitleSpan>
              <RenderOnSize size="tablet">
                <GreyRect />
              </RenderOnSize>
            </H1>
            <H2>
              Niemiecki dla&nbsp;
              <UnderlineSpan>każdego!</UnderlineSpan>
            </H2>
          </TitleWrapper>
          <StyledImage fluid={ data.image.childImageSharp.fluid } />
          <RenderOnSize size="tablet">
            <MintRect />
          </RenderOnSize>
        </Section>
      </Layout>
    )
  }
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export const query = graphql`
  query {
    image: file(relativePath: { eq: "index.png" }) {
      childImageSharp {
        fluid(maxWidth: 300) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
