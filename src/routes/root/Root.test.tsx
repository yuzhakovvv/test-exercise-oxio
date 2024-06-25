import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Root from './Root'

test('renders NavBar', () => {
  render(<Root />, { wrapper: MemoryRouter });
  const appLogoAlement = screen.getByText(/Test App/i);
  expect(appLogoAlement).toBeInTheDocument();
});
