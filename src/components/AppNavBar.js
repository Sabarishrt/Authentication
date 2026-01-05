const AppNavbar = ({ isLoggedIn, user, login, logout }) => {
  return (
    <nav className="navbar navbar-dark bg-dark">
      <div className="container">
        <span className="navbar-brand">Auth Demo</span>

        {isLoggedIn ? (
          <>
            <span className="text-white me-3">
              Welcome, {user.name}
            </span>
            <button className="btn btn-outline-light" onClick={logout}>
              Logout
            </button>
          </>
        ) : (
          <button className="btn btn-outline-light" onClick={login}>
            Login
          </button>
        )}
      </div>
    </nav>
  );
};

export default AppNavbar;
