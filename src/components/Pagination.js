import React from 'react'
import styled from 'styled-components'

const Pagination = ({page, perPage, totalNum, label, setPage}) => {

  // WARNING: There are a ton of redundancies here, revisit!
  const totalPages = Math.ceil(totalNum / perPage)
  const startRow = (page - 1) * perPage
  const endRow = startRow + perPage

  const updatePage = (page) => {
    if (page < 0) 
      setPage(1)
    else if (page > totalPages) 
      setPage(totalPages)
    else 
      setPage(page)
  }

  return (
    <Pages>
      <button onClick={()=> updatePage(page-1)} disabled={(page === 1 )?`disabled`:``}>
        <span className="material-icons">navigate_before</span>
      </button>
      <span>Showing {label} {startRow + 1} to {Math.min(endRow, totalNum)} of {totalNum}</span>
      <button onClick={()=> updatePage(page+1)} disabled={(page === totalPages )?`disabled`:``} >
        <span className="material-icons">navigate_next</span>
      </button>
    </Pages>
  )
}


const Pages = styled.div`
  display: flex;
  gap: 1em;
  justify-content: center;
  align-items: center;
`

export default Pagination