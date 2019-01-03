import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Icon from './Icon'
import { palette } from './common-styles'

const StyledIcon = styled(Icon)`
  color: ${palette('text', 'darkGray')};
  transition: color .2s ease-in-out;

  :hover {
    color: ${palette('background', 'active')};
  }
`

const StyledAnchor = styled.a`
  cursor: pointer;

  :not(:last-child) {
    margin-${({ vertical }) => vertical ? 'bottom' : 'right'}: 45px;
  }
`

const Wrapper = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  flex-direction: ${({ vertical }) => vertical ? 'column' : 'row'};
`

const Separator = styled.div`
  background-color: ${palette('background', 'teal')};
  height: 48px;
  width: 2px;
`

const SocialMediaButtons = class extends React.Component {
  render() {
    const { email, facebookURL, twitterURL, vertical } = this.props;
    return (
      <Wrapper
        className={ this.props.className }
        vertical={ vertical }
      >
        { facebookURL &&
          <StyledAnchor vertical={ vertical }>
            <StyledIcon
              name="facebook"
              size="21"
            />
          </StyledAnchor>
        }
        { email &&
          <StyledAnchor vertical={ vertical }>
            <StyledIcon
              name="mail"
              size="21"
            />
          </StyledAnchor>
        }
        { twitterURL &&
          <StyledAnchor vertical={ vertical }>
            <StyledIcon
              name="twitter"
              size="21"
            />
          </StyledAnchor>
        }
        { vertical && <Separator />}
      </Wrapper>
    )
  }
}

SocialMediaButtons.propTypes = {
  email: PropTypes.string,
  facebookURL: PropTypes.string,
  twitterURL: PropTypes.string,
  vertical: PropTypes.bool,

}

SocialMediaButtons.defaultProps = {
  email: null,
  facebookURL: null,
  twitterURL: null,
  vertical: false,

}

export default SocialMediaButtons
