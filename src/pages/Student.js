import React, {useContext} from 'react'
import {useParams} from 'react-router-dom'
import UserContext from 'contexts/user'
import Layout from 'components/Layout'

const Student = () => {

  const {slug} = useParams()
  const user = useContext(UserContext)

  console.log(user.data)
  user.updateUsername(`roccop`)

  return (
    <Layout>

      <header>
        <h1 className="heading">Student {slug}</h1>
      </header>

    </Layout>
  )
}

export default Student