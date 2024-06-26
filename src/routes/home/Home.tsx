import { Box, Button } from "@mui/material";

import UsersTable from "./components/UsersTable";
import AddUserModal from "./components/AddUserModal";
import { useState } from "react";

function Home() {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Box sx={{ m:  { xs: 0, md: 4 } }}>
        <Button
          variant="outlined"
          onClick={handleOpen}
          sx={{ my: 1 }}
        >
          Add User
        </Button>

        <UsersTable />

        <AddUserModal open={open} handleClose={handleClose} />
      </Box>
    </div>
  );
}

export default Home;
