import { useContext } from "react";
import { AuthContext } from "./components/AuthContext";
import AppNavbar from "./components/AppNavBar";

function App() {
  const { isLoggedIn, user, login, logout } = useContext(AuthContext);

  return (
    <>
      <AppNavbar
        isLoggedIn={isLoggedIn}
        user={user}
        login={login}
        logout={logout}
      />
    </>
  );
}

export default App;
