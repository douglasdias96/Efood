
import Grid from '@mui/material/Unstable_Grid2';
import Box from '@mui/material/Box';
import Cards from '../Card/Cards';
import { useEffect, useState } from 'react';
import { Menu } from '../../models/interface';
import axios from 'axios';




const Products = () => {
  const [restaurantes, setRestaurantes] = useState<Menu[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const getPost = async () => {
    try {
      const responde = await axios.get('https://fake-api-tau.vercel.app/api/efood/restaurantes')

      const data = responde.data

      setRestaurantes(data)

    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    // setIsLoading(true)
    // fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes')
    // .then(res => res.json())
    // .then(res => setRestaurantes(res))
    // .catch((error) => console.error(error))
    // .finally(() => setIsLoading(false))
    getPost()
  }, [])
  return (

    <div className="container">
      <Box margin={1} display={'flex'} flexDirection={'column'} marginTop={6}  >
        {isLoading ? <>carregando...</> : <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 1, md: 3 }} >

          {restaurantes.map((menu) => (
            <Grid key = { menu.id } xs = { 12} lg = { 6} md = { 6} >
              <Cards item={menu} />
            </Grid>
          ))}

      </Grid>}
    </Box>
    </div >

  )
}

export default Products