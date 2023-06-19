// Style your elements here
// Style your elements here
import styled from 'styled-components'

export const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-image: linear-gradient(to bottom, #161617, #0b0c1e, #3c2940);
`

export const ImageAndTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Image = styled.img`
  width: 96px;
`

export const DisplayText = styled.p`
  color: #e2e8f0;
  font-size: 16px;
  font-family: 'Roboto';
  margin-top: 24px;
  margin-bottom: 90px;
  line-height: 1.2;

  @media screen and (min-width: 768px) {
    font-size: 24px;
    margin-bottom: 68px;
    line-height: 1.5;
  }
`

export const Button = styled.button`
  color: #ffffff;
  background-color: #06b6d4;
  font-family: 'Roboto';
  font-size: 16px;
  font-weight: 500;
  border: none;
  border-radius: 12px;
  margin-top: 90px;
  padding-top: 12px;
  padding-bottom: 12px;
  padding-right: 24px;
  padding-left: 24px;
  cursor: pointer;
  outline: none;
  line-height: 1.33;

  @media screen and (min-width: 768px) {
    margin-top: 68px;
  }
`
