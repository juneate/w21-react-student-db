import React from 'react'
import {Link} from 'react-router-dom'
import Image from 'components/Image'

const StudentRow = ({data}) => {

  const {id, name, gpa, enrolled, photo} = data

  return (
    <li className="student">
      <Image src={photo} alt={`${name.first} ${name.last}`} className="photo" width="32" height="32" />
      <Link to={`/student/${id}`}><b>{name.last}, {name.first} {(name.pref) ? `(${name.pref})` : ``}</b></Link>
      <data value={gpa}>{gpa} GPA</data>
    </li>
  )
}

export default StudentRow