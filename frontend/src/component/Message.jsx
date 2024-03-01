import React from 'react'
import Navbar from './Navbar'
import "../component/Style/message.css"
import { Card, Stack, Typography } from '@mui/material' 
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import newmsg  from "../assets/newmsg.svg"
import MessageBox from './MessageBox';


import styled from '@emotion/styled'

const Message = () => {
  return (

    <Stack className='message' bgcolor=" #f4f2ee" height="100vh">
        <Navbar/>
        <Stack display="flex" justifyContent="center" flexDirection="row" alignItems="center" sx={{mt:3}}>
        <Stack>
          
        </Stack>
        <Stack width="312px" height="47px" display="flex" flexDirection="row" justifyContent="space-between" sx={{bgcolor:"white", borderWidth:'thin', border:"1px solid silver", borderRadius:"8px"}}>
          <Typography fontWeight="600" sx={{mt:1,pl:1}} >
            Messaging
          </Typography>
          <Stack display="flex" flexDirection="row" alignItems="center" gap="10px" paddingRight="10px" sx={{}}>
          <MoreHorizIcon/>
          <img className="newmsg" src={newmsg}></img>
          </Stack>
         
        </Stack>
        <Stack>
        <MessageBox/>
        </Stack>
        </Stack>
    </Stack>
  )
}

export default Message