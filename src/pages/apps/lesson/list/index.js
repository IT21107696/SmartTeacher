// import React from 'react'

// const lessonList = () => {
//   return <div>lessonList</div>
// }

// export default lessonList
// import React from 'react'
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
//   Box
// } from '@mui/material'

// const LessonList = () => {
//   return (
//     <Container>
//       {/* <AppBar position='static' sx={{ height: '80px' }}> */}
//       <table>
//         <Toolbar>
//           <h2>
//             <th>Lesson List</th>
//           </h2>
//         </Toolbar>
//         {/* </AppBar> */}

//         <div
//           style={{
//             marginTop: '20px',
//             display: 'flex',
//             flexDirection: 'row',
//             alignItems: 'center',
//             justifyContent: 'space-between'
//           }}
//         >
//           <tr>
//             <td>
//               <TextField label='Title' variant='outlined' style={{ width: '200px' }} />
//             </td>

//             <td>
//               <FormControl variant='outlined' style={{ width: '200px' }}>
//                 <Select label='Select Class' defaultValue=''>
//                   <MenuItem value='class1'>2021 English Medium Paper Class</MenuItem>
//                   <MenuItem value='class2'>2021 Paper Class English Medium</MenuItem>
//                   <MenuItem value='class3'>2021 Revision</MenuItem>
//                   <MenuItem value='class4'>2021 Theory</MenuItem>
//                   <MenuItem value='class1'>2022 English Medium Revision</MenuItem>
//                   <MenuItem value='class2'>2022 Paper Class</MenuItem>
//                   <MenuItem value='class3'>2022 Revision</MenuItem>
//                   <MenuItem value='class4'>2022 Theory</MenuItem>
//                   <MenuItem value='class1'>2023 English Medium Revision</MenuItem>
//                   <MenuItem value='class2'>2023 English Medium Theory</MenuItem>
//                   <MenuItem value='class3'>2023 Express</MenuItem>
//                   <MenuItem value='class4'>2023 Live Paper Class</MenuItem>
//                   <MenuItem value='class1'>2023 Theory</MenuItem>
//                   <MenuItem value='class2'>2023 Revision</MenuItem>
//                   <MenuItem value='class3'>2023 Theory</MenuItem>
//                   <MenuItem value='class4'>2024 English Medium Theory</MenuItem>
//                   <MenuItem value='class1'>2024 Theory</MenuItem>
//                   <MenuItem value='class2'>2025 Theory</MenuItem>
//                   <MenuItem value='class3'>Econ Paper Class 2021</MenuItem>
//                 </Select>
//               </FormControl>
//             </td>

//             <td>
//               <FormControl variant='outlined' style={{ width: '200px' }}>
//                 <Select label='Select Content' defaultValue=''>
//                   <MenuItem value='content1'>Article Lesson</MenuItem>
//                   <MenuItem value='content2'>Video Lesson</MenuItem>
//                 </Select>
//               </FormControl>
//             </td>

//             <td>
//               <FormControl variant='outlined' style={{ width: '200px' }}>
//                 <Select label='Select Upload Type' defaultValue=''>
//                   <MenuItem value='upload1'>Upload</MenuItem>
//                   <MenuItem value='upload2'>Embed External Video</MenuItem>
//                 </Select>
//               </FormControl>
//             </td>
//           </tr>

//           <tr>
//             <td>
//               <Button variant='contained' color='primary'>
//                 Search
//               </Button>
//             </td>
//           </tr>
//         </div>
//       </table>
//     </Container>
//   )
// }

// export default LessonList
// import React from 'react'
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
//   Box
// } from '@mui/material'

// const LessonList = () => {
//   return (
//     <Container>
//       <AppBar position='static'>
//         <Toolbar>
//           <h2>Lesson List</h2>
//         </Toolbar>
//       </AppBar>

//       <table>
//         <tr>
//           <td>
//             <TextField label='Title' variant='outlined' style={{ width: '200px', margin: '20px' }} />
//           </td>

