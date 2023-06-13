import { createTheme } from "@mui/material";

export const lighTheme = createTheme({
  palette: {
    primary: {
      main: '#233F35',
    },
    secondary:{
      main: '#CF9F3B',
    },  
    background: {
      default: '#E8E2E2'
    }
  },
  typography: {
    allVariants: {
      fontFamily: "DM Sans",
    },
  },
  components:{
    MuiTextField:{
      defaultProps:{
        variant: 'outlined',
        margin: 'dense',
        fullWidth: true,
      },
      styleOverrides:{
        root:{
          borderRadius: '8px',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          color: '#fff',
          '& .MuiOutlinedInput-root': {
            '& fieldset': {
              borderColor: '#fff',
            },
            '&:hover fieldset': {
              borderColor: '#fff',
            },
            '&.Mui-focused fieldset': {
              borderColor: '#fff',
            },
          },
        },
      }
    }
  }
})