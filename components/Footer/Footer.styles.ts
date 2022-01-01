import styled from 'styled-components'
import { themeI } from '../../themes/themeI'

const FooterElement = styled.div`
  /* min-height: 100vh; */
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }: {theme: themeI}) => theme.shade0};
`

export default FooterElement