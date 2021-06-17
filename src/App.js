import React from 'react'

const App = () => {
  return (
    <div className="layout">
      <header className="toplevel-header">
        <div className="container">
          <h1>Student Database</h1>
        </div>
      </header>
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
 
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis harum doloribus laboriosam et modi distinctio, reiciendis fuga eum debitis illum excepturi repellat blanditiis illo consectetur ut laudantium iusto adipisci explicabo.</p>
        <p>Fuga maiores qui recusandae corrupti minus, molestias ea laborum odio laboriosam sapiente molestiae placeat totam voluptatem amet enim nulla iste repellendus cupiditate velit, neque cumque pariatur soluta. Provident, ducimus repudiandae!</p>
        <p>Est officiis placeat qui quisquam! Perspiciatis qui optio distinctio incidunt dolore rem, architecto blanditiis, eaque saepe voluptas culpa quisquam iste delectus debitis aliquam quasi eum aperiam perferendis facilis eveniet dolorum.</p>
        <p>Debitis inventore ea dicta in aperiam laboriosam molestiae accusamus voluptate quos atque vel non voluptas saepe nam libero earum deleniti culpa maiores sed eveniet repudiandae dolore, iste magnam? Repellendus, laborum.</p>
        <p>Nam aperiam velit, quos aliquam mollitia nostrum qui quis dolore nihil vero fugit sed enim fuga corporis eos error quia maiores labore corrupti voluptatem saepe sit amet. In, quam iusto!</p>


        <p id="numStudents"></p>
      </main>
      <footer className="toplevel-footer">
        <div className="container">
          <p>Copyright {(new Date()).getFullYear()}<sup>&copy;</sup></p>
          {/* Social media icons/links */}
          {/* Copyright/terms/legal */}
          {/* Sitemap/links */}
        </div>
      </footer>
    </div>
  )
}

export default App