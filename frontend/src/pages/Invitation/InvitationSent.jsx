import React from 'react'
import Navbar from '../../component/Navbar'
import { Box, Stack, Typography, Card,CardContent,Button} from '@mui/material'
import "./invitation.css"
import SettingsIcon from '@mui/icons-material/Settings';
import { Link } from 'react-router-dom'

const InvitationSent = () => {
  return (
    <div className='Invitation'>
       <Navbar/>
      <Stack
        display="flex"
        alignItems="center"
        bgcolor=" #f4f2ee"
        height="100vh"  
        marginTop="23px"
      >
        <Card
          sx={{
            width: "850px",
            bgcolor: "white",
            borderRadius: "12px ",
            marginTop: "20px",
          }}
        >
          <CardContent>
            <Stack display="flex" flexDirection="row" justifyContent="space-between" alignItems="center">
              <Typography paddingBottom="15px" alignItems="center">
                Manage invitations
              </Typography>
                <Button sx={{ width: "75px", height: "32px", color: "grey" }}>
                 <SettingsIcon/>
                  <hr/>
                </Button>
         
            </Stack>
            <Stack display="flex" flexDirection="row">
            <Link to="/invitation">
              <Button sx={{width:"72.33px", height:"39px"}}>Recieved</Button>
              </Link> 
             

             <Button sx={{width:"72.33px", height:"39px"}} >Sent</Button>
            
            </Stack>
          </CardContent>
        </Card>
        </Stack>
    </div>
  )
}

export default InvitationSent