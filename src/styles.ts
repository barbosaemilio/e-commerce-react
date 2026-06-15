import styled, { createGlobalStyle } from 'styled-components'

export const cores = {
  vermelho: '#E66767',
  branco: '#FFEBD9',
  cinza: '#EEEEEE',
  preta: '#111'
}

export const GlobalCss = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Roboto, Mirienda ;
    list-style:none
  }

  html {
  overflow-x: hidden;
}

  body {
  background-color: ${cores.branco};
  padding-top: 40px;
}
`
export const Container = styled.div`
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;
  padding: 0 16px;

  @media (max-width 768px) {
    padding: 0 12px;
  }
`
