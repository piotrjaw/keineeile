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
  bottom: 8%;
  height: 110%;
  position: absolute;
  right: 65vw;
  width: 100vw;
  z-index: -2;
`

const MintRect = styled.div`
  background-color: ${palette('background', 'mint')};
  bottom: 200px;
  height: 100vh;
  left: 60vw;
  position: absolute;
  width: 100vw;
  z-index: -2;
`

const H1 = styled.h1`
  color: ${palette('text')};
  ${font('serif')};
  font-size: 26px;
  position: relative;
  text-align: left;
  width: 100%;
`

const Section = styled.section`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
`

const StyledImage = styled(Img)`
  display: inline-block;
  flex-shrink: 0;
  width: 200%;
  margin: 10px 0;

  ${
    media.phone`
      width: 120%;
    `
  }

  ${
    media.tablet`
      max-width: 35vw;
      width: 100%;
    `
  }
`

const ContentWrapper = styled.div`
  color: ${palette('text', 'gray')};
  flex-shrink: 0;
  font-size: 13px;
  line-height: 1.31;
  max-width: 530px;
  width: 100%;
`

const TitleWrapper = styled.div`
  align-items: flex-end;
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  margin-right: 75px;
  max-width: 567px;
  width: 100%;
`

const TopWrapper = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  width: 100%;
`

const UnderlineSpan = styled.span`
  ${underline}

  :after {
    bottom: 0;
  }
`

const Quote = styled.p`
  ${font('serif')};
  font-size: 21px;
  line-height: 1.43;
  max-width: 823px;
  margin-top: 40px;
  position: relative;
  text-align: center;

  :before {
    bottom: 0;
    content: '”';
    color: ${palette('text', 'active')};
    ${font('serif')};
    font-size: 45px;
    height: 20px;
    line-height: .6;
    position: absolute;
    transform: rotate(180deg);
    left: -20px;
  }

  :after {
    content: '”';
    color: ${palette('text', 'active')};
    ${font('serif')};
    font-size: 45px;
    height: 20px;
    line-height: .6;
    position: absolute;
    right: -20px;
    top: 0;
  }
`

export default class AboutPage extends React.Component {
  render() {
    const { data } = this.props;
    return (
      <Layout>
        <Section>
          <TopWrapper>
            <TitleWrapper>
              <H1>
                O nas
              </H1>
              <ContentWrapper>
                <p>
                  Swoją przygodę z językiem niemieckim zaczęłam jeszcze w liceum, gdy jego brzmienie sprawiło, że zechciałam się go nauczyć, a logiczne zasady gramatyczne i motywacja umożliwiły szybkie osiągnięcie celu. Jestem absolwentką Germanistyki na Uniwersytecie Warszawskim. Półtora roku studiów spędziłam w Niemczech, gdzie studiowałam na Uniwersytecie Kraju Saary w Saarbrücken oraz na Uniwersytecie w Wuppertal. Moje zainteresowania naukowe to kulturoznawstwo oraz językoznawstwo stosowane.
                </p>
                <p>
                  Stale poszerzam swoją <UnderlineSpan>wiedzę praktyczną i teoretyczną</UnderlineSpan>, uczestnicząc w różnych <UnderlineSpan>szkoleniach z zakresu glottodydaktyki</UnderlineSpan>. Zajęcia, które prowadzę, staram się <UnderlineSpan>dostosowywać</UnderlineSpan> <UnderlineSpan>do oczekiwań i potrzeb</UnderlineSpan> kursantów, uzupełniam je również o różnorodne materiały dodatkowe. Ćwiczymy gramatykę, czytamy dodatkowe teksty oraz oglądamy filmy, aby mieć kontakt z żywym językiem.
                </p>
                <p>
                  Jestem przekonana, że niemieckiego może nauczyć się każdy, a ja chętnie pomagam w osiągnięciu tego celu. Poza pracą, która jest moją pasją, sama uczę się języka obcego, tworzę pracę scrapbooking’owe, czytam książki oraz podróżuję.
                </p>
              </ContentWrapper>
            </TitleWrapper>
            <StyledImage fluid={ data.image.childImageSharp.fluid } />
          </TopWrapper>
          <Quote>
            Jestem przekonana, że niemieckiego może nauczyć się każdy, a ja chętnie pomagam w osiągnięciu tego celu.
          </Quote>
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
    image: file(relativePath: { eq: "about.png" }) {
      childImageSharp {
        fluid(maxWidth: 300) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
