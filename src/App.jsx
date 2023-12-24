import styled from '@emotion/styled';
import { Box, Button, Stack } from '@mui/material';
import { useState } from 'react';
import './App.css';
import Feed from './Components/Feed';
import Rightbar from './Components/Rightbar';
import Sidebar from './Components/Sidebar';
function App() {
  const [count, setCount] = useState(0)
  const handleClick = ()=>{
    alert("Hello")
  }
  const BlueButton = styled(Button)(({theme})=>({
    backgroundColor:theme.palette.otherColor.main,
    color:"#888",
    margin:5,
    
    "&:hover":{
      backgroundColor:theme.palette.primary.light
    }
  }))
  return (
    <div>
     <Box>
      <Stack direction="row" spacing={5} >
      <Sidebar/>
      <Feed/>
      <Rightbar/>
      </Stack>
      </Box>
    </div>
  )
}

export default App
