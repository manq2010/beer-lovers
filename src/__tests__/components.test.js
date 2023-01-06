import { BrowserRouter, Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { render, screen, fireEvent } from '@testing-library/react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
// import ReactTestUtils, { act } from 'react-dom/test-utils';
import store from '../redux/configureStore';
import { ThemeProvider } from '../contexts/theme';
import AppRoutes from '../AppRoutes';
import NotFound from '../components/NotFound/NotFound';
import MainPage from '../pages/main/MainPage';
import BeerPage from '../pages/beer/BeerPage';
import ScrollToTop from '../components/ScrollToTop/ScrollToTop';
// import App from '../App';

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

// Routing testing

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

// Component testing

describe('Not-found page is rendered', () => {
  test('Component is rendered', () => {
    render(
      <Provider store={store}>
        <ThemeProvider>
          <NotFound />
        </ThemeProvider>
      </Provider>,
    );
    const container = screen.getByText(/404!/);
    expect(container).toBeInTheDocument();
  });

  test('matches snapshot', () => {
    const tree = renderer.create(
      <Provider store={store}>
        <ThemeProvider>
          <NotFound />
        </ThemeProvider>
      </Provider>,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe('MainPage component is rendererd', () => {
  test('Component is rendererd', () => {
    render(
      <Provider store={store}>
        <ThemeProvider>
          <BrowserRouter>
            <MainPage />
          </BrowserRouter>
        </ThemeProvider>
      </Provider>,
    );
    const container = screen.getByText(/Beer Lovers/);
    expect(container).toBeInTheDocument();
  });

  test('matches snapshot', () => {
    const tree = renderer.create(
      <Provider store={store}>
        <ThemeProvider>
          <BrowserRouter>
            <MainPage />
          </BrowserRouter>
        </ThemeProvider>
      </Provider>,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe('BeerPage component is rendererd', () => {
  test('Component is rendererd with data from API', () => {
    render(
      <Provider store={store}>
        <ThemeProvider>
          <BrowserRouter>
            <BeerPage />
          </BrowserRouter>
        </ThemeProvider>
      </Provider>,
    );
    const container = screen.queryByText(/First Brew/);
    expect(container).toBeNull();
  });

  test('matches snapshot', () => {
    const tree = renderer.create(
      <Provider store={store}>
        <ThemeProvider>
          <BrowserRouter>
            <BeerPage />
          </BrowserRouter>
        </ThemeProvider>
      </Provider>,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe('ScrollToTop component is rendererd', () => {
// Mock for testing purposes
  const mockScrollTo = jest.fn();
  window.scrollTo = mockScrollTo;

  test('Component is rendererd', () => {
    render(
      <ScrollToTop />,
    );

    fireEvent.click(screen.getByTestId(/scroll/));
    expect(mockScrollTo).toHaveBeenCalledWith({ top: 0, behavior: 'smooth' });
  });
});
