import { Box, Card, CardActionArea, CardContent, CardHeader, IconButton, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import UserService from "../api/Axios"
import EastIcon from '@mui/icons-material/East';

export default function AdminUser(props) {

    const [user,setuser] = useState([])

    useEffect(()=>{
        const res = UserService.getAllUser()
        res.then(data => {
            console.log(data)
            setuser(data)
        })
    },[])
    

    return (
        <Box  sx={{ width:'100%', mt: '0px', height: 'calc(100vh - 95px)' }}>
            <Box  sx={{ m: 5, display: 'flex', gap: 5 ,flexWrap:"wrap",width:"100%"}}>
                
                {
                    user?.map((user,id)=>(
                        <Card sx={{ width: 345, maxHeight: 150 }}>
                    <CardActionArea>
                        <CardHeader
                            title={user.name}
                            
                            subheader={
                                <Typography mt={2}>{user.email}</Typography>
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
