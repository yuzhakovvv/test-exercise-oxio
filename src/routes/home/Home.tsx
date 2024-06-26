import { useEffect, useState } from "react";
import { Box } from "@mui/material";
import DataTable, { HeadCell } from "./components/DataTable";

type User = {
  id: number,
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    }
  }
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  }
};

const headCells: HeadCell[] = [
  {
    id: 'id',
    numeric: true,
    label: 'ID',
  },
  {
    id: 'name',
    numeric: false,
    label: 'Name',
  },
  {
    id: 'email',
    numeric: false,
    label: 'Email',
  },
  {
    id: 'companyName',
    numeric: false,
    label: 'Company Name',
  },
];

function Home() {
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

  return (
    <div>
      <Box sx={{ m:  { xs: 0, md: 4 } }}>
        <DataTable
          headCells={headCells}
          rows={users.map(user => ({
            id: user.id,
            name: user.name,
            email: user.email,
            companyName: user.company.name
          }))}
        />
      </Box>
    </div>
  );
}

export default Home;
