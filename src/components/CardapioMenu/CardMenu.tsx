import { CardActionArea, ThemeProvider, Card as MuiCard, CardMedia, Typography, Button } from '@mui/material';
import { CardapioItem } from '../../models/interface';
import { ColorTheme2 } from '../../Themes/ColorTheme';
import { CardTitle, DivContainer, ImgModal } from './styles';
import { Box, Modal as DivModal } from '@mui/material'
import { useState } from 'react';

const style = {
  position: 'absolute' as const,
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 700,
  bgcolor: '#FFF8F1',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};




const CardMenu: React.FC<{ item: CardapioItem }> = ({ item }) => {
  const { descricao, foto, id, nome } = item;
  const [open, setOpen] = useState(false);
  const handleClose = () => setOpen(false);
  const handleOpen = () => setOpen(true);
  
  const getDescricao = (descricao: string) => {
    if (descricao.length > 200) {
      return descricao.slice(0, 199) + '...'
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
          <DivContainer>
          <Typography variant="body2" margin={'8px'} fontSize={14} lineHeight={'22px'}>
            {getDescricao(descricao)}
          </Typography>
          <Button variant="outlined" className='btn' onClick={handleOpen}>adicionar ao carrinho</Button>
          </DivContainer>
        </CardActionArea>
      </MuiCard>
    </ThemeProvider>
    <DivModal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          {nome}
        </Typography>
        <ImgModal src={foto}/>
      </Box>
    </DivModal>
    </div>
  );
}

export default CardMenu;