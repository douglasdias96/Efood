
import Grid from '@mui/material/Unstable_Grid2';
import Box from '@mui/material/Box';
import Cards from '../Card/Cards';
import { useEffect, useState } from 'react';
import { Menu } from '../../models/interface';
import axios from 'axios';
import CardSketeleton from '../Skeleton/Sketeleton';




const Products = () => {
  const [restaurantes, setRestaurantes] = useState<Menu[]>([])
  const [loading, setLoading] = useState(true)


  const getPost = async () => {
    try {
      const responde = await axios.get('https://fake-api-tau.vercel.app/api/efood/restaurantes')
      const data = await responde.data

      setRestaurantes(data)

    } catch (error) {
      console.log(error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    getPost()
  }, [])
  return (
    <div className="container">
      <Box margin={1} display={'flex'} flexDirection={'column'} marginTop={6}  >
        <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 1, md: 3 }} >
          {loading ? Array.from(new Array(6)).map((_, index) => (
            <CardSketeleton key={index} />
          ))
            :
            (
              restaurantes.map((menu) => (
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