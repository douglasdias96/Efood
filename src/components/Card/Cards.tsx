import { Card, CardActionArea, CardActions, CardContent, CardMedia, ThemeProvider, Typography } from "@mui/material"
import { CardIcon, CardTitle, Info } from "./styles"
import { ColorTheme } from '../../Themes/ColorTheme'
import Button from "../Button/Button"
import Tag from "../Tags/Tags"

const Cards = () => {
  return (
    <ThemeProvider theme={ColorTheme}>
      <Card sx={{ maxWidth: 472}}>
        <CardActionArea>
          <Info>
          <Tag>Destaque da Semana</Tag>
          <Tag>Japonesa</Tag>
          </Info>
          <CardMedia
            component='img'
            height='217'
            image="/assets/images/sushi.png"
          />
          <CardContent>
            <CardTitle>
              <h3>Hioki Sushi</h3>
              <CardIcon>
                <p>4.9</p>
                <img src="public/assets/images/estrela.png" />
              </CardIcon>
            </CardTitle>
            <Typography variant="body2" >
              Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button />
        </CardActions>
      </Card>
    </ThemeProvider>
  )
}

// Width
// 472px
// Height
// 398px

export default Cards