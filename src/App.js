import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import 'material-design-icons/iconfont/material-icons.css'
import firebase from 'utils/firebase'
import UserContext from 'contexts/user'
import Students from 'pages/Students'
import Student from 'pages/Student'
import FourOhFour from 'pages/FourOhFour'

const App = () => {

  const [studentsAr, setStudentsAr] = useState([])
  const [loading, setLoading] = useState(true)

  // Connect to the DB
  const db = firebase.firestore()

 

  // Runs only once, after the first render
  useEffect(() => {

    setLoading(true) // "Loading..." modal

    // READ: student data
    db.collection(`students`).get().then((snapshot) => {
      /* snapshot.docs.forEach(doc => {
        const record = doc.data()
        //console.log(`FIRESTORE:`, record)
        setStudentsAr([...studentsAr, record])
      }) */


      setStudentsAr(
        // An accumulation of the student records into an Array
        snapshot.docs.reduce((students, doc) => [...students, doc.data()], [])
      )

      setLoading(false)  // Remove loading modal

    })
  }, [])



  // fetch() from the server, this is the result...
  /* const studentsAr = [
    {
      id: 234,
      name: { first: `Tim`, last: `Berners-Lee`, pref: `TBL` },
      gpa: 3.8,
      enrolled: [ `WDDM 113`, `WDDM 114` ],
      photo: `tim-berners-lee.jpg`
    }, {
      id: 256,
      name: { first: `Grace`, last: `Hopper`, pref: `` },
      gpa: 3.9,
      enrolled: [ `WDDM 113`, `WDDM 114`, `WDDM 115` ],
      photo: `grace-hopper.jpg`
    }, {
      id: 263,
      name: { first: `Alan`, last: `Turing`, pref: `` },
      gpa: 2.3,
      enrolled: [],
      photo: `alan-turing.jpg`
    }, {
      id: 264,
      name: { first: `Hello`, last: `World`, pref: `` },
      gpa: 3.3,
      enrolled: [],
      photo: ``
    }, {
      id: 265,
      name: { first: `Hello`, last: `World`, pref: `` },
      gpa: 1.3,
      enrolled: [],
      photo: ``
    }, {
      id: 266,
      name: { first: `Hello`, last: `World`, pref: `` },
      gpa: 3.5,
      enrolled: [],
      photo: ``
    }, {
      id: 267,
      name: { first: `Hello`, last: `World`, pref: `` },
      gpa: 3.9,
      enrolled: [],
      photo: ``
    }, {
      id: 268,
      name: { first: `Hello`, last: `World`, pref: `` },
      gpa: 4,
      enrolled: [],
      photo: ``
    }, {
      id: 269,
      name: { first: `Hello`, last: `World`, pref: `` },
      gpa: 0,
      enrolled: [],
      photo: ``
    }, {
      id: 270,
      name: { first: `Hello`, last: `World`, pref: `` },
      gpa: 2.0,
      enrolled: [],
      photo: ``
    }
  ]  */

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