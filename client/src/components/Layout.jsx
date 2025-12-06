import { NavLink, useNavigate } from 'react-router-dom';
import logo from '../assets/logo.png';

export default function Layout() {
  const navigate = useNavigate();

  const isLoggedIn = !!localStorage.getItem("token");
  const role = localStorage.getItem("role");
  const isAdmin = role === "admin";


  const handleSignOut = async (e) => {
    e.preventDefault();

    try {
      await fetch("http://localhost:3002/auth/signout", {
        method: "GET",
      });
    } catch (err) {
      console.error("Signout request failed, clearing token anyway", err);
    }

    localStorage.removeItem("token");
    localStorage.removeItem("userEmail");
    localStorage.removeItem("role");

    navigate("/");
  };

  return (
    <>
      <header>
        <div className="logo-brand">
          <img
            src={logo}
            className="g-logo"
            alt="Gardiner logo"
            loading="lazy"
            width={48}
            height={48}
          />

          <span className="brand">Portfolio</span>
        </div>
        <nav>
          <NavLink to="/" end className={({isActive}) => isActive ? "active" : undefined}>Home</NavLink>
          <NavLink to="/about" className={({isActive}) => isActive ? "active" : undefined}>About</NavLink>
          <NavLink to="/education" className={({isActive}) => isActive ? "active" : undefined}>Education</NavLink>
          <NavLink to="/projects" className={({isActive}) => isActive ? "active" : undefined}>Projects</NavLink>
          <NavLink to="/contact" className={({isActive}) => isActive ? "active" : undefined}>Contact</NavLink>
          <NavLink to="/services" className={({isActive}) => isActive ? "active" : undefined}>Services</NavLink>

          {!isLoggedIn ? (
            <>
              <NavLink to="/signup" className={({isActive}) => isActive ? "active" : undefined}>Sign Up</NavLink>
              <NavLink to="/signin" className={({isActive}) => isActive ? "active" : undefined}>Sign In</NavLink>
            </>
          ) : (
            <NavLink
              to="#"
              onClick={handleSignOut}
              className={() => undefined}
            >
              Sign Out
            </NavLink>
          )}
        </nav>
        <br/>
      </header>
    </>
  );
}
