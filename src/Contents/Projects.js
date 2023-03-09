import React from 'react'
import {
    MDBCard,
    MDBCardTitle,
    MDBCardText,
    MDBCardBody,
    MDBCardImage,
    MDBRow,
    MDBCol
  } from 'mdb-react-ui-kit';
 
import './Projects.css';
import 'bootstrap/dist/css/bootstrap.css' 

import blacksd from "../Pics/blacksd.png";
import sudoku from "../Pics/sudoku.jpg";
import airline from "../Pics/airline.png";


export const Projects = () => {
  
    return (

        <div className='proj'>

        <MDBCard style={{ maxWidth: '540px' }}>
          <MDBRow className='g-0'>
            <MDBCol md='4'>
              <MDBCardImage src={blacksd} alt='...' fluid />
            </MDBCol>
            <MDBCol md='8'>
              <MDBCardBody>
                <MDBCardTitle>Black Spot Detection</MDBCardTitle>
                <MDBCardText>
                Used to detect Crime spot or Accident spot for user.
                </MDBCardText>
                <MDBCardText>
                  <small className='text-muted'>Last updated 3 mins ago</small>
                </MDBCardText>
              </MDBCardBody>
            </MDBCol>
          </MDBRow><br/>

          <MDBRow className='g-0'>
            <MDBCol md='4'>
              <MDBCardImage src={sudoku} alt='...' fluid />
            </MDBCol>
            <MDBCol md='8'>
              <MDBCardBody>
                <MDBCardTitle>Sudoku Solver</MDBCardTitle>
                <MDBCardText>
                It uses the algorithm to solve the sudoku(puzzle).
Made using Basic Java Programming.
                </MDBCardText>
                <MDBCardText>
                  <small className='text-muted'>Last updated 3 mins ago</small>
                </MDBCardText>
              </MDBCardBody>
            </MDBCol>
          </MDBRow><br/>

          <MDBRow className='g-0'>
            <MDBCol md='4'>
              <MDBCardImage src={airline} alt='...' fluid />
            </MDBCol>
            <MDBCol md='8'>
              <MDBCardBody>
                <MDBCardTitle>Airline Reservation System</MDBCardTitle>
                <MDBCardText>
               It is a computerized system used to store and retrieve information and conduct transactions related to air travel. The project is aimed at exposing the relevance and importance of Airline Reservation Systems.
                </MDBCardText>
                <MDBCardText>
                  <small className='text-muted'>Last updated 3 mins ago</small>
                </MDBCardText>
              </MDBCardBody>
            </MDBCol>
          </MDBRow><br/>



        </MDBCard>

        </div>
      );

}

