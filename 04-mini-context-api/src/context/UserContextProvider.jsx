import userContext from "./UserContext";
import { useState } from "react";
import propTypes from 'prop-types'


const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  return (

    // wrap the div with contextName.Provider
    // now the values passed to it can be accessed in other components
    <userContext.Provider value={{ user, setUser }}>
      {children}
    </userContext.Provider>
  );
};

UserContextProvider.propTypes = {
  children: propTypes.node.isRequired,
};



export default UserContextProvider;
