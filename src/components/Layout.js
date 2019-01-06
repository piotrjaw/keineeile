import React from 'react'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from "gatsby"
import { Normalize } from 'styled-normalize'
import styled, { createGlobalStyle } from 'styled-components'
import { font, media, palette } from './common-styles'

import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import RenderOnSize from '../components/RenderOnSize'
import SocialMediaButtons from '../components/SocialMediaButtons'

const LayoutWrapper = styled.div`
  min-height: calc(100vh - 131px);
  overflow: visible;
  padding: 0 20px;

  ${
    media.tablet`
      min-height: calc(100vh - 195px);
      padding: 0 64px;
    `
  }
`

const StyledSocialMediaButtons = styled(SocialMediaButtons)`
  position: fixed;
  top: calc(50vh - 120px);
  left: 64px;
`

const GlobalStyle = createGlobalStyle`
  body {
    ${font('sans')}
    color: ${palette('text')};
  }

  .tl-wrapper {
    overflow: hidden;
  }
`

const TemplateWrapper = ({ children }) => (
  <StaticQuery
    query={graphql`
      query HeadingQuery {
          site {
            siteMetadata {
              title,
              description,
              email,
            }
          }
        }
    `}
    render={data => (
      <div>
        <Normalize />
        <GlobalStyle />
        <Helmet>
          <html lang="en" />
          <title>{data.site.siteMetadata.title}</title>
          <meta name="description" content={data.site.siteMetadata.description} />

          <link href="https://fonts.googleapis.com/css?family=Lora|Nunito:400,700" rel="stylesheet" />

          <link rel="apple-touch-icon" sizes="180x180" href="/img/favicon/apple-touch-icon.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/img/favicon/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/img/favicon/favicon-16x16.png" />
          <link rel="manifest" href="/img/favicon/site.webmanifest" />
          <link rel="mask-icon" href="/img/favicon/safari-pinned-tab.svg" color="#5bbad5" />
          <meta name="msapplication-TileColor" content="#00aba9" />
          <meta name="theme-color" content="#ffffff" />

	        <meta property="og:type" content="business.business" />
          <meta property="og:title" content={data.site.siteMetadata.title} />
          <meta property="og:url" content="http://keineeile.com" />
          <meta property="og:image" content="/img/index.png" />
        </Helmet>
        <Navbar />
        <LayoutWrapper>{ children }</LayoutWrapper>
        <Footer email={ data.site.siteMetadata.email } />
        { false && <RenderOnSize
          size="desktop"
        >
          <StyledSocialMediaButtons
            email={ data.site.siteMetadata.email }
            vertical={ true }
          />
        </RenderOnSize> }
      </div>
    )}
  />
)

export default TemplateWrapper
