import React from 'react';
// import useMediaQuery from '@material-ui/core/useMediaQuery';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';

export const ThemeWrapper = ({ children }) => {
  // const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

  // const theme = React.useMemo(
  //   () =>
  //     createMuiTheme({
  //       palette: {
  //         type: prefersDarkMode ? 'dark' : 'light',
  //       },
  //     }),
  //   [prefersDarkMode],
  // );

  const theme = createMuiTheme({
    palette: {
      type: 'dark'
    },
  })

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}
