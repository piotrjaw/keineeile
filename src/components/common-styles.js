export const SCREEN_WIDTHS = {
  largeDesktop: 1200,
  desktop: 992,
  tablet: 768,
  phone: 576,
}

export const font = (fontName) => {
  switch (fontName) {
    case 'serif':
      return 'font-family: Lora';
    case 'sans':
    default:
      return 'font-family: Nunito';
  }
}

export const lvha = (...contents) => `
  :link,
  :visited,
  :hover,
  :active {
    ${
      typeof contents[0] === 'string' && arguments.length === 1
        ? arguments[0]
        : String.raw(...contents)
    }
  }
`

const palettes = {
  background: {
    active: '#ecbc0d',
    darkGray: '#555555',
    gray: '#77777e',
    lightGray: '#ecf0f0',
    mint: '#b4d3d3',
    teal: '#96cfcf',
    white: '#fff',
  },
  text: {
    active: '#ecbc0d',
    darkGray: '#555555',
    default: '#1a1a1d',
    gray: '#77777e',
  },
}

export const palette = (paletteName, shadeName = 'default') => palettes[paletteName][shadeName]

export const media = Object.keys(SCREEN_WIDTHS)
  .reduce((acc, label) => {
    acc[label] = (...contents) => `
      @media (min-width: ${SCREEN_WIDTHS[label]}px) {
        ${
          typeof contents[0] === 'string' && arguments.length === 1
            ? arguments[0]
            : String.raw(...contents)
        }
      }
    `

    return acc;
  }, {})

  export const underline = `
    position: relative;

    :after {
      background-color: ${palette('background', 'active')};
      bottom: 7px;
      content: '';
      display: block;
      height: 8px;
      left: -5px;
      position: absolute;
      width: calc(100% + 10px);
      z-index: -1;
    }
  `
