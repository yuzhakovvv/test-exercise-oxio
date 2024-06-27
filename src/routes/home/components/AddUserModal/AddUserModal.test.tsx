
import { render, screen, fireEvent, act } from '@testing-library/react';
import AddUserModal from './AddUserModal';

describe('AddUserModal', () => {
  test('renders modal', () => {
    render(<AddUserModal open={true} handleClose={() => {}} />);
    
    const dialogTitle = screen.getByText('Add User');
    expect(dialogTitle).toBeInTheDocument();
    
    const nameInput = screen.getByTestId('add-user-name-input');
    expect(nameInput).toBeInTheDocument();
    
    const emailInput = screen.getByTestId('add-user-email-input');
    expect(emailInput).toBeInTheDocument();
    
    const companyNameInput = screen.getByTestId('add-user-company-name-input');
    expect(companyNameInput).toBeInTheDocument();
    
    const cancelButton = screen.getByRole('button', { name: 'Cancel' });
    expect(cancelButton).toBeInTheDocument();
    
    const submitButton = screen.getByRole('button', { name: 'Submit' });
    expect(submitButton).toBeInTheDocument();
  });

  test('calls handleClose when Cancel button is clicked', () => {
    const handleClose = jest.fn();
    render(<AddUserModal open={true} handleClose={handleClose} />);
    
    const cancelButton = screen.getByRole('button', { name: 'Cancel' });
    fireEvent.click(cancelButton);
    
    expect(handleClose).toHaveBeenCalledTimes(1);
  });

  test('calls onSubmit when data is entered and Submit button is clicked', async () => {
    const handleSubmit = jest.fn();
    render(<AddUserModal open={true} handleClose={() => {}} />);

    screen.getByTestId("add-user-form").onsubmit = handleSubmit;
    
    const nameInput = screen.getByTestId('add-user-name-input');
    fireEvent.change(nameInput, { target: { value: 'John Doe' }})
    
    const emailInput = screen.getByTestId('add-user-email-input');
    fireEvent.change(emailInput, { target: { value: 'john@doe.com' }})
    
    const companyNameInput = screen.getByTestId('add-user-company-name-input');
    fireEvent.change(companyNameInput, { target: { value: 'Good Inc' }})
    
    const submitButton = screen.getByRole('button', { name: 'Submit' });
    fireEvent.click(submitButton);
 
    await act(() => {
      expect(handleSubmit).toHaveBeenCalledTimes(1);
    });
  });
});