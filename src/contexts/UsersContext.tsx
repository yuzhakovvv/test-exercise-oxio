import { createContext, useEffect, useState } from "react";

import { User } from "../types/user";

const UsersContext = createContext<{ users: User[]; addUser: (user: User) => void }>({
  users: [],
  addUser: () => {}
});

export const UsersProvider = ({ children }: { children: React.ReactNode }) => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    const fetchUsers = async () => {
      let users;
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        users = await response.json();
      } catch (error) {
        console.error(error);
      }

      setUsers(users)
    }

    fetchUsers();
  }, []);

  const addUser = (user: User) => {
    setUsers((state) => [
      ...state,
      user
    ]);
  }

  return (
    <UsersContext.Provider value={{ users, addUser }}>
      {children}
    </UsersContext.Provider>
  )
}

export default UsersContext;