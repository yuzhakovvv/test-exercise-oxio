import { useContext, useMemo } from 'react';
import { Box, Typography } from '@mui/material';
import { Chart as ChartJS, ArcElement, Tooltip, Legend, Colors } from 'chart.js';
import { Pie } from 'react-chartjs-2';

import UsersContext from '../../contexts/UsersContext';

ChartJS.register(ArcElement, Tooltip, Legend, Colors);

function Charts() {
  const { users } = useContext(UsersContext);

  const data = useMemo(() => {
    const usersAmountByNameFirstLetter: { [key: string]: number } = {};

    for (const user of users) {
      const nameFirstLetter = user.name[0].toUpperCase();
      const usersAmount = usersAmountByNameFirstLetter[nameFirstLetter] || 0;

      usersAmountByNameFirstLetter[nameFirstLetter] = usersAmount + 1;
    }

    const data = {
      labels: [],
      datasets: [
        {
          label: '# of Users',
          data: [],
          borderWidth: 1,
        },
      ],
    };

    for (const nameFirtLetter in usersAmountByNameFirstLetter) {
      // @ts-ignore
      data.labels.push(nameFirtLetter);
      // @ts-ignore
      data.datasets[0].data.push(usersAmountByNameFirstLetter[nameFirtLetter])
    }

    return data;
  }, [users]);

  return (
    <Box sx={{
      minHeight: '70vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      <Box sx={{ mb: 4 }}>
        <Typography>Users Amount By Name's First Letter</Typography>
      </Box>
      
      <Box
        tabIndex={0}
        aria-label="Chat that displays users amount by name's first letter"
        sx={{ maxHeight: 300, maxWidth: 300 }}
      >
        {data.datasets[0].data.length > 0 && (
          <Pie data={data} options={{
            plugins: {
              legend: {
                position: 'bottom'
              },
            }
          }} />
        )}
      </Box>
    </Box>
  );
}

export default Charts;