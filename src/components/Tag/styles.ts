import styled from 'styled-components'
import { Cores } from '../../styles'

import { Props } from '.'

export const TagContainer = styled.div<Props>`
  background-color: ${Cores.vermelha};
  color: ${Cores.branca};
  font-size: ${(props) => (props.size === 'big' ? '12px' : '14px')} 14px;
  padding: ${(props) => (props.size === 'big' ? '14px 12px' : '4px 6px')};
  display: inline-block;
  margin-right: 8px;
`
