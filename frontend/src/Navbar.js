import { Link, useMatch, useResolvedPath } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <nav>
        <Link to="/">
          <h2>Dashboard</h2>
        </Link>
        <ul>
          <CustomLink to="/register" name="Register">
            Register
          </CustomLink>
          <CustomLink to="/login" name="Login">
            Login
          </CustomLink>
          <CustomLink to="/reservation" name="Reservation">
            Reservation
          </CustomLink>
          <CustomLink to="/createMeal" name="Create Meal">
            createMeal
          </CustomLink>
        </ul>
      </nav>
    </div>
  );
}

function CustomLink({ to, child, name, ...props }) {
  const path = useResolvedPath(to);
  const matchedPath = useMatch({ path: path.pathname, end: true });
  return (
    <li className={matchedPath ? "active" : ""}>
      <Link to={to} {...props}>
        {child} {name}
      </Link>
    </li>
  );
}

export default Navbar;
