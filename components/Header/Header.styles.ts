import styled from 'styled-components'

const HeaderElement = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.primary};
`

export default HeaderElement