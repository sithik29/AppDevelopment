import React from 'react'
import spinner from '../image/spinner.gif'
import './Loading.css'

const Loading = ()=>(
<div className="loading">
    <img src={spinner} alt='Loading'/>
</div>
);

export default Loading;