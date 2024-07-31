import { Stack } from '@mui/material'
import { ColorButton } from './styles'

const Button = () => {
  return (
    <Stack spacing={2} direction="row">
      <ColorButton>Saiba Mais</ColorButton>
    </Stack>
  )
}

export default Button