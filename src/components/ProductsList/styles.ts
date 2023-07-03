import styled from 'styled-components'

import { Props } from '.'
import { Cores } from '../../styles'
import { Card } from '../Product/styles'

export const Container = styled.section<Omit<Props, 'title' | 'games'>>`
  padding: 32px 0;
  background-color: ${(props) =>
    props.background === 'black' ? Cores.branca : Cores.branca};

  ${Card} {
    background-color: ${(props) =>
      props.background === 'black' ? Cores.branca : Cores.branca};
  }
`

export const List = styled.ul`
  display: grid;
  grid-template-columns: 2fr 2fr;
  column-gap: 80px;
  margin-top: 40px;
`

export const Title = styled.h2`
  font-size: 18px;
  font-weight: bold;
`