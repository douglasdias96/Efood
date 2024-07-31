import { CardActionArea, ThemeProvider, Card as MuiCard, CardMedia, Typography, Button } from '@mui/material';
import { CardapioItem } from '../../models/interface';
import { ColorTheme2 } from '../../Themes/ColorTheme';
import { CardTitle, DivContainer } from './styles';

const CardMenu: React.FC<{ item: CardapioItem }> = ({ item }) => {
  const { descricao, foto, id, nome } = item;
  const getDescricao = (descricao: string) => {
    if (descricao.length > 250) {
      return descricao.slice(0, 249) + '...'
    }
    return descricao
  }
  return (
    <div className="container">
      <ThemeProvider theme={ColorTheme2}>
      <MuiCard sx={{ width:320, backgroundColor: '#E66767', marginBottom:'32px'}} >
        <CardActionArea key={id}>
          <CardMedia
            component="img"
            height="167"
            image={foto}
          />
          <CardTitle>
            <h3>{nome}</h3>
          </CardTitle>
          <DivContainer className="container">
          <Typography variant="body2" margin={'8px'} fontSize={14} lineHeight={'22px'}>
            {getDescricao(descricao)}
          </Typography>
          <Button variant="outlined" className='btn'>adicionar ao carrinho</Button>
          </DivContainer>
        </CardActionArea>
      </MuiCard>
    </ThemeProvider>
    </div>
  );
}

export default CardMenu;