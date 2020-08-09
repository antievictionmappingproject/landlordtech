import { css } from 'styled-components'

const sizes = {
  mobileSmall: 650,
  mobileLarge: 768,
  padLandscape: 1024
}
export default Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
      @media (max-width: ${sizes[label]}px) {
         ${css(...args)};
      }
   `
  return acc
}, {})