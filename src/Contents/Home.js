import React from 'react'

import ProgressBar from 'react-bootstrap/ProgressBar';

import './Home.css';
import 'bootstrap/dist/css/bootstrap.css'

import vect from "../Pics/vect.png";
import pic from "../Pics/profile.png";



export const Home = () => {
  return (
    <div>

{/* 1st top part:- Hi, describe, photo... */}
    <div className='intro'>
      
      <div className='i-left'>
        <div className='i-name'>
          <span>Hi! I am</span>
          <span>Vedant Pawar</span>
          <span>  I'm currently student, studying in the T.Y. CS Engineering. 
            Specialzed in java, HTML, CSS, React JS and many applications.
                  I'm a developer, and besides an OpenSource enthusiast.
                Energetic and self-motivated college student. 
                Aim to have a good job to acquire industrial 
                experience and new technical knowledge.</span>
        </div>
        
        <button className='i-button'> Hire me </button>
        <button className='i-button'> Resume </button>

      </div>
      
      <div className='i-right'>

        <img className='vect' src={vect} alt="vectoryellow.."/>
        <img className='pic' src={pic} alt="logo.."/>

      </div>

    </div>
    

{/* 2nd part:- Skills  */}
    <div className='skill'>

        <h2 className='h-skill'> Skills </h2>

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


         




    </div>
    )
}
