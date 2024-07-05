// import React from 'react'

// const smartCashier = () => {
//   return <div>smartCashier</div>
// }

// export default smartCashier
// import React from 'react'
// import { AppBar, Toolbar, TextField, Container } from '@mui/material'
// import { Box } from '@mui/system'

// const SmartCashier = () => {
//   return (
//     <Container>
//       <AppBar position='static' sx={{ height: '70px' }}>
//         <Toolbar>
//           <h2>Smart Cashier</h2>
//         </Toolbar>
//       </AppBar>

//       <table>
//         <tr>
//           <td>
//             <TextField label='Student ID' variant='outlined' margin='normal' style={{ marginRight: '10px' }} />

//             <TextField label='Mobile' variant='outlined' margin='normal' style={{ marginRight: '10px' }} />

//             <TextField label='Student Name' variant='outlined' margin='normal' style={{ marginRight: '10px' }} />
//           </td>
//         </tr>
//       </table>
//     </Container>
//   )
// }

// export default SmartCashier

import React, { useState } from 'react'
import { AppBar, Toolbar, TextField, Container, Grid, Typography, Button } from '@mui/material'

const SmartCashier = () => {
  const [formData, setFormData] = useState({
    studentId: '',
    mobile: '',
    studentName: ''
  })

  const [errors, setErrors] = useState({})

  const handleChange = e => {
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

  const validateMobileNumber = mobile => {
    const mobilePattern = /^\d{10}$/

    return mobilePattern.test(mobile)
  }

  const handleSubmit = () => {
    const newErrors = {}

    if (!formData.studentId) {
      newErrors.studentId = 'Student ID is required'
    }

    if (!formData.mobile) {
      newErrors.mobile = 'Mobile is required'
    } else if (!validateMobileNumber(formData.mobile)) {
      newErrors.mobile = 'Invalid mobile number'
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
          <h2> Smart Cashier</h2>
        </Toolbar>
      </AppBar>

      <Grid container spacing={2}>
        <Grid item xs={6} md={4}>
          <TextField
            label='Student ID'
            variant='outlined'
            margin='normal'
            fullWidth
            name='studentId'
            value={formData.studentId}
            onChange={handleChange}
            error={Boolean(errors.studentId)}
            helperText={errors.studentId}
            sx={{ mt: 4 }}
          />
        </Grid>
        <Grid item xs={6} md={4}>
          <TextField
            label='Mobile'
            variant='outlined'
            margin='normal'
            fullWidth
            name='mobile'
            value={formData.mobile}
            onChange={handleChange}
            error={Boolean(errors.mobile)}
            helperText={errors.mobile}
            sx={{ mt: 4 }}
          />
        </Grid>
        <Grid item xs={6} md={4}>
          <TextField
            label='Student Name'
            variant='outlined'
            margin='normal'
            fullWidth
            name='studentName'
            value={formData.studentName}
            onChange={handleChange}
            sx={{ mt: 4 }}
          />
        </Grid>
      </Grid>
      <Button variant='contained' color='primary' onClick={handleSubmit} sx={{ mt: 4 }}>
        Submit
      </Button>
    </Container>
  )
}

export default SmartCashier
