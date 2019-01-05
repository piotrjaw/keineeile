import React from "react";
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import { navigate } from "gatsby-link"
import { lighten } from 'polished'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Icon from '../../components/Icon'
import Layout from '../../components/Layout'
import RenderOnSize from '../../components/RenderOnSize'
import { font, lvha, media, palette, underline } from '../../components/common-styles'

const StyledIcon = styled(Icon)`
  color: ${palette('text', 'gray')};
  transition: color .2s ease-in-out;

  :hover {
    color: ${palette('text', 'active')};
  }
`

const ContactIcon = styled(Icon)`
  color: ${palette('text', 'active')};
  margin-right: 18px;
`

const StyledIconWrapper = styled.div`
  left: 0;
  opacity: 0;
  position: absolute;
  top: 0;
  transition: opacity .3s ease-in-out;
  z-index: -1;

  ${({ visible }) => visible
      ? `
        opacity: 1;
        z-index: 1;
      `
      : ''
  }
`

const HiddenCheckboxInput = styled.input`
  left: 3px;
  opacity: 0;
  position: absolute;
  top: 3px;
  z-index: -1;
`

const CheckBox = styled.div`
  align-items: center;
  display: flex;
  margin: 20px 0 40px;
  position: relative;
`

const CheckBoxLabel = styled.label`
  cursor: pointer;
  display: inline-block;
  height: 20px;
  margin-bottom: 2px;
  margin-right: 5px;
  position: relative;
  width: 20px;
`

const fieldStyle = `
  border: none;
  border-bottom: 2px solid ${palette('background', 'midGray')};
  color: ${palette('text', 'gray')};
  font-size: 14px;
  transition: border-bottom-color .2s ease-in-out;
  width: 100%;

  :focus {
    border-bottom-color: ${palette('background', 'active')};
    outline: none;
  }
`

const Input = styled.input`
  ${fieldStyle}
`

const TextArea = styled.textarea`
  ${fieldStyle}
`

const P = styled.p`
  ${font('serif')};
  font-size: 21px;
  line-height: 1.71;
  margin: 50px 0 50px;
  text-align: center;

  ${
    media.desktop`
      margin-top: 50px;
    `
  }
`

const Quote = styled.p`
  ${font('serif')};
  font-size: 18px;
  line-height: 1.43;
  margin: 80px 0 40px;
  position: relative;
  right: 0;
  text-align: center;
  width: 705px;

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

const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  max-width: 700px;
  margin: 0 auto;
  width: 100%;
`

const activeLabel = `
  color: ${palette('text', 'active')};
  font-size: 12px;
  top: -10px;
`

const InputLabel = styled.label`
  color: ${palette('text', 'gray')};
  font-size: 14px;
  left: 0;
  position: absolute;
  top: 12px;
  transition: all .1s ease-in-out;

    input:focus + &,
    textarea:focus + & {
      ${activeLabel}
    }

  ${({ nonEmpty }) => nonEmpty
    ? activeLabel
    : ''
  }
`

const FieldWrapper = styled.div`
  padding: 10px 0 0;
  position: relative;
  width: 100%;
`

const InputWrapper = styled(FieldWrapper)`
  max-width: 300px;
`

const Link = styled.a`
  color: ${palette('text')};

  ${
    lvha`
      color: ${palette('text', 'active')};
    `
  }
`

const UnderlineSpan = styled.span`
  ${underline}
  font-weight: bold;

  :after {
    bottom: 0;
  }
`

const FormRow = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  margin-bottom: 55px;
  width: 100%;
`

const Button = styled.button`
  background-color: ${palette('background', 'active')};
  border-radius: 6px;
  border: 0 solid transparent;
  color: ${palette('text', 'white')};
  cursor: pointer;
  font-size: 14px;
  outline: none;
  padding: 12px 32px;
  transition: background-color .2s ease-in-out;

  :hover {
    background-color: ${lighten(0.15, palette('background', 'active'))};
  }

  ${
    lvha`
      outline: 0;
    `
  }
`

const StyledImage = styled(Img)`
  display: inline-block;
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
      max-width: 25vw;
      top: -130px;
    `
  }

  ${
    media.largeDesktop`
      max-width: 40vw;
    `
  }
`

const Form = styled.form`
  align-items: center;
  display: flex;
  flex-direction: column;
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

const MailLink = styled.a`
  color: ${palette('text', 'gray')};
  font-size: 16px;
  text-decoration: none;
  transition: color .2s ease-in-out;

  ${
    lvha`
      color: ${palette('text', 'gray')};
      text-decoration: none;
    `
  }

  :hover {
    color: ${palette('text', 'active')};
  }
