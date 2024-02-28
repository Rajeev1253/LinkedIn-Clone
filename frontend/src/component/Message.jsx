import React from 'react'
import Navbar from './Navbar'
import "../component/Style/message.css"
import { Stack, Typography } from '@mui/material' 
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import newmsg  from "../assets/newmsg.svg"


import styled from '@emotion/styled'

const Message = () => {
  return (

    <Stack className='message' bgcolor=" #f4f2ee" height="100vh">
        <Navbar/>
        <Stack display="flex" justifyContent="center" flexDirection="row" alignItems="center" sx={{mt:3}}>
        <Stack width="312px" height="47px" display="flex" flexDirection="row" justifyContent="space-between" sx={{bgcolor:"white", borderStyle:"groove"}}>
          <Typography fontWeight="600" sx={{mt:1,pl:1}} >
            Messaging
          </Typography>
          <Stack display="flex" flexDirection="row" alignItems="center" gap="10px" paddingRight="10px">
          <MoreHorizIcon/>
          <img className="newmsg" src={newmsg}></img>
          </Stack>
        </Stack>
        
        <Stack width="469px"  height="47px" sx={{bgcolor:"white",borderStyle:"groove"}}>
          <Typography sx={{mt:1,pl:1}}>
          Username
          </Typography>
        </Stack>

        </Stack>
    </Stack>
  )
}

export default Message