import React from 'react'
import Header from 'components/Header'
import Footer from 'components/Footer'

const Layout = ({children}) => {

  return (
    <div className="layout">
      <Header />
      
      <main className="toplevel-main container">
        {children}
      </main>

      <Footer />
    </div>
  )
}

export default Layout