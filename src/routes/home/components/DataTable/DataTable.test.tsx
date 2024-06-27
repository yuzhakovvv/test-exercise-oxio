import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import DataTable from './DataTable';

const headCells = [
  { id: 'name', label: 'Name', numeric: false },
  { id: 'age', label: 'Age', numeric: true },
  { id: 'email', label: 'Email', numeric: false },
];

const rows = [
  { id: 1, name: 'John Doe', age: 25, email: 'john.doe@example.com' },
  { id: 2, name: 'Jane Smith', age: 30, email: 'jane.smith@example.com' },
  { id: 3, name: 'Bob Johnson', age: 40, email: 'bob.johnson@example.com' },
];

describe('DataTable', () => {
  test('renders table with correct number of rows and columns', () => {
    render(<DataTable headCells={headCells} rows={rows} />);

    const table = screen.getByRole('table');
    const tableRows = screen.getAllByRole('row');

    expect(table).toBeInTheDocument();
    expect(tableRows).toHaveLength(rows.length + 1); // +1 for table header row
  });

  test('sorts rows correctly when clicking on a table header', () => {
    render(<DataTable headCells={headCells} rows={rows} />);
    const emailHeader = screen.getByText('Email');

    userEvent.click(emailHeader);
    const sortedRows = screen.getAllByRole('row').slice(1);
    expect(sortedRows[0]).toHaveTextContent('Bob Johnson'); // Sorted by email in ascending order
  });
});
