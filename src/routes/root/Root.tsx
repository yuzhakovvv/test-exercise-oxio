import { NavLink, Outlet } from 'react-router-dom';
import './Root.css';

function Root() {
  return (
    <div className="root">
      <header className="root-header">
        <NavLink
          to="/home"
        >
          Home
        </NavLink>
        <NavLink
          to="/charts"
        >
          Charts
        </NavLink>

        <Outlet />
      </header>
    </div>
  );
}

export default Root;
