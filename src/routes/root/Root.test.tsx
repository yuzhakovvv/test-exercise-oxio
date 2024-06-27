import { render, screen, fireEvent } from '@testing-library/react';
import { createMemoryRouter, RouterProvider } from 'react-router-dom';
import { routerConfig } from '../router';

describe('Root', () => {
  test('renders NavBar', () => {
    const router = createMemoryRouter(routerConfig, {
      initialEntries: ["/home"],
    });

    render(<RouterProvider router={router} />);

    const appLogoAlement = screen.getByText(/Test App/i);
    expect(appLogoAlement).toBeInTheDocument();
  });
  
  test('handles client-side routing', () => {
    const router = createMemoryRouter(routerConfig, {
      initialEntries: ["/home", "/charts"],
    });

    render(<RouterProvider router={router} />);
  
    fireEvent.click(screen.getByRole('link', { name: 'Charts' }));
    expect(screen.getByText(/Users Amount By Name First Letter/i)).toBeInTheDocument();

    fireEvent.click(screen.getByRole('link', { name: 'Home' }));
    expect(screen.getByText(/Add User/i)).toBeInTheDocument();
  });
})