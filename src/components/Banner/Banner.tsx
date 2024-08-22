import { Imagem, Tag } from './styles';
import { Skeleton } from '@mui/material';
import { useGetCardapioQuery} from '../../services/api';
import { useParams } from 'react-router-dom';


const Banner = () => {
  const { id } = useParams()
  const { data: restaurantes, isLoading } = useGetCardapioQuery(id!)


  if (!restaurantes) {
    return <Skeleton variant='rectangular' width={'100%'} height={280}></Skeleton>;
  }

  return (
    <>
      {isLoading ? (
        <Skeleton variant='rectangular' width={'100%'} height={280} />
      ) : (
        <Imagem style={{ backgroundImage: `url(${restaurantes.capa})` }}>
          <div className="container">
            <Tag>
              <p>{restaurantes.tipo}</p>
              <h3>{restaurantes.titulo}</h3>
            </Tag>
          </div>
        </Imagem>

      )}
    </>
  );
};

export default Banner;
