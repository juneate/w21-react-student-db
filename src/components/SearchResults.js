import React, {useState} from 'react'
import StudentRow from 'components/StudentRow'
import { Pagination } from 'antd'
import 'antd/dist/antd.css'

const SearchResults = ({result}) => {
  
  const [currPage, setCurrPage] = useState(1)
  const pageSize = 3

  const startRow = (currPage - 1) * pageSize
  const endRow = startRow + pageSize
  const totalPages = Math.ceil(result.length / pageSize)

  // Page   Start   End (not inclusive)
  //  1       0      3
  //  2       3      6
  //  3       6      9
  //  4       9      ...

  const theStudents = result.slice(startRow,endRow).map((student) => <StudentRow key={student.id} data={student} />)

  // (currPage - 1) * pageSize
  // 1: (1 - 1) * 3 = 0
  // 2: (2 - 1) * 3 = 3
  // 3: (3 - 1) * 3 = 6
  // 4: (4 - 1) * 3 = 9

  const updatePage = (page) => {
    if (page < 0) 
      setCurrPage(1)
    else if (page > totalPages) 
      setCurrPage(totalPages)
    else 
      setCurrPage(page)
  }


  return (
    <div style={{backgroundColor: 'lightsteelblue', padding: `1em`}}>
      <ul id="studentTable" className="records" style={{backgroundColor: `salmon`, padding: `1em`}}>
        {theStudents}
      </ul>

      <p id="numStudents" style={{backgroundColor: `lightgreen`}}>
        <button onClick={()=> updatePage(currPage-1)} disabled={(currPage === 1 )?`disabled`:``}>prev</button>
        Showing {(theStudents.length === 1) ? `student` : `students`} {startRow + 1} to {Math.min(endRow, result.length)} of {result.length}
        <button onClick={()=> updatePage(currPage+1)} disabled={(currPage === totalPages )?`disabled`:``} >next</button>
      </p>

      <Pagination defaultCurrent={currPage} total={result.length} defaultPageSize={pageSize} onChange={(page) => setCurrPage(page)} />
    </div>
  )
}

export default SearchResults