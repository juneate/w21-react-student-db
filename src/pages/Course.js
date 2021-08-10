import React, {useContext, useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import Layout from 'containers/Layout'
import CoursesContext from 'contexts/courses'
import firebase from 'utils/firebase'

const Course = () => {

  const {slug} = useParams()
  const courses = useContext(CoursesContext)  
  const {name, code, desc} = courses.find(course => course.slug === slug)


  return (
    <Layout>
      <h1>{name} <small>{code}</small></h1>
      <p>{desc}</p>
    </Layout>
  )
}

export default Course
