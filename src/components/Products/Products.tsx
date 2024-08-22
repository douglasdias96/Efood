
import Grid from '@mui/material/Unstable_Grid2';
import Box from '@mui/material/Box';
import Cards from '../Card/Cards';
import CardSketeleton from '../Skeleton/Sketeleton';
import { useGetRestaurantesQuery } from '../../services/api';


const Products = () => {

  const { data, isLoading } = useGetRestaurantesQuery()

  return (
    <div className="container">
      <Box margin={1} display={'grid'} flexDirection={'column'} marginTop={6}  >
        <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 1, md: 3 }} >
          {isLoading ? Array.from(new Array(6)).map((_, index) => (
            <CardSketeleton key={index} />
          ))
            :
            (
              Array.isArray(data) && data.map((menu) => (
                <Grid key={menu.id} xs={12} lg={6} md={6} >
                  <Cards item={menu} />
                </Grid>
              ))
            )
          }

        </Grid>
      </Box>
    </div>
  )

}

export default Products

{/* <div className="container">
      <Box margin={1} display={'flex'} flexDirection={'column'} marginTop={6}  >
        <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 1, md: 3 }} >

          {restaurantes.map((menu) => (
            <Grid key = { menu.id } xs = { 12} lg = { 6} md = { 6} >
              <Cards item={menu} />
            </Grid>
          ))}

      </Grid>
    </Box>
    </div > */}