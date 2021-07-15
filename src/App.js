import React from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import 'material-design-icons/iconfont/material-icons.css'
import UserContext from 'contexts/user'
import Students from 'pages/Students'
import Student from 'pages/Student'
import FourOhFour from 'pages/FourOhFour'

const App = () => {

  // fetch() from the server, this is the result...
  const studentsAr = [
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
  ] 

  // fetch() my user data, ensure it's on every page
  const userData = {
    id: 1234,
    username: `juneate`,
    photo: `tim-berners-lee.jpg`
  }



  // Generate one StudentRow per object above.
  // <Students data={studentsAr} />
  // <Student />


  return (
    <UserContext.Provider value={userData}>
      <Router>
        <Switch>
          <Route exact path="/"><Students data={studentsAr} /></Route>
          <Route path="/student/:slug"><Student /></Route>
          
          <Route path="*"><FourOhFour /></Route>
          {/* <Route path="/404"><FourOhFour /></Route>
          <Redirect to="/404" /> */}
        </Switch>
      </Router>
    </UserContext.Provider>
  )
}

export default App