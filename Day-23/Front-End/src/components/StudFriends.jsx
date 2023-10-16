import { Box, Button, Card, CardActionArea, CardContent, CardHeader, IconButton, TextField, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import UserService from "../api/Axios"
import EastIcon from '@mui/icons-material/East';
import NoFriends from '../image/NoFriends.svg'
import { useNavigate } from 'react-router-dom';

export default function StudFriends() {

    const [friends,setFriends] = useState([])
    const [noFriends,setNoFriends] = useState(false)

    const navigate = useNavigate();

    const hanleFriendProject = () => {
        navigate('/student/friend/project')
    }

    useEffect(()=>{
        const res = UserService.getAllUser()
        res.then(data => {
            setFriends(data)

            if(!friends)
                setNoFriends(true)
        })
    },[])
    

    return (
        ( noFriends ?
            <Box  sx={{ width:'100%', mt: '0px', height: 'calc(100vh - 95px)' }}>
                <Box  sx={{ m: 5, display: 'flex-box', gap: 5 ,flexWrap:"wrap",width:"90%"}}>

                

                    <Box sx={{display:'flex',justifyContent:'space-between',flexDirection:'row-reverse',width:'100%'}}>
                        <Button  sx={{color:'white',backgroundColor:'red',margin:'10px',fontSize:'12px', padding:'10px',":hover":{backgroundColor:'blue'}}} onClick={()=>{navigate('/student/addfriend')}} >
                            Add New Friend 
                        </Button>
                        <Box sx={{display:'flex'}}>
                            <Typography sx={{m:'20px 20px 0px 0px',color:'black',fontWeight:'500',fontFamily:'',fontSize:"17px"}}>Search for Friends :</Typography>
                            <TextField  label="Search" variant="outlined" sx={{borderRadius:"100px"}}  type="search"/>
                        </Box>
                        
                    </Box>
                    
                    <Box sx={{position:'relative',width:'100%', mt: '0px',m:5,flexDirection:'row', display: 'flex', gap: 5 ,flexWrap:"wrap"}}>
                    {
                        friends?.map((friend,id)=>(
                            <div className="friends" onClick={hanleFriendProject} >
                                <Card sx={{ width: 345, maxHeight: 150 }}>
                        <CardActionArea>
                            <CardHeader
                                title={friend.name}
                                
                                subheader={
                                    <Typography mt={2}>{friend.email}</Typography>
                                }
                            />
                            
                            <CardContent>
                                <Typography variant='body2'>
                                    
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                            </div>

                        ))
                    
                    }
                    </Box>
                
                    
                </Box>
            </Box>
            : 
           
            <div className="no-project-content" style={{ width:'100%', mt: '0px',display:'flex',flexDirection:'column',backgroundColor:""}}>
            <img src={NoFriends} alt="No Projects Found" style={{width:'20%',left:'40%',top:'34px',position:'relative'}}/>
            <div className="project-content" style={{textAlign:'center',position:'relative',marginTop:'45px',color:'rgb(var(--zpOnDataLight))'}}>
                <div class="emptyscreen h5  ">It's Sad to be alone</div>
                <div class="emptyscreen h5">Go ahead and Add New Homie.</div>
                <Button  sx={{color:'white',backgroundColor:'red',margin:'10px', padding:'10px',":hover":{backgroundColor:'blue'}}} onClick={()=>{}} >Add Friend
                 </Button>
            </div>
        </div>
        )
    )
}
