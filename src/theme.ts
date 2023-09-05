import { createTheme } from '@material-ui/core/styles';

export const theme = createTheme({
  typography: {
    fontWeightRegular: 400,
    fontFamily: '"Roboto", sans-serif',
    // имя пользователя
    h1: {
      fontSize: '18px',
      letterSpacing: '0.1px',
      fontWeight: 700,
    },
    // статус пользователя
    h2: {
      fontSize: '14px',
      fontWeight: 400,
      letterSpacing: '0.4px',
    },
    // для жирного основного текста
    body1: {
      fontSize: '14px',
      fontWeight: 700,
      letterSpacing: '0.1px',
    },
    // для обычного основного текста
    body2: {
      fontSize: '14px',
      fontWeight: 400,
      letterSpacing: '0.4px',
    },
  },
});