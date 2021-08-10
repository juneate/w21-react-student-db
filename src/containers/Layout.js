import React from 'react'
import styled, { css } from 'styled-components'
import Header from 'containers/Header'
import Footer from 'containers/Footer'

const Layout = ({children}) => {

  return (
    <div className="layout">
      <HeaderRoot />
      
      <Main className="container">
        {children}
      </Main>

      <FooterRoot />
    </div>
  )
}


const topLevel = css`
  display: flow-root;
  background-color: #333;
  color: #fff;
`

const HeaderRoot = styled(Header)`
  ${topLevel}
`

const FooterRoot = styled(Footer)`
  ${topLevel}
`

const Main = styled.main`
  flex-grow: 1;
`

export default Layout
