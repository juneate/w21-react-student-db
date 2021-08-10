import React from 'react'
import {Link} from 'react-router-dom'
import styled from 'styled-components'
import Image from 'components/Image'

const StudentRow = ({data}) => {

  const {id, name, gpa, enrolled, photo} = data

  return (
    <Row className="student">
      <Image src={photo} alt={`${name.first} ${name.last}`} className="photo" width="32" height="32" />
      <Link to={`/student/${id}`}><b>{name.last}, {name.first} {(name.pref) ? `(${name.pref})` : ``}</b></Link>
      <data value={gpa}>{gpa} GPA</data>
    </Row>
  )
}


const Row = styled.li`
  display: grid;
  grid-template-columns: auto auto 1fr;
  grid-gap: 1em;
  padding: 0.5em;
  margin: 0.5em 0;
  position: relative;
  align-items: center;
  
  &::after:not(:last-child) {
    content: "";
    display: block;
    position: absolute;
    bottom: 0;
    left: 0.5em;
    width: calc(100% - 1em);
    height: 1px;
    background-color: rgba(0,0,0,0.8);
  }
  

  data {
    text-align: right;
  }
`

export default StudentRow