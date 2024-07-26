import { createTheme } from '@mui/material/styles'

const ColorTheme = createTheme({
  components: {
    MuiTypography:{
      styleOverrides: {
        root:{
          color:"#E66767",
          fontSize: '14px',
          lineHeight: '22px'
        }
      }
    }
  }
})

export { ColorTheme }