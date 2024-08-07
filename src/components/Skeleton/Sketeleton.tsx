import { Box, Card, CardContent, Grid, Skeleton } from '@mui/material'


const CardSketeleton = () => {
  return (
    <Box margin={1} display={'flex'} flexDirection={'column'} marginTop={2} marginLeft={'auto'} marginRight={'auto'}>
      <Grid container spacing={2} columnSpacing={{ xs: 12, sm: 6, md: 6 }} >
        <Grid item xs={11}>
          <Card sx={{maxWidth: 1024, width:'100%', mx:'auto', my:0}}>
            <Skeleton variant='rectangular' height={217} width={472} />
            <CardContent>
              <Skeleton height={25} />
              <Skeleton height={20} />
              <Skeleton height={20} />
              <Skeleton height={25} />
              <Skeleton height={25} />
              <Skeleton height={25} />
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  )
}

export default CardSketeleton