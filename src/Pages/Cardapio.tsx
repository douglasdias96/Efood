
import { ThemeProvider, Grid } from '@mui/material';
import { ColorTheme } from '../Themes/ColorTheme';
import CardMenu from '../components/CardapioMenu/CardMenu';
import { useParams } from 'react-router-dom';
import HeaderCardapio from '../components/HeaderCardapio/HeaderCardapio';
import SkeletonItems from '../components/Skeleton/SkeletonItems';

import { useGetCardapioQuery } from '../services/api'

const App = () => {
  const { id } = useParams()
  const { data, isLoading } = useGetCardapioQuery(id!)

  if (!data) {
    return <div>Erro</div>;
  }

  return (
    <>
      <HeaderCardapio />

      <div className="container">
        <ThemeProvider theme={ColorTheme}>
          <Grid container spacing={2}>
            {isLoading ? Array.from(new Array(6)).map((_, index) => (
              <SkeletonItems key={index} />
            ))

              :
              (
                data.cardapio.map((item) => (
                  <Grid item xs={12} sm={6} md={4} key={item.id}>
                    <CardMenu item={item} />
                  </Grid>
                ))
              )
            }
          </Grid>
        </ThemeProvider>
      </div>

    </>
  );
};

export default App;

