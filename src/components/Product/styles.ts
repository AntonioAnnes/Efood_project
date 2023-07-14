import styled from 'styled-components'
import { Cores } from '../../styles'
import { TagContainer } from '../Tag/styles'

export const Card = styled.div`
  background-color: ${Cores.branca};
  border-radius: 8px;
  padding: 8px;
  position: relative;

  ${TagContainer} {
    margin-right: 8px;
  }
`

export const Titulo = styled.h3`
  font-weight: bold;
  font-size: 18px;
  display: block;
  margin-top: 8px;
  margin-bottom: 8px;
  margin-left: 8px;
`

export const Descricao = styled.p`
  font-size: 14px;
  line-height: 22px;
  display: block;
  margin-top: 16px;
  margin-left: 8px;
`
export const Infos = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
`
export const ContainerRating = styled.div`
  // position: relative;
  display: flex;
`
export const Rating = styled.h3`
  font-size: 18px;
  margin-right: 8px;
  margin-left: 8px;
`
export const RatingDiv = styled.div`
  display: flex;
  justify-content: space-between;
`
export const DivBorder = styled.div`
  margin-top: -5px;
  border: 1px solid #e66767;
`
