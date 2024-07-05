// import React from 'react'

// const classList = () => {
//   return <div>classList</div>
// }

// export default classList
// import React from 'react'
// import {
//   Container,
//   AppBar,
//   Toolbar,
//   Typography,
//   TextField,
//   Button,
//   FormControl,
//   Select,
//   Box,
//   MenuItem
// } from '@mui/material'

// const ClassList = () => {
//   return (
//     <Container>
//       <AppBar position='static' sx={{ height: '80px' }}>
//         <Toolbar>
//           <h2>Class List</h2>
//         </Toolbar>
//       </AppBar>

//       <table>
//         <tr>
//           <td>
//             <TextField label='Class Name' variant='outlined' margin='normal' style={{ marginRight: '10px' }} />

//             <FormControl variant='outlined' margin='normal' style={{ marginRight: '10px' }}>
//               <Select label='Select Subject' defaultValue=''>
//                 <MenuItem value='economics'>Economics</MenuItem>
//                 <MenuItem value='economicsEnglishMedium'>Economics English Medium</MenuItem>
//                 <MenuItem value='accounting'>Accounting</MenuItem>
//               </Select>
//             </FormControl>

//             <FormControl variant='outlined' margin='normal' style={{ marginRight: '10px' }}>
//               <Select label='Select Teacher' defaultValue=''>
//                 <MenuItem value='teacher1'>Lasantha Aluthage</MenuItem>
//                 <MenuItem value='teacher2'>Hrrrr</MenuItem>
//                 <MenuItem value='teacher3'>Shehan Wijesurendra</MenuItem>
//               </Select>
//             </FormControl>

//             <Button variant='contained' color='primary' margin='10px'>
//               Search
//             </Button>
//           </td>
//         </tr>
//       </table>
//     </Container>
//   )
// }

// export default ClassList

import React, { useState } from 'react'
import {
  Container,
  AppBar,
  Toolbar,
  Typography,
  TextField,
  Button,
  FormControl,
  Select,
  MenuItem,
  Grid,
  InputLabel
} from '@mui/material'

const ClassList = () => {
  const [formData, setFormData] = useState({
    className: '',
    selectedSubject: '',
    selectedTeacher: ''
  })

  const [errors, setErrors] = useState({})

  const handleInputChange = e => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value
    })

    setErrors({
      ...errors,
      [name]: ''
    })
  }

  const handleSubmit = () => {
    const newErrors = {}

    if (!formData.className.trim()) {
      newErrors.className = 'Class Name is required'
    }

    if (!formData.selectedSubject) {
      newErrors.selectedSubject = 'Please select a subject'
    }

    if (!formData.selectedTeacher) {
      newErrors.selectedTeacher = 'Please select a teacher'
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
    } else {
      console.log('Form submitted:', formData)
    }
  }

  return (
    <Container>
      <AppBar position='static' sx={{ height: '70px' }}>
        <Toolbar>
          <h2>Class List</h2>
        </Toolbar>
      </AppBar>
      <Grid container spacing={2} alignItems='center'>
        <Grid item xs={12} md={4}>
          <TextField
            label='Class Name'
            variant='outlined'
            fullWidth
            name='className'
            value={formData.className}
            onChange={handleInputChange}
            error={Boolean(errors.className)}
            helperText={errors.className}
            sx={{ mt: 4 }}
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <FormControl variant='outlined' fullWidth sx={{ mt: 4 }}>
            <InputLabel>Select Subject</InputLabel>
            <Select
              label='Select Subject'
              value={formData.selectedSubject}
              onChange={handleInputChange}
              name='selectedSubject'
              error={Boolean(errors.selectedSubject)}
            >
              <MenuItem value=''>Select Subject</MenuItem>
              <MenuItem value='economics'>Economics</MenuItem>
              <MenuItem value='economicsEnglishMedium'>Economics English Medium</MenuItem>
              <MenuItem value='accounting'>Accounting</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} md={4}>
          <FormControl variant='outlined' fullWidth sx={{ mt: 4 }}>
            <InputLabel>Select Teacher</InputLabel>
            <Select
              label='Select Teacher'
              value={formData.selectedTeacher}
              onChange={handleInputChange}
              name='selectedTeacher'
              error={Boolean(errors.selectedTeacher)}
            >
              <MenuItem value=''>Select Teacher</MenuItem>
              <MenuItem value='teacher1'>Lasantha Aluthage</MenuItem>
              <MenuItem value='teacher2'>Hrrrr</MenuItem>
              <MenuItem value='teacher3'>Shehan Wijesurendra</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <Button variant='contained' color='primary' onClick={handleSubmit} sx={{ mt: 4 }}>
            Search
          </Button>
        </Grid>
      </Grid>
    </Container>
  )
}

export default ClassList
