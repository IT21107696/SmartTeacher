// import React from 'react'

// const student = () => {
//   return <div>student List</div>
// }

// export default student
// import React from 'react'
// import { Container, AppBar, Toolbar, Typography, Box, TextField, FormControlLabel, Checkbox } from '@mui/material'

// const AddNewStudent = () => {
//   return (
//     <Container>
//       <AppBar position='static' sx={{ height: '80px' }}>
//         <Toolbar>
//           <Typography variant='h6'>Add New Student</Typography>
//         </Toolbar>
//       </AppBar>

//       <div>
//         <Box mx={2} />
//         <label>First Name</label>

//         <TextField label='First Name' variant='outlined' margin='normal' />

//         <label>Last Name</label>

//         <TextField label='Last Name' variant='outlined' margin='normal' />

//         <br></br>
//         <label>Mobile</label>
//         <TextField label='Mobile' variant='outlined' margin='normal' />
//         <label>NIC</label>
//         <TextField label='NIC' variant='outlined' margin='normal' />
//         <br></br>
//         <label>Address Line1</label>
//         <TextField label='Address Line 1' variant='outlined' margin='normal' />
//         <br></br>
//         <label>Address Line2</label>
//         <TextField label='Address Line 2' variant='outlined' margin='normal' />
//         <br></br>
//         <label>City</label>
//         <TextField label='City' variant='outlined' margin='normal' />
//       </div>

//       <div>
//         <FormControlLabel control={<Checkbox />} label='2022 Theory' />
//         <br></br>
//         <FormControlLabel control={<Checkbox />} label='2021 Theory' />
//         <br></br>
//         <FormControlLabel control={<Checkbox />} label='2021 Revision' />
//         <br></br>
//         <FormControlLabel control={<Checkbox />} label='2023 Theory' />
//         <br></br>
//         <FormControlLabel control={<Checkbox />} label='Econ paper Class 2021' />
//       </div>
//     </Container>
//   )
// }

// export default AddNewStudent
// import React from 'react'
// import {
//   AppBar,
//   Toolbar,
//   Container,
//   Table,
//   TableBody,
//   TableCell,
//   TableRow,
//   TextField,
//   Box,
//   Checkbox,
//   FormControlLabel
// } from '@mui/material'

// const AddNewStudent = () => {
//   return (
//     <Container>
//       <AppBar position='static' sx={{ height: '70px' }}>
//         <Toolbar>
//           <h2>Add New Student</h2>
//         </Toolbar>
//       </AppBar>
//       <Table>
//         <TableBody>
//           <TableRow>
//             <TextField label='First Name' variant='outlined' margin='normal' />
//             <TextField label='Last Name' variant='outlined' margin='normal' />
//             <br></br>
//             <TextField label='Mobile' variant='outlined' margin='normal' />
//             <TextField label='NIC' variant='outlined' margin='normal' />
//             <br></br>
//             <TextField label='Address Line 1' variant='outlined' margin='normal' />
//             <br></br>
//             <TextField label='Address Line 2' variant='outlined' margin='normal' />
//             <br></br>
//             <TextField label='City' variant='outlined' margin='normal' />

//             <TableCell>
//               <FormControlLabel control={<Checkbox />} label='2022 Theory' />
//               <br></br>
//               <FormControlLabel control={<Checkbox />} label='2021 Theory' />
//               <br></br>
//               <FormControlLabel control={<Checkbox />} label='2021 Revision' />
//               <br></br>
//               <FormControlLabel control={<Checkbox />} label='2023 Theory' />
//               <br></br>
//               <FormControlLabel control={<Checkbox />} label='Econ paper Class 2021' />
//               <br></br>
//               <FormControlLabel control={<Checkbox />} label='2021 Paper Class English Medium' />
//               <br></br>
//               <FormControlLabel control={<Checkbox />} label='2022 Revision' />
//               <br></br>
//               <FormControlLabel control={<Checkbox />} label='2022 English Medium Theory' />
//               <br></br>
//               <FormControlLabel control={<Checkbox />} label='2022 English Medium Revision' />
//               <br></br>
//               <FormControlLabel control={<Checkbox />} label='2023 English Medium Theory' />
//               <br></br>
//               <FormControlLabel control={<Checkbox />} label='2024 Theory' />
//               <br></br>
//               <FormControlLabel control={<Checkbox />} label='2024 English Medium Theory' />
//               <br></br>
//               <FormControlLabel control={<Checkbox />} label='2022 Paper Class' />
//               <br></br>
//               <FormControlLabel control={<Checkbox />} label='2023 Revision' />
//               <br></br>
//               <FormControlLabel control={<Checkbox />} label='2023 English Medium Revision' />
//               <br></br>
//               <FormControlLabel control={<Checkbox />} label='2023 Express' />
//               <br></br>
//               <FormControlLabel control={<Checkbox />} label='Test' />
//               <br></br>
//               <FormControlLabel control={<Checkbox />} label='2023 Live Paper Class' />
//               <br></br>
//               <FormControlLabel control={<Checkbox />} label='2025 Theory' />
//               <br></br>
//               <FormControlLabel control={<Checkbox />} label='Misson 100' />
//             </TableCell>
//           </TableRow>
//         </TableBody>
//       </Table>
//     </Container>
//   )
// }

