import { Avatar, Box, Stack, Typography } from '@mui/material'
import React from 'react'

const Chat = () => {
  return (
    <Box>
    <Stack direction={"row"} sx={{m:1}}>

        <Avatar></Avatar>
        <Stack>

        <Typography sx={{ml:1}}>username</Typography>
        <Typography sx={{ml:1, width:"365px"}} >hlo</Typography>
        </Stack>
    </Stack>
    </Box>
  )
}

export default Chat