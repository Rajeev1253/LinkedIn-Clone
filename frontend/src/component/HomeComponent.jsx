import React, { useEffect } from 'react'
import Navbar from './Navbar'
import { useDispatch, useSelector } from 'react-redux'
import { fetchPost } from '../features/post/postAction';
import Card2 from './Card2';
import "./Style/Home.css"
import { Box, Card, CardContent } from '@mui/material';

const HomeComponent = () => {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.auth.userToken);

  useEffect(()=>{
    dispatch(fetchPost(token))
  },[dispatch])

  const post = useSelector((state) => state.post.post);
  const isLoading = useSelector((state) => state.post.isLoading);
  const error = useSelector((state) => state.post.error);
  if (isLoading) {
    return "..isLoading1";
  }
  if (error) {
    return error;
  }
  console.log("post",post)
  return (
    <div className='homeComponent'>
    <Navbar/>
    <Box width="555px" component='div'  >
    
      <Card>
      <CardContent>

      </CardContent>
      </Card>
    </Box>
    <div className="data-box">
        <div className="data">
            {post?.data?.map((post) => (
              <Card2
                title={post.title }
              />

             
           
            
            ))}
        
        </div>
      </div>
        
    </div>
  )
}

export default HomeComponent    	