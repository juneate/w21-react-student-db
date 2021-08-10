import React from 'react'
import styled from 'styled-components'

const FavouriteButton = ({onClick, favourited}) => {
  return (
    <Favourite onClick={onClick}>
      <span className={`material-icons ${(favourited) && `fav`}`}>favorite</span>
    </Favourite>
  )
}

const Favourite = styled.button`
  padding: 0;
  background: none;
  border: none;
  color: rgba(255,255,255,0.2);
  * {
    vertical-align: bottom;
  }
  .fav {
    color: red;
  }
`

export default FavouriteButton