import styled from '@emotion/styled'

const ContainerDiv = styled.div`
  background: ${(props) => props.theme.color.background};
  color: ${(props) => props.theme.color.text};
  height: 95vh;
`

export default function Home() {
  return (
    <ContainerDiv>
      Home Page
    </ContainerDiv>
  )
}
