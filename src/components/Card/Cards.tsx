import { Card as MuiCard, CardActionArea, CardActions, CardContent, CardMedia, ThemeProvider, Typography } from "@mui/material"
import { CardIcon, CardTitle, Info } from "./styles"
import { ColorTheme } from '../../Themes/ColorTheme'
import Button from "../Button/Button"
import Tag from "../Tags/Tags"

import LogoStar from '../../assets/images/estrela.png'
import { Menu } from "../../models/interface"
import { Link } from "react-router-dom"


const Cards: React.FC<{ item: Menu }> = ({ item }) => {


  const { titulo, tipo, avaliacao, capa, descricao, id, destacado } = item
  const getDescricao = (descricao: string) => {
    if (descricao.length > 230) {
      return descricao.slice(0, 229) + '...'
    }
    return descricao
  }
  return (
    <ThemeProvider theme={ColorTheme}>
      <MuiCard sx={{ maxWidth: 472 }}>
        <CardActionArea key={id}>

          <Info>
            {destacado && <Tag>Destaque da semana</Tag>}
            <Tag>{tipo}</Tag>
          </Info>
          <CardMedia
            component='img'
            height='217'
            image={capa}
          />
          <CardContent>
            <CardTitle>
              <h3>{titulo}</h3>
              <CardIcon>
                <p>{avaliacao}</p>
                <img src={LogoStar} />
              </CardIcon>
            </CardTitle>
            <Typography variant="body2" >
              {getDescricao(descricao)}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Link to={`/Efood/restaurantes/${id}`} >
            <Button/>
          </Link>
        </CardActions>
      </MuiCard>
    </ThemeProvider>
  )
}

// https://fake-api-tau.vercel.app/api/efood/restaurantes/${cardapio}

// Width
// 472px
// Height
// 398px

export default Cards