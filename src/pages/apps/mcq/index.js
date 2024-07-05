// import React from 'react'

// const addMcq = () => {
//   return <div>addMcq</div>
// }

// export default addMcq

import React from 'react'
import { Container, AppBar, Toolbar } from '@mui/material'

const AddMcq = () => {
  return (
    <Container>
      <AppBar position='static' sx={{ height: '70px' }}>
        <Toolbar>
          <h2>Add Mcq</h2>
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

export default AddMcq
