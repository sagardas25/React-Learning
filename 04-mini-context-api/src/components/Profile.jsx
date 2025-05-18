import { useContext } from "react";
import userContext from "../context/UserContext";

function Profile() {
  // fetching the variable from context api
  const { user } = useContext(userContext);

  if (!user) {
    return <h1>please login</h1>;
  }

  // showing the vlaue fetched from api to frontend
  return <h1>hello {user.userName} - {user.email} - {user.password}</h1>;
}

export default Profile;
