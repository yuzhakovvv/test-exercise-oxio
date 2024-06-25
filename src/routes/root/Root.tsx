import { Outlet } from 'react-router-dom';

import NavBar from './components/NavBar';

function Root() {
  return (
    <div>
      <header>
        <NavBar />

        <Outlet />
      </header>
    </div>
  );
}

export default Root;
