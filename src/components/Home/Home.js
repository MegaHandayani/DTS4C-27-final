import { useNavigate } from "react-router-dom";
import { signingOut } from "../utils/firebase/SignOut";

export const Home = () => {
  // protected route
  const navigate = useNavigate();

  const signOut = async () => {
    // localStorage.removeItem("access_token");
    const loggedOut = await signingOut();
    if (!loggedOut.message) {
      navigate("/SignUp");
    }
  };

  return (
    <div>
      <h1>HOME</h1>
      <button onClick={signOut}>SIGN OUT</button>
    </div>
  );
};
