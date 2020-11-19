import 'react-perfect-scrollbar/dist/css/styles.css';
import React from 'react';
import { useRoutes } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/core';
import GlobalStyles from './components/GlobalStyles';
// import 'src/mixins/chartjs';
import theme from './theme/theme';
import routes from '../src/routes';
import DashboardLayout from './DashboardLayout/DashboardLayout'

//<GlobalStyles />

const App = () => {
  const routing = useRoutes(routes);

  return (
    <ThemeProvider theme={theme}>
      
      <DashboardLayout />
      {routing}
    </ThemeProvider>
      
  );
};

export default App;