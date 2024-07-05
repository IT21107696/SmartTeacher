// import React from 'react'

// const teacher = () => {
//   return <div>teacher</div>
// }

// export default teacher

// import React, { useState } from 'react'
// import { Container, AppBar, Toolbar, Typography, FormControl, Select, MenuItem, Button, TextField } from '@mui/material'

// const AddNewTeacher = () => {
//   const [selectedStatus, setSelectedStatus] = useState('')

//   const handleStatusChange = event => {
//     setSelectedStatus(event.target.value)
//   }

//   return (
//     <Container>
//       <AppBar position='static' sx={{ height: '80px' }}>
//         <Toolbar>
//           <h2>Add New Teacher</h2>
//         </Toolbar>
//       </AppBar>

//       <table>
//         <tr>
//           <td>
//             <div
//               style={{
//                 color: 'primary',
//                 marginTop: '20px',
//                 display: 'flex',
//                 flexDirection: 'row',
//                 alignItems: 'center',
//                 justifyContent: 'space-between',
//                 position: 'relative'
//               }}
//             >
//               <label>Teacher Name</label>
//               <br></br>
//               <TextField
//                 label='Teacher Name'
//                 variant='outlined'
//                 onChange={e => setDescription(e.target.value)}
//                 style={{ width: '35%' }}
//               />

//               <FormControl variant='outlined' style={{ width: '35%' }}>
//                 <label>Status</label>

//                 <Select
//                   label='Select Status'
//                   placeholder='Select Status'
//                   value={selectedStatus}
//                   onChange={handleStatusChange}
//                 >
//                   <MenuItem value=''>
//                     <em>Select Status</em>
//                   </MenuItem>
//                   <MenuItem value='active'>Active</MenuItem>
//                   <MenuItem value='inactive'>Inactive</MenuItem>
//                 </Select>
//               </FormControl>

//               <div
//                 style={{
//                   position: 'absolute',
//                   top: 100,
//                   right: 0
//                 }}
//               >
//                 <Button
//                   variant='contained'
//                   color='primary'
//                   style={{ marginTop: '20px', marginLeft: '1000px', width: '200px', height: '40px' }}
//                 >
//                   Add
//                 </Button>
//               </div>
//             </div>
//           </td>
//         </tr>
//       </table>
//     </Container>
//   )
// }

// export default AddNewTeacher

import React, { useState } from 'react'
import {
  Container,
  AppBar,
  Toolbar,
  FormControl,
  Select,
  MenuItem,
  Button,
  TextField,
  Grid,
  InputLabel
} from '@mui/material'

const AddNewTeacher = () => {
  const [formData, setFormData] = useState({
    teacherName: '',
    selectedStatus: ''
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

  const handleSubmit = () => {
    const newErrors = {}

    if (!formData.teacherName.trim()) {
      newErrors.teacherName = 'Teacher Name is required'
    }

    if (!formData.selectedStatus) {
      newErrors.selectedStatus = 'Please select a status'
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
          <h2>Add Teacher</h2>
        </Toolbar>
      </AppBar>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <TextField
            label='Teacher Name'
            variant='outlined'
            fullWidth
            name='teacherName'
            value={formData.teacherName}
            onChange={handleInputChange}
            error={Boolean(errors.teacherName)}
            helperText={errors.teacherName}
            style={{ marginTop: '16px' }}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <FormControl variant='outlined' fullWidth sx={{ mt: 4 }}>
            <InputLabel>Select Status</InputLabel>
            <Select
              label='Select Status'
              value={formData.selectedStatus}
              onChange={handleStatusChange}
              name='selectedStatus'
              error={Boolean(errors.selectedStatus)}

              // style={{ marginTop: '16px' }}
            >
              <MenuItem value=''>Select Status</MenuItem>
              <MenuItem value='active'>Active</MenuItem>
              <MenuItem value='inactive'>Inactive</MenuItem>
            </Select>
          </FormControl>
        </Grid>

        <Grid item xs={12}>
          <Button variant='contained' color='primary' onClick={handleSubmit} style={{ marginTop: '16px' }}>
            Add
          </Button>
        </Grid>
      </Grid>
    </Container>
  )
}

export default AddNewTeacher