// export default AddNewStudent

import React, { useState } from 'react'
import {
  AppBar,
  Toolbar,
  Container,
  Grid,
  Typography,
  TextField,
  FormControlLabel,
  Checkbox,
  Button,
  Box
} from '@mui/material'

const AddNewStudent = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    mobile: '',
    nic: '',
    addressLine1: '',
    addressLine2: '',
    city: '',
    selectedCourses: []
  })

  const [errors, setErrors] = useState({})

  const handleTextChange = e => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value
    })

    // Clear the validation error for the changed field
    setErrors({
      ...errors,
      [name]: ''
    })
  }

  const handleCheckboxChange = e => {
    const { value, checked } = e.target
    if (checked) {
      setFormData({
        ...formData,
        selectedCourses: [...formData.selectedCourses, value]
      })
    } else {
      setFormData({
        ...formData,
        selectedCourses: formData.selectedCourses.filter(course => course !== value)
      })
    }
  }

  const handleSubmit = () => {
    // Perform validation here
    const newErrors = {}

    if (!formData.firstName.trim()) {
      newErrors.firstName = 'First Name is required'
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = 'Last Name is required'
    }

    if (!formData.mobile.trim()) {
      newErrors.mobile = 'Mobile is required'
    }

    if (!formData.nic.trim()) {
      newErrors.nic = 'NIC is required'
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
    } else {
      // Form is valid, you can proceed with your logic here
      console.log('Form submitted:', formData)
    }
  }

  return (
    <Container>
      <AppBar position='static' sx={{ height: '70px' }}>
        <Toolbar>
          <h2>Add New Student</h2>
        </Toolbar>
      </AppBar>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <TextField
            label='First Name'
            variant='outlined'
            fullWidth
            name='firstName'
            value={formData.firstName}
            onChange={handleTextChange}
            error={Boolean(errors.firstName)}
            helperText={errors.firstName}
            sx={{ mt: 4 }}
          />
          <TextField
            label='Last Name'
            variant='outlined'
            fullWidth
            name='lastName'
            value={formData.lastName}
            onChange={handleTextChange}
            error={Boolean(errors.lastName)}
            helperText={errors.lastName}
            sx={{ mt: 4 }}
          />
          <TextField
            label='Mobile'
            variant='outlined'
            fullWidth
            name='mobile'
            value={formData.mobile}
            onChange={handleTextChange}
            error={Boolean(errors.mobile)}
            helperText={errors.mobile}
            sx={{ mt: 4 }}
          />
          <TextField
            label='NIC'
            variant='outlined'
            fullWidth
            name='nic'
            value={formData.nic}
            onChange={handleTextChange}
            error={Boolean(errors.nic)}
            helperText={errors.nic}
            sx={{ mt: 4 }}
          />
          <TextField
            label='Address Line 1'
            variant='outlined'
            fullWidth
            name='addressLine1'
            value={formData.addressLine1}
            onChange={handleTextChange}
            sx={{ mt: 4 }}
          />
          <TextField
            label='Address Line 2'
            variant='outlined'
            fullWidth
            name='addressLine2'
            value={formData.addressLine2}
            onChange={handleTextChange}
            sx={{ mt: 4 }}
          />
          <TextField
            label='City'
            variant='outlined'
            fullWidth
            name='city'
            value={formData.city}
            onChange={handleTextChange}
            sx={{ mt: 4 }}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              border: '1px solid #ccc',
              padding: '16px',
              borderRadius: '4px',
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
              marginTop: '16px'
            }}
          >
            <FormControlLabel
              control={
                <Checkbox
                  value='2022 Theory'
                  checked={formData.selectedCourses.includes('2022 Theory')}
                  onChange={handleCheckboxChange}
                />
              }
              label='2022 Theory'
            />
            <FormControlLabel
              control={
                <Checkbox
                  value='2021 Theory'
                  checked={formData.selectedCourses.includes('2021 Theory')}
                  onChange={handleCheckboxChange}
                />
              }
              label='2021 Theory'
            />
            {/* Add more checkboxes as needed */}
          </Box>
        </Grid>
      </Grid>
      <Button variant='contained' color='primary' onClick={handleSubmit} sx={{ mt: 4 }}>
        Submit
      </Button>
    </Container>
  )
}

export default AddNewStudent
