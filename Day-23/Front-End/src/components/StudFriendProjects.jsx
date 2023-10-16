import { Box, Button, Card, CardActionArea, CardContent, CardHeader, IconButton, TextField, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import UserService from "../api/Axios"
import ProjectNotFound from '../image/ProjectFound.svg'
import { Label } from '@mui/icons-material'
import { useNavigate } from 'react-router-dom'

export default function StudFriendProjects(props) {

    const [projects,setProjecs] = useState([])
    const [nullProject,SetNullProject] = useState(false)
    const navigate = useNavigate();

    useEffect(()=>{
        const res = UserService.getAllProjects()
        res.then(data => {
            // console.log(data)    
            setProjecs(data)

            console.log(!projects);

            if(!projects){
                SetNullProject(true)
            }
        }
        )   
    },[])
    

   
    return (
        (  !nullProject == true ?
            <Box  sx={{ width:'100%', mt: '0px', height: 'calc(100vh - 95px)' }}>
            <Box  sx={{ m: 5, display: 'flex-box', gap: 5 ,flexWrap:"wrap",width:"90%"}}>

                <Box sx={{display:'flex',justifyContent:'space-between'}}>
                

                    <Box sx={{display:'flex',maxWidth:'400px'}}>
                        <Typography sx={{m:'20px 20px 0px 0px',color:'black',fontWeight:'500',fontFamily:'',fontSize:"17px"}}>Search for Project :</Typography>
                        <TextField label="Search" variant="outlined" sx={{borderRadius:"100px"}} type="search"/>
                    </Box>
                </Box>
                
                <Box sx={{position:'relative',width:'100%', mt: '0px',m:5,flexDirection:'row', display: 'flex', gap: 5 ,flexWrap:"wrap"}}>
                    {
                        projects?.map((project,id)=>(
                        <Card sx={{ width: 345, maxHeight: 150 }}>
                                <CardActionArea>
                            <CardHeader
                                title={project.projectname}
                                
                                subheader={
                                    <Typography mt={2}>{project.description}</Typography>
                                }
                            />
                            
                            <CardContent>
                                <Typography variant='body2'>
                                    Grade : Not Graded
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>

                        ))
                    
                    }
                </Box>
            
                
            </Box>
        </Box>
        :

            <div className="no-project-content" style={{ width:'100%', mt: '0px',display:'flex',flexDirection:'column',backgroundColor:""}}>
                <img src={ProjectNotFound} alt="No Projects Found" style={{width:'30%',left:'33%',top:'25px',position:'relative'}}/>
                <div className="project-content" style={{textAlign:'center',position:'relative',marginTop:'25px',color:'rgb(var(--zpOnDataLight))'}}>
                    <div class="emptyscreen h5  ">Your Friend has No project?</div>
                </div>
            </div>

        )
    );
}
