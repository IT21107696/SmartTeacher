// import React from 'react'

// const studentList = () => {
//   return <div>studentList</div>
// }

// export default studentList
// import React from 'react'
// import { AppBar, Toolbar, Typography, TextField, Button, Box, Container } from '@mui/material'

// const StudentList = () => {
//   return (
//     <Container>
//       <AppBar position='static' sx={{ height: '70px' }}>
//         <Toolbar>
//           <h2>Student List</h2>
//         </Toolbar>
//       </AppBar>

//       <table>
//         <tr>
//           <td>
//             <TextField
//               label='Type Student ID'
//               variant='outlined'
//               margin='normal'
//               color='primary'
//               style={{ marginRight: '20px', width: '200px' }}
//             />

//             <TextField
//               label='Type Mobile'
//               variant='outlined'
//               margin='normal'
//               style={{ marginRight: '20px', width: '200px' }}
//             />

//             <TextField
//               label='Type Name'
//               variant='outlined'
//               margin='normal'
//               style={{ marginRight: '20px', width: '200px' }}
//             />

//             <TextField
//               label='Type NIC Number'
//               variant='outlined'
//               margin='normal'
//               style={{ marginRight: '20px', width: '200px' }}
//             />

//             <Button variant='contained' color='primary'>
//               Search
//             </Button>
//           </td>
//         </tr>
//       </table>
//     </Container>
//   )
// }

// export default StudentList

import React from 'react'
import { AppBar, Toolbar, Typography, TextField, Button, Container, Grid } from '@mui/material'

const StudentList = () => {
  return (
    <Container>
      <AppBar position='static' sx={{ height: '70px' }}>
        <Toolbar>
          <h2>Student List</h2>
        </Toolbar>
      </AppBar>

      <Grid container spacing={2}>
        <Grid item xs={12} sm={3}>
          <TextField label='Type Student ID' variant='outlined' fullWidth margin='normal' sx={{ mt: 4 }} />
        </Grid>
        <Grid item xs={12} sm={3}>
          <TextField label='Type Mobile' variant='outlined' fullWidth margin='normal' sx={{ mt: 4 }} />
        </Grid>
        <Grid item xs={12} sm={3}>
          <TextField label='Type Name' variant='outlined' fullWidth margin='normal' sx={{ mt: 4 }} />
        </Grid>
        <Grid item xs={12} sm={3}>
          <TextField label='Type NIC Number' variant='outlined' fullWidth margin='normal' sx={{ mt: 4 }} />
        </Grid>
        <Grid item xs={12} sm={12}>
          <Button variant='contained' color='primary' sx={{ mt: 4 }}>
            Search
          </Button>
        </Grid>
      </Grid>
    </Container>
  )
}

export default StudentList
