import React from 'react'

import { MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';

import './Education.css';
import 'bootstrap/dist/css/bootstrap.css' 

export const Education = () => {
  
      return (

        <div className='edu'>
          <h1>Education Qualification</h1> <br/><br/>
        <MDBTable>
          <MDBTableHead>
            <tr>
              <th scope='col'>#</th>
              <th scope='col'>Board/Course</th>
              <th scope='col'>Institute</th>
              <th scope='col'>Percentage</th>
            </tr>
          </MDBTableHead>
          <MDBTableBody>
            <tr>
              <th scope='row'>1</th>
              <td>10th SSC</td>
              <td>New School, Florida</td>
              <td>88.60%</td>
            </tr>
            <tr>
              <th scope='row'>2</th>
              <td>12th HSC</td>
              <td>New Junior College, Florida</td>
              <td>86.92%</td>
            </tr>
            <tr>
              <th scope='row'>2</th>
              <td>SY BTech</td>
              <td>New Institute of Technology, Florida</td>
              <td>7.8 CGPA</td>
            </tr>
            {/* <tr>
              <th scope='row'>3</th>
              <td colSpan={2}>Larry the Bird</td>
              <td>@twitter</td>
            </tr> */}
          </MDBTableBody>
        </MDBTable>

        </div>
      );

  
}
