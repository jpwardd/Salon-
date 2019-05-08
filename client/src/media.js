import { css } from 'styled-components'

const maxSizes = {
  desktop: 2000,
  tablet: 768,
  phone: 576,
}



export const media = Object.keys(maxSizes).reduce((acc, label) => {
  acc[label] = (...args) => css `
    @media (max-width: ${maxSizes[label] / 16}em) {
      ${css(...args)}
    }
  `
  return acc
}, {})
