import React, { useEffect, useState } from 'react'
import Tabs from '../components/Tabs'
import Navbar from '../components/Navbar'
import Userinfo from '../components/Userinfo'
import Repositories from '../components/Repositories'
import { getUserData,getUserRepo } from '../api/Api'
import { useParams } from 'react-router-dom'
import Loading from '../components/Loading'

export default function UserPage({ username, setUsername }) {
    
    const [user,setUser] = useState()
    const [repo,setRepo] = useState([])

    const {userName} = useParams()

    useEffect(() => {
        fetchUser()
        fetchRepo()
    },[])

    async function fetchUser(){
        const {data} = await getUserData(userName)
        setUser(data)
    }
    
    async function fetchRepo(){
        const {data} = await getUserRepo(userName)
        setRepo(data)
    }

    return (
        <>
            {user ? (
                <>
                    <Navbar user={user} username={username} setUsername={setUsername}/>
                    <div className="container">
                        <Userinfo user={user}/>
                        <Tabs repo = {repo} user={user}/>
                        <Repositories repo={repo} user={user}/> 
                    </div>
                </>
            ):(<Loading />)}
        </>
    );
}
