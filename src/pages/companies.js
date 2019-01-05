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
  bottom: 0;
  height: 130%;
  position: absolute;
  right: 65vw;
  width: 100vw;
  z-index: -2;
`

const MintRect = styled.div`
  background-color: ${palette('background', 'mint')};
  bottom: 200px;
  height: 100vh;
  right: -64px;
  position: absolute;
  width: 35vw;
  z-index: -2;
`

const H1 = styled.h1`
  ${font('serif')};
  font-size: 26px;
  position: relative;
  text-align: left;
  width: 100%;
`

const Section = styled.section`
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;

  ${
    media.desktop`
      flex-direction: row;
    `
  }
`

const StyledImage = styled(Img)`
  display: inline-block;
  flex-shrink: 0;
  margin: 10px 0;
  width: 100%;
`

const ContentWrapper = styled.div`
  flex-shrink: 0;
  font-size: 14px;
  line-height: 1.31;
  max-width: 100%;
  width: 100%;

  ${
    media.tablet`
      max-width: 530px;
    `
  }
`

const TitleWrapper = styled.div`
  align-items: flex-end;
  color: ${palette('text')};
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  max-width: 100%;
  width: 100%;

  ${
    media.tablet`
      margin-right: 100px;
      max-width: 530px;
    `
  }

  ${
    media.desktop`
      padding-top: 64px;
    `
  }

  ${
    media.largeDesktop`
      max-width: 567px;
    `
  }
`

const ImageWrapper = styled.div`
  flex-grow: 1;
  flex-shrink: 0;
  left: -64px;
  position: relative;
  width: 200%;

  ${
    media.phone`
      width: 120%;
    `
  }

  ${
    media.tablet`
      max-width: 100vw;
    `
  }

  ${
    media.desktop`
      left: 0;
      max-width: 35vw;
      padding-bottom: 221px;
      width: 100%;
    `
  }

  ${
    media.largeDesktop`
      padding-bottom: 121px;
    `
  }
`

const P = styled.p`
  ${font('serif')};
  line-height: 1.71;
`

const UnderlineSpan = styled.span`
  ${underline}
  font-weight: bold;

  :after {
    bottom: 0;
  }
`

const Quote = styled.p`
  ${font('serif')};
  font-size: 18px;
  line-height: 1.43;
  margin-top: 120px;
  position: absolute;
  right: 0;
  text-align: center;
  width: 705px;

  ${
    media.largeDesktop`
      margin-top: 40px;
    `
  }

  :before {
    bottom: 0;
    content: '”';
    color: ${palette('text', 'active')};
    ${font('serif')};
    font-size: 37px;
    height: 17px;
    line-height: .6;
    position: absolute;
    transform: rotate(180deg);
    left: -20px;
  }

  :after {
    content: '”';
    color: ${palette('text', 'active')};
    ${font('serif')};
    font-size: 37px;
    height: 17px;
    line-height: .6;
    position: absolute;
    right: -20px;
    top: 0;
  }
`

const UL = styled.ul`
  list-style: none;
  padding-left: 20px;
`

const LI = styled.li`
  color: ${palette('text', 'gray')};
  line-height: 1.81;
  position: relative;

  :before {
    content: '•';
    color: ${palette('background', 'active')};
    font-weight: bold;
    display: inline-block;
    left: -19px;
    position: absolute;
  }
`

const LastP = styled.p`
  color: ${palette('text', 'gray')};
`

const BoldP = styled.p`
  font-weight: bold;
  margin-top: 32px;
`

export default class AboutPage extends React.Component {
  render() {
    const { data } = this.props;
    return (
      <Layout>
        <Section>
          <TitleWrapper>
            <H1>
              Dla firm
            </H1>
            <ContentWrapper>
              <P>
                Masz <UnderlineSpan>niemieckojęzycznych</UnderlineSpan> <UnderlineSpan>klientów</UnderlineSpan> albo <UnderlineSpan>partnerów</UnderlineSpan> <UnderlineSpan>biznesowych?<br />
                </UnderlineSpan> Odbywasz <UnderlineSpan>podróże</UnderlineSpan> <UnderlineSpan>służbowe</UnderlineSpan> do Niemiec, Austrii albo Szwajcarii?<br />
                A może po prostu znajomość niemieckiego byłaby <UnderlineSpan>dodatkowym</UnderlineSpan> <UnderlineSpan>atutem?</UnderlineSpan>
              </P>
              <BoldP>
                Oferta kursów językowych szkoły Keine Eile skierowana jest przede wszystkim do firm.
              </BoldP>
              <LastP>
                Jeśli tak, ta oferta skierowana jest do Ciebie. Oferujemy profesjonalne kursy z języka ogólnego i biznesowego, prowadzone w oparciu o najnowsze podręczniki oraz materiały dodatkowe, dostosowane do potrzeb i oczekiwań kursanta. Po audycie językowym, który ma na celu dokładne zweryfikowanie poziomu kursanta, analizujemy potrzeby i oczekiwania, wybieramy materiały dydaktyczne i ustalamy intensywność zajęć. Zajęcia realizowane są w siedzibie firmy kursanta.
              </LastP>
              <BoldP>
                Oferujemy:
              </BoldP>
              <UL>
                <LI>audyt językowy</LI>
                <LI>analizę potrzeb kursanta</LI>
                <LI>dobór odpowiednich materiałów</LI>
                <LI>regularną weryfikacje wiedzy</LI>
                <LI>miłą atmosferę</LI>
              </UL>
            </ContentWrapper>
          </TitleWrapper>
          <ImageWrapper>
            <StyledImage fluid={ data.image.childImageSharp.fluid } />
            <RenderOnSize size="desktop">
              <Quote>
                Jestem przekonana, że niemieckiego może nauczyć się każdy, a ja chętnie pomagam w osiągnięciu tego celu.
              </Quote>
            </RenderOnSize>
          </ImageWrapper>
          <RenderOnSize size="tablet">
            <GreyRect />
          </RenderOnSize>
          <RenderOnSize size="tablet">
            <MintRect />
          </RenderOnSize>
        </Section>
      </Layout>
    )
  }
}

AboutPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export const query = graphql`
  query {
    image: file(relativePath: { eq: "companies.png" }) {
      childImageSharp {
        fluid(maxWidth: 300) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
