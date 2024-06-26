import { Outlet } from 'react-router-dom';

import { UsersProvider } from '../../contexts/UsersContext';
import NavBar from './components/NavBar';

function Root() {
  return (
    <div>
      <header>
        <NavBar />

        <UsersProvider>
          <Outlet />
        </UsersProvider>
      </header>
    </div>
  );
}

export default Root;
