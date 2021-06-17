import React from 'react'

const Footer = () => {
  return (
    <footer className="toplevel-footer">
      <div className="container">
        <p>Copyright {(new Date()).getFullYear()}<sup>&copy;</sup></p>
        {/* Social media icons/links */}
        {/* Copyright/terms/legal */}
        {/* Sitemap/links */}
      </div>
    </footer>
  )
}

export default Footer