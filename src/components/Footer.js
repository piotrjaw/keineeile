import React from 'react'
import styled from 'styled-components'
import Logo from './Logo'
import RenderOnSize from './RenderOnSize'
import SocialMediaButtons from './SocialMediaButtons'
import { media, palette } from './common-styles'

const Wrapper = styled.div`
  height: 64px;
  padding: 0 20px;

  ${
    media.tablet`
      padding: 0 64px;
    `
  }
`

const Content = styled.div`
  align-items: center;
  display: flex;
  height: 100%;
  justify-content: center;

  ${
    media.tablet`
      border-top: 2px solid ${palette('background', 'lightGray')};
      justify-content: space-between;
    `
  }
`

const LogoWrapper = styled(Logo)`
  margin-left: 24px;
  width: 121px;

  ${
    media.desktop`
      margin-left: 48px;
    `
  }
`

const Separator = styled.div`
  background-color: ${palette('background', 'lightGray')};
  height: 48px;
  width: 2px;
`

const RightWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  ${
    media.phone`
      align-items: center;
      flex-direction: row;
    `
  }
`

const StyledSocialMediaButtons = styled(SocialMediaButtons)`
  margin-top: 12px;

  ${
    media.phone`
      margin-left: 45px;
      margin-top: 0;
    `
  }
`

const FooterText = styled.span`
  color: ${palette('text', 'gray')};
  font-size: 14px;

  ${
    media.phone`
      margin-right: 42px;
    `
  }
`

const Footer = class extends React.Component {
  render() {
    const year = new Date().getFullYear()
    return (
      <Wrapper>
        <Content>
          <RenderOnSize size="tablet">
            <LogoWrapper />
          </RenderOnSize>
          <RightWrapper>
            <FooterText>
              {year} © <b>KEINE EILE</b> Szkoła języka niemieckiego Warszawa
            </FooterText>
            <RenderOnSize size="phone">
              <Separator />
            </RenderOnSize>
            <StyledSocialMediaButtons email={ this.props.email }/>
          </RightWrapper>
        </Content>
      </Wrapper>
    )
  }
}

export default Footer
