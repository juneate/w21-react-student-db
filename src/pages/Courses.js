import React, {useContext} from 'react'
import {Link} from 'react-router-dom'
import styled from 'styled-components'
import Layout from 'containers/Layout'
import UserContext from 'contexts/user'
import FavouriteButton from 'components/FavouriteButton'

const Courses = ({data}) => {

  //const {data} = useContext(UserContext)
  const user = useContext(UserContext).data
  const {toggleFavourite} = useContext(UserContext)
  
  return (
    <Layout>
      <h1>Courses</h1>
      {
        data.map(({slug, name, code, desc}) => 
          <Course key={slug}>
            <h2>
							<Link to={`/course/${slug}`}>{name}</Link>{` `}
							<small>{code}</small>{` `}
              <FavouriteButton onClick={() => toggleFavourite(slug)} favourited={user.favourites.includes(slug)} />
						</h2>
            
            <p>{desc}</p>
          </Course>
        )
      }
    </Layout>
  )
}

// Style the articles and everything in between
// Differentiate between active and non-active
const Course = styled.article`
	background-color: #333;
	padding: 1em;
	margin: 1em 0;
	box-shadow: 0 0 0.5em rgba(0,0,0,0.2);
	border-radius: 0.5em;

	a:hover {
		text-decoration: underline;
	}
`


export default Courses
