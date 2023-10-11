import React from 'react'
import './Tabs.css'

const Tabs = () => (
    <ul className='nav nav-tabs'>
        <li className='nav-items'>
            <p className='nav-link mb-0 active'>Repositories</p>
        </li>
        <li className='nav-items'>
            <a className='nav-link mb-0' href='#'>Packages</a>
        </li>
        <li className='nav-items'>
            <a className='nav-link mb-0' href='#'>People</a>
        </li>
        <li className='nav-items'>
            <a className='nav-link mb-0' href='#'>Projects</a>
        </li>
    </ul>
);

export default Tabs;
