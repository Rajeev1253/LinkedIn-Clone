import React from 'react'
import { Stack, Typography } from '@mui/material' 
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined';

const MessageBox = () => {
  return (
    <Stack width="469px"  direction="row"  justifyContent="space-between" alignItems={"center"} height="47px" sx={{bgcolor:"white", borderWidth:'thin', border:"1px solid silver", borderRadius:"4px",mr:"5px", position:"relative" ,right:"4px"}}>

          <Typography  fontSize= "14px" sx={{mb:3 ,p:1}}>
          Username
          </Typography>
          <Stack direction="row" gap="10px" paddingRight='10px' color="gray">
          <MoreHorizIcon/> 
          <StarBorderOutlinedIcon/>
          </Stack>
        </Stack>

  )
}

export default MessageBox