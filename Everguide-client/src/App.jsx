import './App.css';
import { useRoutes } from 'react-router-dom';
import routes from './routes/routes';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { ThemeProvider } from 'styled-components';
import { Provider } from 'react-redux';
import store from './stores/store';
import theme from './theme/theme';
import GlobalStyle from './styles/GlobalStyle';

const queryClient = new QueryClient();

const App = () => {
  const routing = useRoutes(routes);

  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          {routing}
        </ThemeProvider>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </Provider>
  );
};


export default App;
