import { Imagem, Tag } from './styles';
import { useEffect, useState } from 'react';
import {  Menu } from '../../models/interface';
import { Skeleton } from '@mui/material';

interface BannerProps {
  id: number;
}

const Banner: React.FC<BannerProps> = ({ id }) => {
  const [restaurante, setRestaurante] = useState<Menu | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchRestaurante = async () => {
      try {
        const response = await fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes`);
        if (!response.ok) {
          throw new Error(`Erro na rede: ${response.status}`);
        }
        const data: Menu[] = await response.json();
        console.log('Dados recebidos da API:', data);

        const restauranteEncontrado = data.find(restaurante => restaurante.id === id);
        if (restauranteEncontrado) {
          console.log('Restaurante encontrado:', restauranteEncontrado);
          setRestaurante(restauranteEncontrado);
        } else {
          throw new Error('Restaurante não encontrado');
        }
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      } catch (error: any) {
        console.error('Erro ao buscar dados:', error);
        setError(error.message);
      }
    };
    fetchRestaurante();
  }, [id]);

  if (error) {
    return <div>Erro: {error}</div>;
  }

  if (!restaurante) {
    return <Skeleton variant='rectangular' width={'100%'} height={280}></Skeleton>;
  }

  return (
    <Imagem style={{ backgroundImage: `url(${restaurante.capa})` }}>
      <div className="container">
        <Tag>
          <p>{restaurante.tipo}</p>
          <h3>{restaurante.titulo}</h3>
        </Tag>
      </div>
    </Imagem>
  );
};

export default Banner;