`

const MailWrapper = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  margin-bottom: 70px;
`

const ConsentLabel = styled.label`
  color: ${palette('text', 'gray')};
  font-size: 14px;
`

function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
}

export default class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isValidated: false };
  }

  get consentGenderText () {
    if (!this.state.name) return 'Zapoznałem'

    return `Zapoznał${
      this.state.name
        .split(' ')[0]
        .split('')
        .reverse()[0] === 'a'
          ? 'a'
          : 'e'
    }m`
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.type === 'checkbox'
        ? e.target.checked
        : e.target.value
    })
  }

  handleSubmit = e => {
    e.preventDefault()
    const form = e.target
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": form.getAttribute("name"),
        ...this.state
      })
    })
      .then(() => navigate(form.getAttribute("action")))
      .catch(error => alert(error))
  }

  render() {
    const { data } = this.props;
    return (
      <Layout>
        <Section>
          <StyledImage fluid={ data.image.childImageSharp.fluid } />
          <FormWrapper>
            <P><UnderlineSpan>Napisz</UnderlineSpan> do nas</P>
            <MailWrapper>
              <ContactIcon
                name="mail"
                size="20"
              />
              <MailLink href={`mailto:${data.site.siteMetadata.email}`}>
                { data.site.siteMetadata.email }
              </MailLink>
            </MailWrapper>
            <Form
              name="contact"
              method="post"
              action="/contact/thanks/"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
              onSubmit={this.handleSubmit}
            >
              {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
              <input type="hidden" name="form-name" value="contact" />
              <div hidden>
                <InputLabel>
                  Don’t fill this out:" "
                  <input name="bot-field" onChange={ this.handleChange } />
                </InputLabel>
              </div>
              <FormRow>
                <InputWrapper>
                  <Input
                    type="text"
                    name="name"
                    onChange={ this.handleChange }
                    id="name"
                    required={ true }
                  />
                  <InputLabel
                    htmlFor="name"
                    nonEmpty={ !!this.state.name }
                  >
                    Wpisz imię i nazwisko
                  </InputLabel>
                </InputWrapper>
                <InputWrapper>
                  <Input
                    type="email"
                    name="email"
                    onChange={ this.handleChange }
                    id="email"
                    required={true}
                  />
                  <InputLabel
                    htmlFor="email"
                    nonEmpty={ !!this.state.email }
                  >
                    Podaj adres email
                  </InputLabel>
                </InputWrapper>
              </FormRow>
              <FieldWrapper>
                <TextArea
                  name="message"
                  onChange={ this.handleChange }
                  id="message"
                  required={ true }
                  rows="1"
                />
                <InputLabel
                  htmlFor="message"
                  nonEmpty={ !!this.state.message }
                >
                  Wpisz wiadomość
                </InputLabel>
              </FieldWrapper>
              <CheckBox>
                <CheckBoxLabel htmlFor="consent">
                  <StyledIconWrapper
                    visible={ this.state.consent }
                  >
                    <StyledIcon
                      name="checkbox"
                      size="20"
                    />
                  </StyledIconWrapper>
                  <StyledIconWrapper
                    visible={ !this.state.consent }
                  >
                    <StyledIcon
                      name="square"
                      size="20"
                    />
                  </StyledIconWrapper>
                </CheckBoxLabel>
                <HiddenCheckboxInput
                  id="consent"
                  name="consent"
                  required={ true }
                  type="checkbox"
                  onChange={ this.handleChange }
                />
                <ConsentLabel htmlFor="consent">
                  { this.consentGenderText } się z <Link href="/privacy-policy" target="_blank">Polityką Prywatności</Link>
                </ConsentLabel>
              </CheckBox>
              <Button type="submit">Wyślij wiadomość</Button>
              <RenderOnSize size="desktop">
                <Quote>
                  Jestem przekonana, że niemieckiego może nauczyć się każdy, a ja chętnie pomagam w osiągnięciu tego celu.
                </Quote>
              </RenderOnSize>
            </Form>
          </FormWrapper>
        </Section>
      </Layout>
    );
  }
}

Index.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export const query = graphql`
  query {
    image: file(relativePath: { eq: "contact.png" }) {
      childImageSharp {
        fluid(maxWidth: 300) {
          ...GatsbyImageSharpFluid
        }
      }
    },
    site {
      siteMetadata {
        email,
      }
    }
  }
`
