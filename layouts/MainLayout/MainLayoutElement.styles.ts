import styled from 'styled-components'
import { themeI } from '../../themes/themeI'

const MainLayoutElement = styled.div`
  /* min-height: 100vh; */
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }: {theme: themeI}) => theme.shade2};
`

export default MainLayoutElement
