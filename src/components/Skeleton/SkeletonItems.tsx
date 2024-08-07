import { Box, Card, CardContent, Grid, Skeleton } from '@mui/material'


const SkeletonItems = () => {
  return (
    <Box margin={1} display={'flex'} flexDirection={'column'} marginTop={3} marginLeft={'auto'} marginRight={'auto'}>
      <Grid container spacing={3} columnSpacing={{ xs: 4, sm: 2, md: 2 }} >
        <Grid item xs={12}>
          <Card sx={{maxWidth: 1024, width:'100%', mx:'auto', my:0}}>
            <Skeleton variant='rectangular' height={167} width={330} />
            <CardContent>
              <Skeleton height={20} />
              <Skeleton height={20} />
              <Skeleton height={20} />
              <Skeleton height={20} />
              <Skeleton height={20} />
              <Skeleton height={20} />
              <Skeleton height={20} />
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  )
}

export default SkeletonItems