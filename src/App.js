import React from 'react'
import Students from 'pages/Students'

const App = () => {

  const studentsAr = [
    {
      id: 234,
      name: { first: `Tim`, last: `Berners-Lee` },
      gpa: 3.8,
      enrolled: [ `WDDM 113`, `WDDM 114` ],
      photo: `tim-berners-lee.jpg`
    }, {
      id: 256,
      name: { first: `Grace`, last: `Hopper` },
      gpa: 3.9,
      enrolled: [ `WDDM 113`, `WDDM 114`, `WDDM 115` ],
      photo: `grace-hopper.jpg`
    }, {
      id: 263,
      name: { first: `Alan`, last: `Turing` },
      gpa: 2.3,
      enrolled: [],
      photo: `alan-turing.jpg`
    }
  ]

  // Generate one StudentRow per object above.

  return (
    <Students />
  )
}

export default App