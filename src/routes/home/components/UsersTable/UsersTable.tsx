import { useContext } from "react";

import UsersContext from "../../../../contexts/UsersContext";
import DataTable, { HeadCell } from "../DataTable";

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

const UsersTable = () => {
  const { users } = useContext(UsersContext);

  return (
    <DataTable
      headCells={headCells}
      rows={users.map(user => ({
        id: user.id,
        name: user.name,
        email: user.email,
        companyName: user.company.name
      }))}
    />
  )
}

export default UsersTable;