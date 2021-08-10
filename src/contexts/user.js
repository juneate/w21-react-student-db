import React, {createContext, useState} from 'react'


export const UserContext = createContext(null)


const UserProvider = ({children}) => {

  const [userData, setUserData] = useState({
    id: 1234,
    username: `juneate`,
    photo: `tim-berners-lee.jpg`,
    favourites: [
      `f21-wddm-114-applied-des-1`
    ]
  })

  const toggleFavourite = (id) => {
    if (userData.favourites.includes(id)) { // Slice out a
      setUserData({...userData, favourites: userData.favourites.filter((fav) => fav !== id)})
    } else { // Add it in
      setUserData({...userData, favourites: [...userData.favourites, id]})
    }
  }

  return (
    <UserContext.Provider value={{data:userData, toggleFavourite:toggleFavourite}}>
      {children}
    </UserContext.Provider>
  )
}



export default UserProvider