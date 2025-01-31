import React, { useContext } from 'react'
import userContext from '../context/UserContext'

function Profile() {


  const {user} = useContext(userContext)

    
    if(!user) {
      return <h1>please login</h1>
    }

    return <h1>hello {user.userName}</h1>

}

export default Profile