//           <td>
//             <FormControl variant='outlined' style={{ width: '200px' }}>
//               <Select label='Select Class' defaultValue=''>
//                 <MenuItem value='class1'>2021 English Medium Paper Class</MenuItem>
//                 <MenuItem value='class2'>2021 Paper Class English Medium</MenuItem>
//                 <MenuItem value='class3'>2021 Revision</MenuItem>
//                 <MenuItem value='class4'>2021 Theory</MenuItem>
//                 <MenuItem value='class1'>2022 English Medium Revision</MenuItem>
//                 <MenuItem value='class2'>2022 Paper Class</MenuItem>
//                 <MenuItem value='class3'>2022 Revision</MenuItem>
//                 <MenuItem value='class4'>2022 Theory</MenuItem>
//                 <MenuItem value='class1'>2023 English Medium Revision</MenuItem>
//                 <MenuItem value='class2'>2023 English Medium Theory</MenuItem>
//                 <MenuItem value='class3'>2023 Express</MenuItem>
//                 <MenuItem value='class4'>2023 Live Paper Class</MenuItem>
//                 <MenuItem value='class1'>2023 Theory</MenuItem>
//                 <MenuItem value='class2'>2023 Revision</MenuItem>
//                 <MenuItem value='class3'>2023 Theory</MenuItem>
//                 <MenuItem value='class4'>2024 English Medium Theory</MenuItem>
//                 <MenuItem value='class1'>2024 Theory</MenuItem>
//                 <MenuItem value='class2'>2025 Theory</MenuItem>
//                 <MenuItem value='class3'>Econ Paper Class 2021</MenuItem>
//               </Select>
//             </FormControl>
//           </td>

//           <td>
//             <FormControl variant='outlined' style={{ width: '200px' }}>
//               <Select label='Select Content' defaultValue=''>
//                 <MenuItem value='content1'>Article Lesson</MenuItem>
//                 <MenuItem value='content2'>Video Lesson</MenuItem>
//               </Select>
//             </FormControl>
//           </td>

//           <td>
//             <FormControl variant='outlined' style={{ width: '200px' }}>
//               <Select label='Select Upload Type' defaultValue=''>
//                 <MenuItem value='upload1'>Upload</MenuItem>
//                 <MenuItem value='upload2'>Embed External Video</MenuItem>
//               </Select>
//             </FormControl>
//           </td>

//           <td>
//             <Button variant='contained' color='primary'>
//               Search
//             </Button>
//           </td>
//         </tr>
//       </table>
//     </Container>
//   )
// }

// export default LessonList
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

const LessonList = () => {
  const [searchText, setSearchText] = useState('')
  const [selectedClass, setSelectedClass] = useState('')
  const [selectedContent, setSelectedContent] = useState('')
  const [selectedUploadType, setSelectedUploadType] = useState('')
  const [errors, setErrors] = useState({})

  const handleSearch = () => {
    const newErrors = {}

    if (!searchText.trim()) {
      newErrors.searchText = 'Title is required'
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
    } else {
      console.log('Search for:', searchText)
      console.log('Selected Class:', selectedClass)
      console.log('Selected Content:', selectedContent)
      console.log('Selected Upload Type:', selectedUploadType)
    }
  }

  return (
    <Container>
      <AppBar position='static' sx={{ height: '70px' }}>
        <Toolbar>
          <h2>Lesson List</h2>
        </Toolbar>
      </AppBar>

      <Grid container spacing={2}>
        <Grid item xs={6} md={3}>
          <TextField
            sx={{ mt: 4 }}
            label='Title'
            variant='outlined'
            fullWidth
            value={searchText}
            onChange={e => setSearchText(e.target.value)}
            error={Boolean(errors.searchText)}
            helperText={errors.searchText}
          />
        </Grid>

        <Grid item xs={6} md={3}>
          <FormControl variant='outlined' fullWidth sx={{ mt: 4 }}>
            <InputLabel>Select Class</InputLabel>
            <Select label='Select Class' value={selectedClass} onChange={e => setSelectedClass(e.target.value)}>
              <MenuItem value='class1'>2021 English Medium Paper Class</MenuItem>
              <MenuItem value='class2'>2021 Paper Class English Medium</MenuItem>
              {/* Add vn*/}
            </Select>
          </FormControl>
        </Grid>

        <Grid item xs={6} md={3}>
          <FormControl variant='outlined' fullWidth sx={{ mt: 4 }}>
            <InputLabel>Select Content</InputLabel>
            <Select label='Select Content' value={selectedContent} onChange={e => setSelectedContent(e.target.value)}>
              <MenuItem value='content1'>Article Lesson</MenuItem>
              <MenuItem value='content2'>Video Lesson</MenuItem>
              {/* Add ppp*/}
            </Select>
          </FormControl>
        </Grid>

        <Grid item xs={6} md={3}>
          <FormControl variant='outlined' fullWidth sx={{ mt: 4 }}>
            <InputLabel>Select Upload Type</InputLabel>
            <Select
              label='Select Upload Type'
              value={selectedUploadType}
              onChange={e => setSelectedUploadType(e.target.value)}
            >
              <MenuItem value='upload1'>Upload</MenuItem>
              <MenuItem value='upload2'>Embed External Video</MenuItem>
              {/* Add ppp */}
            </Select>
          </FormControl>
        </Grid>

        <Grid item xs={12} md={4}>
          <Button variant='contained' color='primary' onClick={handleSearch} sx={{ mt: 4 }}>
            Search
          </Button>
        </Grid>
      </Grid>
    </Container>
  )
}

export default LessonList
