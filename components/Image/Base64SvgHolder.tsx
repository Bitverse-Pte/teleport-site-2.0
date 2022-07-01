import { Box } from "rebass";
import styled from 'styled-components'

export const Base64SvgHolder = styled(Box)<{ base64String: string }>`
  width: 24px;
  height: 24px;
  background-size: cover;
  background-image: url(data:image/svg+xml;base64,${({ base64String }) => base64String});
`
