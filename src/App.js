import React from 'react'
import Students from 'pages/Students'

const App = () => {

  // fetch() from the server, this is the result...
  const studentsAr = [
    {
      id: 234,
      name: { first: `Tim`, last: `Berners-Lee`, pref: `TBL` },
      gpa: 3.8,
      enrolled: [ `WDDM 113`, `WDDM 114` ],
      photo: `tim-berners-lee.jpg`
    }, {
      id: 256,
      name: { first: `Grace`, last: `Hopper`, pref: null },
      gpa: 3.9,
      enrolled: [ `WDDM 113`, `WDDM 114`, `WDDM 115` ],
      photo: `grace-hopper.jpg`
    }, {
      id: 263,
      name: { first: `Alan`, last: `Turing`, pref: null },
      gpa: 2.3,
      enrolled: [],
      photo: `alan-turing.jpg`
    }
  ]

  // Generate one StudentRow per object above.

  return (
    <Students data={studentsAr} />
  )
}

export default App