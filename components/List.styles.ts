import styled from '@emotion/styled'

interface SizeProps {
  width: string
  height: string
}

export const ListStyled = styled.ul`
  background: red;
`
export const TestComponent = styled.div<SizeProps>`
  background: orange;
  width: ${({ width }) => width};
  height: ${({ height }) => height};
`
