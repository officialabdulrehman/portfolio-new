import styled from 'styled-components'

const MainLayoutElement = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.primary1};
`

export default MainLayoutElement