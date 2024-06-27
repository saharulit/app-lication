import React from 'react';
import ButtonMui, { ButtonProps as MuiButtonProps } from '@mui/material/Button';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#181D31',
    },
    secondary: {
      main: '#181D31',
    },
  },
});

interface ButtonProps extends MuiButtonProps {
  mode?: 'primary' | 'secondary';
}

const Button: React.FC<ButtonProps> = ({
  children,
  mode = 'primary',
  ...props
}) => (
  <ThemeProvider theme={theme}>
    <ButtonMui
      style={{ textTransform: 'none' }}
      className="font-sm"
      variant={mode === 'primary' ? 'contained' : 'outlined'}
      color={mode}
      {...props}
    >
      {children}
    </ButtonMui>
  </ThemeProvider>
);

export default Button;
