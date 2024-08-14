import { Imagem, Tag } from './styles';
import { Skeleton } from '@mui/material';
import { useGetRestaurantesQuery } from '../../services/api';


const Banner = () => {
const {data: restaurantes, isLoading} = useGetRestaurantesQuery()


  if (!restaurantes) {
    return <Skeleton variant='rectangular' width={'100%'} height={280}></Skeleton>;
  }

  return (
    <Imagem style={{ backgroundImage: `url(${restaurantes.capa})` }}>
      <div className="container">
        <Tag>
          <p>{restaurantes.tipo}</p>
          <h3>{restaurantes.titulo}</h3>
        </Tag>
      </div>
    </Imagem>
  );
};

export default Banner;
