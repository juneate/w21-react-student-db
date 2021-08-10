import React, {useState, useEffect} from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import 'material-design-icons/iconfont/material-icons.css'
import firebase from 'utils/firebase'
import UserContext from 'contexts/user'
import CoursesContext from 'contexts/courses'
import Loading from 'components/Loading'
import Dashboard from 'pages/Dashboard'
import Courses from 'pages/Courses'
import Course from 'pages/Course'
import Lesson from 'pages/Lesson'
import Students from 'pages/Students'
import Student from 'pages/Student'
import FourOhFour from 'pages/FourOhFour'

const App = () => {

  const [loading, setLoading] = useState(true)

  // fetch() my user data, ensure it's on every page
  const [userData, setUserData] = useState({
    id: 1234,
    username: `juneate`,
    photo: `tim-berners-lee.jpg`,
    favourites: [
      `f21-wddm-114-applied-des-1`
    ]
  })
  const [studentsData, setStudentsData] = useState([])
  const [coursesData, setCoursesData] = useState([])


  // Connect to the DB
  const db = firebase.firestore()
 
  // Runs only once, after the first render
  useEffect(() => {
    const loadData = async () => {

      console.log(`Loading...`)
      setLoading(true)
      
      await db.collection(`courses`).get().then((snapshot) => {
        // setCoursesData(snapshot.docs.reduce((courses, doc) => [...courses, doc.data()], []))
        setCoursesData(snapshot.docs.map(doc => doc.data()))
      })
      
      await db.collection(`students`).get().then((snapshot) => {
        //setStudentsData(snapshot.docs.reduce((students, doc) => [...students, doc.data()], []))
        setStudentsData(snapshot.docs.map(doc => doc.data()))
      })
      
      setLoading(false)
    }
    
    loadData()
  }, [])


  
  const toggleFavourite = (id) => {
    console.log(id)
    if (userData.favourites.includes(id)) {
      // Slice out a
      setUserData({...userData, favourites: userData.favourites.filter((fav) => fav !== id)})
    } else {
      // Add it in
      setUserData({...userData, favourites: [...userData.favourites, id]})
    }
  }


  if (loading)
   return <Loading>Loading...</Loading>

  return (
    <>      
      <Router>
        <UserContext.Provider value={{data:userData, toggleFavourite:toggleFavourite}}>
          <Switch>
            <Route exact path="/"><Dashboard /></Route>
            <Route path="/courses"><Courses data={coursesData} /></Route>
            <Route path="/course/:slug">
              <CoursesContext.Provider value={coursesData}>
                <Course />
              </CoursesContext.Provider>
            </Route>
            <Route path="/lesson"><Lesson /></Route>
            <Route path="/students"><Students data={studentsData} /></Route>
            <Route path="/student/:slug"><Student /></Route>
            <Route path="*"><FourOhFour /></Route>
          </Switch>
        </UserContext.Provider>
      </Router>
    </>
  )
}

export default App
