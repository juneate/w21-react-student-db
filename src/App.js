import React, {useState, useEffect} from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import 'material-design-icons/iconfont/material-icons.css'
import firebase from 'utils/firebase'
import UserProvider from 'contexts/user'
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


  

  if (loading)
    return <Loading>Loading...</Loading>

  return (
    <>      
      <Router>
        <UserProvider>
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
        </UserProvider>
      </Router>
    </>
  )
}

export default App
