import { Box } from "@mui/material";

import UsersTable from "./components/UsersTable";

function Home() {
  return (
    <div>
      <Box sx={{ m:  { xs: 0, md: 4 } }}>
        <UsersTable />
      </Box>
    </div>
  );
}

export default Home;
