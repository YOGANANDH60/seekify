import React from 'react'
import './header.css'

const Headerr = () => {
  const headers=[{
    id:"1",
    name:"Home",
  },
  {
    id:"2",
    name:"Home",
  },
  {
    id:"3",
    name:"Home",
  },
  {
    id:"4",
    name:"Home",
  }
]
  return (
    <div className='header'>
        <div className='logo'>
            <h1><a href='#'>Seekify</a></h1>
        </div>
        <div className='navbar'>
            <p>Home</p>
            <p>Job</p>
            <p>Internships</p>
            <p>Recruiter's Login</p>
            <p>Student's Login</p>
        </div>
    </div>
  )
}

export default Headerr