import { Navigate, NavLink, Outlet } from "react-router-dom";

import { useAuth } from "../store/auth";

export const AdminLayout = () => {
  const { loading, user,isLoggedIn } = useAuth();

  if (loading&&isLoggedIn) {
    return <h1>Loading...</h1>;
  }

  if (!user.isAdmin) {
    return <Navigate to="/" />;
  }
  return (
    <>
      <header>
        <div className="admin-nav" >
          <nav>
            <ul>
              <li>
                <NavLink to="/admin/users">users</NavLink>
              </li>
              <li>
                <NavLink to="/admin/contacts">contacts</NavLink>
              </li>
              <li>
                <NavLink to="/service">service</NavLink>
              </li>
              <li>
                <NavLink to="/">home</NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <Outlet />
    </>
  );
};
