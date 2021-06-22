import React from 'react'
import Layout from 'components/Layout'
import SearchFilter from 'components/SearchFilter'
import SearchResults from 'components/SearchResults'

const Students = ({data}) => {
  return (
    <Layout>
      
      <header>
        <h1 className="heading">Students</h1>
      </header>

      <SearchFilter />

      <SearchResults result={data} />

    </Layout>
  )
}

export default Students