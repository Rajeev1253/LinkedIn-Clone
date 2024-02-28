import React, { useEffect } from 'react'
import Navbar from '../../component/Navbar'
import { Box, Stack, Typography, Card,CardContent,Button} from '@mui/material'
import "./invitation.css"
import SettingsIcon from '@mui/icons-material/Settings';
import { Link } from 'react-router-dom'
import Request from '../../component/Request';
import { useDispatch, useSelector } from 'react-redux';
import { gettRequest } from '../../features/connection/connectionAction';
import UserCard from '../../component/UserCard';
const InvitationPage = () => {
  const token = useSelector((state)=>state.auth.userToken)
  const dispatch= useDispatch();
  useEffect(()=>{
    dispatch(gettRequest(token))
  },[dispatch])
  const connection = useSelector((state)=>state.connection)
  console.log("connection",connection) 
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
              <Button sx={{width:"72.33px", height:"39px"}}>Recieved</Button>
             <Link to="/invitationSent">

             <Button sx={{width:"72.33px", height:"39px"}} >Sent</Button>
             </Link> 
            </Stack>
          </CardContent>
         <Stack>
         {/* {connection?.connection?.map((props) => (
            <Request props={props} />
          ))} */}
         </Stack>
         
        </Card>
        </Stack>
    </div>



  )
        }
  export default InvitationPage;