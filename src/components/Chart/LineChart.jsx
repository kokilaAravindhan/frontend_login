
import React from "react";

import Chart from "./Chart";
import { MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';

const LineChart=()=>{
    return(
        <>
        <div class="container" >
            <div class="Chart" >
                <div class="row">  
                    <div class="col-md-5">       
                        <h2>Gold Chart</h2>
                        <br></br>
                        <Chart ></Chart>
                    </div>
                    <div class="col-md-6">
                        <h2>Gold Price Per Gram in India (INR)</h2>
                        <br></br>
                        <MDBTable>
                            <MDBTableHead>
                                <tr className='table-warning'>
                                    <th >Month</th>
                                    <th >22K Gold</th>
                                    <th >22K Gold</th>
                                </tr>
                            </MDBTableHead>
                            <MDBTableBody>
                                <tr className='table-light'>
                                    <td >Oct</td>
                                    <td >5500</td>
                                    <td >5250</td>
                                </tr>
                                <tr className='table-light'>
                                    <td >Sep</td>
                                    <td >5300</td>
                                    <td >5150</td>
                                </tr>
                                <tr className='table-light'>
                                    <td >Aug</td>
                                    <td >5200</td>
                                    <td >5050</td>
                                </tr>
                                <tr className='table-light'>
                                    <td >Jul</td>
                                    <td >5000</td>
                                    <td >4950</td>
                                </tr>
                            </MDBTableBody>
                        </MDBTable>     
                    </div>
                </div>
            </div>
        </div>
        </>

    )
}

export default LineChart 