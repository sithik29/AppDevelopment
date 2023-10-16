import { Box, Card, CardActionArea, CardContent, CardHeader, IconButton, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import UserService from "../api/Axios"
import EastIcon from '@mui/icons-material/East';

export default function AdminProjects(props) {

    const [projects,setProjecs] = useState([])

    useEffect(()=>{
        const res = UserService.getAllProjects()
        res.then(data => {
            console.log(data)
            setProjecs(data)
        })
    },[])
    

    return (
        <Box  sx={{ width:'100%', mt: '0px', height: 'calc(100vh - 95px)' }}>
            <Box  sx={{ m: 5, display: 'flex', gap: 5 ,flexWrap:"wrap",width:"100%"}}>
                
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
                                
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>

                    ))
                
                }
                
            </Box>
        </Box>
    )
}
