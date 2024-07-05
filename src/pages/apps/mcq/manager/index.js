// import React from 'react'

// const mcqManager = () => {
//   return <div>mcqManager</div>
// }

// export default mcqManager

import React from 'react'
import { Container, AppBar, Toolbar } from '@mui/material'

const McqManager = () => {
  return (
    <Container>
      <AppBar position='static' sx={{ height: '70px' }}>
        <Toolbar>
          <h2>Mcq Manager</h2>
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

export default McqManager
