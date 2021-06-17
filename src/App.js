import React from 'react'
import Layout from 'components/Layout'

const App = () => {
  return (
    <Layout>
      <main className="toplevel-main container">
        <h1 className="heading">Students</h1>

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

          <button type="submit">Apply Filters</button>
        </form>

        <ul id="studentTable" className="records">
          <li class="student">
            <img src="img/student.png" alt="Alan" class="photo" />
            <b>Turing, Alan</b>
            <data value="2.3">2.3 GPA</data>
          </li>
        </ul>

        <p id="numStudents"></p>
      </main>
    </Layout>
  )
}

export default App