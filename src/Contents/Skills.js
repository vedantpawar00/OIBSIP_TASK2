import React from 'react'

import ProgressBar from 'react-bootstrap/ProgressBar';

import './Skills.css';
import 'bootstrap/dist/css/bootstrap.css'

export const Skills = () => {
  return (

    <div className='skill'>

        <h2 className='h-skill'> Skills  </h2>

          {/* const now = 60; */}
          {/* return  */}
          Java (core, advanced)
          <ProgressBar now={80} label={`${80}%`} /><br/>
          Spring Framework
          <ProgressBar now={40} label={`${40}%`} /><br/>
          Javascript
          <ProgressBar now={50} label={`${50}%`} /><br/>
          React JS, Node JS Express
          <ProgressBar now={60} label={`${60}%`} /><br/>
          HTML, CSS, Bootstrap
          <ProgressBar now={75} label={`${75}%`} /><br/>
          SQL, MySQL, MongoDB
          <ProgressBar now={70} label={`${60}%`} /><br/>

          


          {/* function WithLabelExample() {
            const now = 60;
            return <ProgressBar now={now} label={`${now}%`} />;
          } */}
          {/* return <ProgressBar animated now={45} />; */}
          
    </div>


  )
}
