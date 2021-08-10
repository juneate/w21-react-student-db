import React, {useState, useContext} from 'react'
import styled from 'styled-components'
import Layout from 'containers/Layout'
import UserContext from 'contexts/user'
// import SearchFilter from 'components/SearchFilter'
import SearchResults from 'containers/SearchResults'

const Students = ({data}) => {


  const userData = useContext(UserContext)
  console.log(userData)

  // {
  //   query: '',
  //   gpa: 0,
  //   courses: [],
  //   sort: (a, b) => a.gpa - b.gpa
  // }

  // ****** FILTER STATES *******
  // The state of each filter
  const [searchState, setSearchState] = useState({
    minGpa: 0.0,
    query: ``,
    courses: [],
    sort: (a, b) => a.gpa - b.gpa
  })

  // For convenience, destructure all of the values into local variables
  const {minGpa, query, courses, sort} = searchState


  // ****** FILTER ******
  // Filter the results into a new array that's the same size or smaller
  const searchResult = data
    .filter(({gpa}) => gpa >= minGpa)
    .filter(({name}) => name.first.toUpperCase().includes(query.toUpperCase()) || 
                        name.last.toUpperCase().includes(query.toUpperCase()) || 
                        name.pref.toUpperCase().includes(query.toUpperCase()))
    .filter(({enrolled}) => courses.length === 0 || 
                        enrolled.filter((course) => courses.includes(course)).length > 0)
    .sort(sort)

  
  // ****** EVENT LISTENERS *******
  // When the GPA value changes....
  const handleGpaChange = (event) => {
    //setMinGpa(Number(event.target.value))

    setSearchState({
      ...searchState,
      minGpa: Number(event.target.value),
    })
  }

  const handleQueryChange = (event) => {
    //setQuery(event.target.value)

    setSearchState({
      ...searchState,
      query: event.target.value
    })
  }

  const handleSortChange = ({target}) => {
    let sorting

    if (target.value === "0") {
      sorting = (a, b) => a.gpa - b.gpa
    } else if (target.value === "1") {
      sorting = (a, b) => b.gpa - a.gpa
    }

    setSearchState({
      ...searchState,
      sort: sorting
    })
  }

  const handleEnrolledChange = ({target}) => {
    // When a check or uncheck a checkbox, add/remove the "value" from the Array

    if (target.checked) {
      setSearchState({
        ...searchState,
        courses: [...searchState.courses, target.value]
      })
    } else {
      setSearchState({
        ...searchState,
        courses: searchState.courses.filter((course) => course !== target.value)
      })
    }
  
  }

  return (
    <Layout>

      <header>
        <h1 className="heading">Students</h1>
      </header>

      {/* <SearchFilter /> will eventually replace this <form> */}
      <Filter name="filtering">
        <h2>Search and filter</h2>
        <fieldset>
          <label htmlFor="filterName">Student Name:</label><br />
          <input type="search" name="search" id="filterName" value={query} onChange={handleQueryChange} className="field search" placeholder="First or last name" autoComplete="off" />
        </fieldset>

        <fieldset>
          <label htmlFor="filterGPA">Minimum GPA:</label><br />
          <input type="range" name="gpa" id="filterGpa" value={minGpa} min="0" max="4" step="0.1" onChange={handleGpaChange} />{` `}
          <output htmlFor="filterGpa">{minGpa.toFixed(1)}</output>
        </fieldset>

        <fieldset id="filterEnrolled" onChange={handleEnrolledChange}>
          <label>Enrolled in:</label><br />
          
          <input type="checkbox" name="enrolled" id="filter113" value="WDDM 113" />{` `}
          <label htmlFor="filter113">WDDM 113</label>

          <input type="checkbox" name="enrolled" id="filter114" value="WDDM 114" />{` `}
          <label htmlFor="filter114">WDDM 114</label>

          <input type="checkbox" name="enrolled" id="filter115" value="WDDM 115" />{` `}
          <label htmlFor="filter115">WDDM 115</label>

          <input type="checkbox" name="enrolled" id="filter116" value="WDDM 116" />{` `}
          <label htmlFor="filter116">WDDM 116</label>
        </fieldset>

        <fieldset>
          Sort by:<br />
          <select name="sort" id="sortBy" className="field dropdown" defaultValue="0" onChange={handleSortChange}>
            <option value="0">gpa, lowest to highest</option>
            <option value="1">gpa, highest to lowest</option>
          </select>
        </fieldset>
      </Filter>

      <SearchResults result={searchResult} />

    </Layout>
  )
}


const Filter = styled.form`
  background-color: rgba(255,255,255,0.2);
  border-radius: 0.5em;
  box-shadow: 0 0 0.5em rgba(0, 0, 0, 0.2);
  padding: 1em;

  input + label {
    margin-right: 1em;
  }
`

export default Students
