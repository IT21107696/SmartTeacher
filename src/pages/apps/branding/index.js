// import React from 'react'

// const branding = () => {
//   return <div>branding</div>
// }

// export default branding

import React from 'react'
import { Container, AppBar, Toolbar, Grid } from '@mui/material'

const Branding = () => {
  return (
    <Container>
      <AppBar position='static' sx={{ height: '70px' }}>
        <Toolbar>
          <h2>Branding</h2>
        </Toolbar>
      </AppBar>
      {/* <Grid container spacing={2}>
        <Grid item xs={4} md={3}>



        </Grid>
        <Grid item xs={4} md={3}>



        </Grid>
      </Grid> */}
    </Container>
  )
}

export default Branding
