// import React from 'react'

// const studentClass = () => {
//   return <div>studentClass</div>
// }

// export default studentClass
// import React from 'react'
// import { Container, AppBar, Toolbar, Typography, Box } from '@mui/material'

// const AddClass = () => {
//   return (
//     <Container>
//       <AppBar position='static' sx={{ height: '80px' }}>
//         <Toolbar>
//           <Box display='flex' flexDirection='row' alignItems='center'>
//             <h2>Add Class</h2>
//             <Box mx={8} />
//           </Box>
//         </Toolbar>
//       </AppBar>
//     </Container>
//   )
// }

// export default AddClass

import React from 'react'
import { Container, AppBar, Toolbar, Typography, Box, Grid } from '@mui/material'

const AddClass = () => {
  return (
    <Container>
      <AppBar position='static' sx={{ height: '70px' }}>
        <Toolbar>
          <h2>Add Class</h2>
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

export default AddClass
