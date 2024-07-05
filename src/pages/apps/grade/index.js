// import React from 'react'

// const grade = () => {
//   return <div>grade</div>
// }

// export default grade
// import React, { useState } from 'react'
// import {
//   Container,
//   AppBar,
//   Toolbar,
//   Typography,
//   FormControl,
//   Select,
//   MenuItem,
//   Button,
//   TextField,
//   Divider
// } from '@mui/material'

// const AddNewGrade = () => {
//   const [selectedStatus, setSelectedStatus] = useState('')
//   const [grade, setGrade] = useState('')
//   const [description, setDescription] = useState('')

//   const handleStatusChange = event => {
//     setSelectedStatus(event.target.value)
//   }

//   const handleAddGrade = () => {
//     console.log('Grade:', grade)
//     console.log('Status:', selectedStatus)
//     console.log('Description:', description)
//   }

//   return (
//     <Container>
//       <AppBar position='static'>
//         <Toolbar>
//           <Typography variant='h6'>Add New Grade</Typography>
//         </Toolbar>
//       </AppBar>

//       <label>Add New Grade</label>
//       <TextField
//         label='Add New Grade'
//         variant='outlined'
//         value={grade}
//         onChange={e => setGrade(e.target.value)}
//         style={{ marginRight: '1800px', marginTop: '10px', width: '400px', height: '40px' }}
//       />

//       <FormControl variant='outlined' fullWidth style={{ marginTop: '10px' }}>
//         <label>Select Status</label>
//         <Select
//           label='Select Status'
//           placeholder='Select Status'
//           value={selectedStatus}
//           onChange={handleStatusChange}
//           style={{ marginLeft: '700px', marginTop: '0px', width: '400px', height: '60px', marginBottom: '100px' }}
//         >
//           <MenuItem value='active'>Active</MenuItem>
//           <MenuItem value='inactive'>Inactive</MenuItem>
//         </Select>
//       </FormControl>

//       <label>Description</label>
//       <TextField
//         label='Description'
//         variant='outlined'
//         multiline
//         rows={4}
//         value={description}
//         onChange={e => setDescription(e.target.value)}
//         style={{ marginRight: '1800px', marginTop: '10px', width: '400px', height: '20px' }}
//       />

//       <Button
//         variant='contained'
//         color='primary'
//         style={{ marginTop: '20px', marginLeft: '1000px', width: '200px', height: '40px' }}
//         onClick={handleAddGrade}
//       >
//         Add
//       </Button>
//     </Container>
//   )
// }

// export default AddNewGrade

import React, { useState } from 'react'
import {
  Container,
  AppBar,
  Toolbar,
  InputLabel,
  FormControl,
  Select,
  MenuItem,
  Button,
  TextField,
  Grid
} from '@mui/material'

const AddNewGrade = () => {
  const [formData, setFormData] = useState({
    grade: '',
    selectedStatus: '',
    description: ''
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

  const handleStatusChange = event => {
    setFormData({
      ...formData,
      selectedStatus: event.target.value
    })

    setErrors({
      ...errors,
      selectedStatus: ''
    })
  }

  const handleAddGrade = () => {
    const newErrors = {}

    if (!formData.grade.trim()) {
      newErrors.grade = 'Grade is required'
    }

    if (!formData.selectedStatus) {
      newErrors.selectedStatus = 'Please select a status'
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
    } else {
      // Form is valid, you can proceed with your logic here
      console.log('Grade:', formData.grade)
      console.log('Status:', formData.selectedStatus)
      console.log('Description:', formData.description)
    }
  }

  return (
    <Container>
      <AppBar position='static'>
        <Toolbar>
          <h2>Add New Grade</h2>
        </Toolbar>
      </AppBar>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <TextField
            label='Grade'
            variant='outlined'
            fullWidth
            name='grade'
            value={formData.grade}
            onChange={handleInputChange}
            error={Boolean(errors.grade)}
            helperText={errors.grade}
            sx={{ mt: 4 }}
          />
        </Grid>
        <Grid item xs={6} md={6}>
          <FormControl variant='outlined' fullWidth sx={{ mt: 4 }}>
            <InputLabel>Select Status</InputLabel>
            <Select
              label='Select Status'
              value={formData.selectedStatus}
              onChange={handleStatusChange}
              name='selectedStatus'
              error={Boolean(errors.selectedStatus)}
            >
              <MenuItem value=''>Select Status</MenuItem>
              <MenuItem value='active'>Active</MenuItem>
              <MenuItem value='inactive'>Inactive</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={6}>
          <TextField
            label='Description'
            variant='outlined'
            fullWidth
            multiline
            rows={4}
            name='description'
            value={formData.description}
            onChange={handleInputChange}
            style={{ marginTop: '16px' }}
          />
        </Grid>
        <Grid item xs={12}>
          <Button variant='contained' color='primary' onClick={handleAddGrade} sx={{ mt: 7 }}>
            Add
          </Button>
        </Grid>
      </Grid>
    </Container>
  )
}

export default AddNewGrade
