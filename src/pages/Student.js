import React, {useContext} from 'react'
import {useParams} from 'react-router-dom'
// import UserContext from 'contexts/user'
import Layout from 'containers/Layout'

const Student = () => {

  const {slug} = useParams()
  // const user = useContext(UserContext)

  return (
    <Layout>

      <header>
        <h1 className="heading">Student {slug}</h1>
      </header>

    </Layout>
  )
}

export default Student
