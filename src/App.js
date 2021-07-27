import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import 'material-design-icons/iconfont/material-icons.css'
import firebase from 'utils/firebase'
import UserContext from 'contexts/user'
import Students from 'pages/Students'
import Student from 'pages/Student'
import FourOhFour from 'pages/FourOhFour'

const App = () => {

  //const [studentsAr, setStudentsAr] = useState([])
  //const [loading, setLoading] = useState(true)

  const [studentData, setStudentData] = useState({
    studentsAr: [],
    loading: true
  })
  const {studentsAr, loading} = studentData


  // Connect to the DB
  const db = firebase.firestore()

 
  // Runs only once, after the first render
  useEffect(() => {

    setStudentData({
      studentsAr: [...studentsAr],
      loading: true
    })

    // READ: student data
    db.collection(`students`).get().then((snapshot) => {
      setStudentData({
        studentsAr: snapshot.docs.reduce((students, doc) => [...students, doc.data()], []),
        loading: false
      })
    })
  }, [])



  // fetch() my user data, ensure it's on every page
  const userData = {
    id: 1234,
    username: `juneate`,
    photo: `tim-berners-lee.jpg`
  }

  const updateUsername = (name) => {
    // Go update the database
    userData.username = name
    console.log(`App()`, userData)
  }


  // Generate one StudentRow per object above.
  // <Students data={studentsAr} />
  // <Student />


  return (
    <>
    { loading && <div class="loading"><span class="flash">loading...</span></div> }
    <Router>
      <UserContext.Provider value={{data:userData, updateUsername:updateUsername}}>
        <Switch>
          <Route exact path="/"><Students data={studentsAr} /></Route>
          <Route path="/student/:slug"><Student /></Route>
          
          <Route path="*"><FourOhFour /></Route>
          {/* <Route path="/404"><FourOhFour /></Route>
          <Redirect to="/404" /> */}
        </Switch>
      </UserContext.Provider>
    </Router>
    </>
  )
}

export default App