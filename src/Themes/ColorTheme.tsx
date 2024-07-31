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
const ColorTheme2 = createTheme({
  components: {
    MuiTypography:{
      styleOverrides: {
        root:{
          color:"#FEBD97",
          fontSize: '14px',
          lineHeight: '22px',
          backgroundColor:'#E66767'
        }
      }
    }
  }
})

export { ColorTheme, ColorTheme2}