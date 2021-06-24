import React, {useState} from 'react'
import Layout from 'components/Layout'
// import SearchFilter from 'components/SearchFilter'
import SearchResults from 'components/SearchResults'

const Students = ({data}) => {

  // {
  //   query: '',
  //   gpa: 0,
  //   courses: [],
  //   sort: (a, b) => a.gpa - b.gpa
  // }

  // ****** FILTER STATES *******
  // The state of each filter
  const [minGpa, setMinGpa] = useState(0.0)
  const [query, setQuery] = useState(``)


  // ****** FILTER ******
  // Filter the results into a new array that's the same size or smaller
  const searchResult = data
    .filter(({gpa}) => gpa >= minGpa)
    .filter(({name}) => name.first.toUpperCase().includes(query.toUpperCase()) || 
                        name.last.toUpperCase().includes(query.toUpperCase()) || 
                        name.pref.toUpperCase().includes(query.toUpperCase()))

  
  // ****** EVENT LISTENERS *******
  // When the GPA value changes....
  const handleGpaChange = (event) => {
    setMinGpa(Number(event.target.value))
  }

  const handleQueryChange = (event) => {
    setQuery(event.target.value)
  }


  return (
    <Layout>

      <header>
        <h1 className="heading">Grades</h1>
      </header>

      {/* <SearchFilter /> will eventually replace this <form> */}
      <form className="filtering" name="filtering">
        <fieldset>
          <label htmlFor="filterName">Student Name:</label>
          <input type="search" name="search" id="filterName" value={query} onChange={handleQueryChange} className="field search" placeholder="First or last name" autoComplete="off" />
        </fieldset>

        <fieldset className="slider">
          <label htmlFor="filterGPA">Minimum GPA:</label>
          <input type="range" name="gpa" id="filterGpa" value={minGpa} min="0" max="4" step="0.1" onChange={handleGpaChange} />
          <output htmlFor="filterGpa">{minGpa.toFixed(1)}</output>
        </fieldset>

        <fieldset id="filterEnrolled">
          <p>Enrolled in:</p>
          
          <input type="checkbox" name="enrolled" id="filter113" value="WDDM 113" />
          <label htmlFor="filter113">WDDM 113</label>

          <input type="checkbox" name="enrolled" id="filter114" value="WDDM 114" />
          <label htmlFor="filter114">WDDM 114</label>

          <input type="checkbox" name="enrolled" id="filter115" value="WDDM 115" />
          <label htmlFor="filter115">WDDM 115</label>
        </fieldset>

        <select name="sort" id="sortBy" className="field dropdown" defaultValue="0">
          <option value="0">gpa, lowest to highest</option>
          <option value="1">gpa, highest to lowest</option>
        </select>
      </form>

      <SearchResults result={searchResult} />

    </Layout>
  )
}

export default Students