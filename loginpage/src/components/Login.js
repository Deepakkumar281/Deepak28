import React from 'react';
import './Login.css';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';


function Login () {
    return(
        <div>
            <h1>Hiiiii</h1>
            <label>Name</label>
            <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="outlined-basic" label="name" variant="outlined" />
     
    </Box>

        </div>
    )
}
export default Login;
i
/////////