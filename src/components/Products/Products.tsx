
import Grid from '@mui/material/Unstable_Grid2';
import Box from '@mui/material/Box';
import Cards from '../Card/Cards';


const Products = () => {
  return (

    <div className="container">
      <Box margin={1} display={'flex'} flexDirection={'column'} marginTop={6}  >
          <Grid container rowSpacing={2} columnSpacing={{xs:1, sm:1, md:3}} >
            <Grid xs={12} lg={6} md={6}>
              <Cards></Cards>
            </Grid>
            <Grid xs={12} lg={6} md={6}>
              <Cards></Cards>
            </Grid>
            <Grid xs={12} lg={6} md={6}>
              <Cards></Cards>
            </Grid>
            <Grid xs={12} lg={6} md={6}>
              <Cards></Cards>
            </Grid>
            <Grid xs={12} lg={6} md={6}>
              <Cards></Cards>
            </Grid>
            <Grid xs={12} lg={6} md={6}>
              <Cards></Cards>
            </Grid>
          </Grid>
      </Box>
    </div>

  )
}

export default Products