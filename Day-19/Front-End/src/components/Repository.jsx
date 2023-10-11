import React from 'react'
import './Repository.css'

const Repository = ({repo,user})=> { 
    console.log(1)
    console.log(repo)
    console.log(1)
    return(
     <div className="repo">
        <div>
            <div className="title">
                <i className="fa fa-book pr-1"/>
                <a href="#" ><span>{repo.name}</span></a>
            </div>
            <span className='desc'>{repo.description?repo.description:"desc"}</span>
        </div>
        <div className='d-flex'>
            <div className="subitem">
                <i className='fa fa-code pr-1'/>
                <span>{repo.language?repo.language:"Language"}</span>
            </div>
            <div className="subitem">
                <i className='fa fa-star pr-1'/>
                <span>{repo.stargazers_count}</span>
            </div>
        </div>
     </div>
    );
};
export default Repository;