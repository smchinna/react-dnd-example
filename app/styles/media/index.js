import { css } from 'styled-components'
 
export const media = {
  phone: (...args) => css`@media (max-width: 420px) { ${ css(...args) } }`,
  tablet: (...args) => css`@media (min-width: 421px) { ${ css(...args) } }`,
}