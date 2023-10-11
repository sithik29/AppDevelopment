import React from 'react'
import Repository from './Repository';
import './Repository.css'


const Repositories = ({repo,user})=> { 

    const repositories = Array.isArray(repo)?repo:[];

    return( 
    <section className='repositories'>
        {
           repositories.map((repo)=>(
            <Repository key={repo.id} repo={repo} user={user} />
           ))
        }
    </section>
    );
};
export default Repositories;

/*import React from 'react';
import Repository from './Repository';
import './Repository.css';

const Repositories = ({ repo, user }) => {
  // Check if repo is an array, and provide an empty array if it's not valid
  const repositories = Array.isArray(repo) ? repo : [];

  return (
    <section className='repositories'>
      {repositories.map((repository) => (
        <Repository key={repository.id} repository={repository} user={user} />
      ))}
    </section>
  );
};

export default Repositories;
*/ 