import React, { useEffect, useState } from 'react';
import { ThemeProvider, Grid } from '@mui/material';
import { ColorTheme } from '../Themes/ColorTheme';
import CardMenu from '../components/CardapioMenu/CardMenu';
import { useParams } from 'react-router-dom';
import { CardapioItem } from '../models/interface';
import HeaderCardapio from '../components/HeaderCardapio/HeaderCardapio';

const App: React.FC = () => {
  const [cardapio, setCardapio] = useState<CardapioItem[]>([]);
  const [error, setError] = useState<string | null>(null);

  const { id } = useParams();
  

  useEffect(() => {
    const fetchCardapio = async () => {
      try {
        const response = await fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`);
        if (!response.ok) {
          throw new Error(`Erro na rede: ${response.status}`);
        }
        const data = await response.json();
        console.log(data); // Verifique a estrutura dos dados
        if (data && Array.isArray(data.cardapio)) {
          setCardapio(data.cardapio);
        } else {
          throw new Error('Dados retornados não são um array de cardápio');
        }
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      } catch (error: any) {
        setError(error.message);
      }
    };

    fetchCardapio();
  }, [id]);

  if (error) {
    return <div>Erro: {error}</div>;
  }

  return (
    <>
    <HeaderCardapio />
    <div className="container">
      <ThemeProvider theme={ColorTheme}>
        <Grid container spacing={2}>
          {cardapio.map((item) => (
            <Grid item xs={12} sm={6} md={4} key={item.id}>
              <CardMenu item={item} />
            </Grid>
          ))}
        </Grid>
      </ThemeProvider>
    </div>
  
    </>
  );
};

export default App;

