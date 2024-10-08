import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import { useContext } from 'react'
import { MediaContext } from '../../../store/Media-Item'
import Post from './Post'
import Loader from './Loader';
import { RxCross1 } from "react-icons/rx";

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));


const PostList = () => {
    const { post, fetching ,deletePost} = useContext(MediaContext)  //Context API
    
    return (
        <>
            <Typography align='center' mt={2} mb={2} variant="h4" color="text.secondary">
                Post List
            </Typography>
            {
                fetching && <Loader />
            }
            {
                !fetching && <Box  sx={{ flexGrow: 1, maxWidth: 1000, margin: '0 auto', backgroundColor: "#dbdbf3", padding: '10px', borderRadius: '5px', maxHeight: '700px', overflow: 'auto' ,marginBottom:"50px"}}>

                    <Grid container spacing={2}>
                        {
                            post.map((item, i) => (
                                <Grid key={i} item xs={4}>
                                    <Item className="position-relative">
                                    <span title='Delete' className="position-absolute top-0 start-100 translate-middle badge rounded-pill text-danger" style={{cursor:'pointer'}}>
                                        <RxCross1 onClick={()=>deletePost(item.id)}/>
                                        <span className="visually-hidden">unread messages</span>
                                    </span>
                                        <Post post={item} />
                                    </Item>
                                </Grid>
                            ))
                        }
                    </Grid>
                </Box>
            }

        </>

    );
}

export default PostList

