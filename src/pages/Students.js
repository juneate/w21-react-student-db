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

  // The minimum GPA to filter by
  const [minGpa, setMinGpa] = useState(3.0)
  
  // Filter the results into a new array that's the same size or smaller
  const searchResult = data.filter((student) => student.gpa >= minGpa)


  return (
    <Layout>
      
      <header>
        <h1 className="heading">Students</h1>
        <p>Students with a GPA greater than {minGpa.toFixed(1)}</p>
      </header>

      <form className="filtering" name="filtering">
        <fieldset>
          <label htmlFor="filterName">Student Name:</label>
          <input type="search" name="search" id="filterName" className="field search" placeholder="First or last name" autocomplete="off" />
        </fieldset>

        <fieldset className="slider">
          <label htmlFor="filterGPA">Minimum GPA:</label>
          <input type="range" name="gpa" id="filterGpa" value="0" min="0" max="4" step="0.1" />
          <output htmlFor="filterGpa">0.0</output>
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

        <select name="sort" id="sortBy" className="field dropdown">
          <option value="0" selected>gpa, lowest to highest</option>
          <option value="1">gpa, highest to lowest</option>
        </select>
      </form>

      <SearchResults result={searchResult} />

    </Layout>
  )
}

export default Students