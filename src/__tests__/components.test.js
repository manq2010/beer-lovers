import { BrowserRouter, Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { render, screen, fireEvent } from '@testing-library/react';
// import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import store from '../redux/configureStore';
import { ThemeProvider } from '../contexts/theme';
import AppRoutes from '../AppRoutes';

Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: jest.fn().mockImplementation((query) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(), // deprecated
    removeListener: jest.fn(), // deprecated
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  })),
});

// Routing test

describe('Navbar renders', () => {
  test('should redirect and update history', () => {
    const history = createMemoryHistory();
    render(
      <Provider store={store}>
        <ThemeProvider>
          <Router location={history.location} navigator={history}>
            <AppRoutes />
          </Router>
        </ThemeProvider>
      </Provider>,
    );

    fireEvent.click(screen.getByTestId(/Beer Lovers/));
    expect(history.location.pathname).toEqual('/');
  });

  test('should redirect and update dom', () => {
    render(
      <Provider store={store}>
        <ThemeProvider>
          <BrowserRouter>
            <AppRoutes />
          </BrowserRouter>
        </ThemeProvider>
      </Provider>,
    );

    fireEvent.click(screen.getByTestId(/Beer Lovers/));
    expect(screen.getByText(/Loading.../)).toBeInTheDocument();
  });
});
