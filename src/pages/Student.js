import React from 'react'
import {useParams} from 'react-router-dom'
import Layout from 'components/Layout'

const Student = () => {

  const {slug} = useParams()

  return (
    <Layout>

      <header>
        <h1 className="heading">Student {slug}</h1>
      </header>

    </Layout>
  )
}

export default Student