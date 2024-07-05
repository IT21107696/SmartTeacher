// import React from 'react'

// const subject = () => {
//   return <div>subject</div>
// }

// export default subject

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

// const AddNewSubject = () => {
//   const [selectedStatus, setSelectedStatus] = useState('')
//   const [subject, setSubject] = useState('')
//   const [description, setDescription] = useState('')

//   const handleStatusChange = event => {
//     setSelectedStatus(event.target.value)
//   }

//   const handleAddSubject = () => {
//     console.log('Subject:', subject)
//     console.log('Status:', selectedStatus)
//     console.log('Description:', description)
//   }

//   return (
//     <Container>
//       <AppBar position='static' sx={{ height: '80px' }}>
//         <Toolbar>
//           <h2>Add New Subject</h2>
//         </Toolbar>
//       </AppBar>

//       <tr></tr>
//       <label>Add New Subject</label>

//       <TextField label='Student ID' variant='outlined' margin='normal' style={{ marginRight: '10px' }} />

//       <FormControl variant='outlined' style={{ marginTop: '20px' }}>
//         <label>Select Status</label>
//         <Select label='Select Status' placeholder='Select Status' value={selectedStatus} onChange={handleStatusChange}>
//           <MenuItem value='active'>Active</MenuItem>
//           <MenuItem value='inactive'>Inactive</MenuItem>
//         </Select>
//       </FormControl>

//       <lable>Description</lable>
//       <TextField
//         label='Description'
//         variant='outlined'
//         fullWidth
//         multiline
//         rows={4}
//         value={description}
//         onChange={e => setDescription(e.target.value)}
//         style={{ marginRight: '30px' }}
//       />

//       <Button
//         variant='contained'
//         color='primary'
//         style={{ marginTop: '20px', marginLeft: '1000px', width: '200px', height: '40px' }}
//         onClick={handleAddSubject}
//       >
//         Add
//       </Button>
//     </Container>
//   )
// }

// export default AddNewSubject

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
  Grid,
  Box
} from '@mui/material'

const AddNewSubject = () => {
  const [formData, setFormData] = useState({
    subject: '',
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

  const handleAddSubject = () => {
    const newErrors = {}

    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required'
    }

    if (!formData.selectedStatus) {
      newErrors.selectedStatus = 'Please select a status'
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
    } else {
      // Form is valid, you can proceed with your logic here
      console.log('Subject:', formData.subject)
      console.log('Status:', formData.selectedStatus)
      console.log('Description:', formData.description)
    }
  }

  return (
    <Container>
      <AppBar position='static' sx={{ height: '70px' }}>
        <Toolbar>
          <h2>Add New Subject</h2>
        </Toolbar>
      </AppBar>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <TextField
            label='Subject'
            variant='outlined'
            fullWidth
            size='small'
            name='subject'
            value={formData.subject}
            onChange={handleInputChange}
            error={Boolean(errors.subject)}
            helperText={errors.subject}
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
          <Button
            variant='contained'
            color='primary'
            width='50%'
            onClick={handleAddSubject}
            style={{ marginTop: '16px' }}
            sx={{ mt: 7 }}
          >
            Add
          </Button>
        </Grid>
      </Grid>
    </Container>
  )
}

export default AddNewSubject
