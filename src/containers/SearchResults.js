import React, {useState, useEffect} from 'react'
import StudentRow from 'components/StudentRow'
import styled from 'styled-components'
import Pagination from 'components/Pagination'
// import { Pagination } from 'antd'
// import 'antd/dist/antd.css'

const SearchResults = ({result}) => {
  
  // When the filters change, this value has to be updated if the filter results in less students than the page we're on
  const [currPage, setCurrPage] = useState(1)
  
  const pageSize = 10
  const startRow = (currPage - 1) * pageSize
  const endRow = startRow + pageSize

  const theStudents = result.slice(startRow, endRow).map((student) => <StudentRow key={student.id} data={student} />)
  // useEffect(() => {
  

  // }, [currPage])

  return (
    <Results>
      <Records id="studentTable" className="records">
        {(theStudents.length) ? theStudents : `No matching students`}
      </Records>

      <Pagination page={currPage} perPage={pageSize} totalNum={result.length} label={(theStudents.length === 1) ? `student` : `students`} setPage={setCurrPage} />

      {/* <Pagination current={currPage} total={result.length} defaultPageSize={pageSize} onChange={(page) => setCurrPage(page)} /> */}
    </Results>
  )
}

const Results = styled.div`

`
const Records = styled.ul`
  background-color: rgba(255,255,255, 0.1);
  border-radius: 0.5em;
  padding-left: 0;
  list-style-type: none;
`




export default SearchResults