import React from 'react'
import styled from 'styled-components'

const Loading = ({children}) => {
  return (
    <Modal color="#eee"><span className="flash">{children}</span></Modal>
  )
}

/*
<div className="loading flash">
  <span></span>
</div>

.loading.flash {
  
}


<div className="loading">
  <span className="flash"></span>
</div>

.loading .flash {

}

*/

const Modal = styled.div`
  display: grid;
  place-content: center;
  position: fixed;
  z-index: 9999;
  inset: 0; /* top/right/bottom/left */
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0,0.9);
  color: ${({color}) => color || "#fff"};
  font-size: 3em;

  .flash {
    animation: flashing 2s infinite;

    @keyframes flashing {
      0%, 100% {
        opacity: 1;
      }
      50% {
        opacity: 0.2;
      }
    }
  }
`

export default Loading