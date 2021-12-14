import styled from 'styled-components'

const FooterElement = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.primary};
`

export default FooterElement