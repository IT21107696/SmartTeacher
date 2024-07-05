// import React from 'react'

// const index = () => {
//   return (
//     <div>
//       <h2>
//         <b>Add Lesson</b>
//       </h2>
//     </div>
//   )
// }

// export default index
// import React from 'react'
// import { Container, AppBar, Toolbar, Typography, Box } from '@mui/material'

// const AddLesson = () => {
//   return (
//     <Container>
//       <AppBar position='static' sx={{ height: '70px' }}>
//         <Toolbar>
//           <Box display='flex' flexDirection='row' alignItems='center'>
//             <h2>Add Lesson</h2>
//             <Box mx={8} />
//           </Box>
//         </Toolbar>
//       </AppBar>
//     </Container>
//   )
// }

// export default AddLesson

import React from 'react'
import { Container, AppBar, Toolbar, Typography, Box, Grid } from '@mui/material'

const AddLesson = () => {
  return (
    <Container>
      <AppBar position='static' sx={{ height: '70px' }}>
        <Toolbar>
          <h2>Add Lesson</h2>
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

export default AddLesson
