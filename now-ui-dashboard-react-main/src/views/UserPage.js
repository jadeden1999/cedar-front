/*!

=========================================================
* Now UI User React - v1.5.0
=========================================================

* Product Page: https://www.creative-tim.com/product/now-ui-User-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/now-ui-User-react/blob/main/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/

import React, { useState, useEffect } from "react";
// react plugin used to create charts
import { Line, Bar } from "react-chartjs-2";
import axios from 'axios';
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  Row,
  Col,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Table,
  Button,
  Label,
  FormGroup,

  UncontrolledTooltip,
  InputGroup,
  InputGroupText,
  InputGroupAddon,
  Input,
} from "reactstrap";
// reactstrap components


// core components
import PanelHeader from "components/PanelHeader/PanelHeader.js";

function User(props) {
  
  // axios.get(`http://cedarpool.com:4000/api/pools/eth1/miners/${id}`).then(r =>(setData(r.data)))
  const [id, setId] = useState("");
  const [data, setData] = useState({pendingBalance:0,
    totalPaid: 0
  
  
  
  });
  const [loading, setloading] = useState(true);
function  submitminer  () {
  axios.get(`http://eu1.cedarpool.com:4000/api/pools/eth1/miners/${id}`).then(r =>setData(r.data))
  }
  React.useEffect(() => {
    setloading(false)
  }, [])

if(loading) {
  return(  <div className="content"><h1>loading</h1> </div>)
}
else
  return (
    <>
      
      <div className="content">
      <PanelHeader size="sm" />
      

          <Row> 

          <Col xs={12} md={12}>
          {/* axios.get(`http://cedarpool.com:4000/api/pools/eth1/miners/${id}`).then(r =>setData(r.data), console.log(id)) */}
         
            <InputGroup className="">
              <Input  value={id} onChange={(e) => {setId(e.target.value)}} name="address" placeholder="Enter Wallet Address" />
              <InputGroupAddon addonType="append">
                <InputGroupText>
                 <button onClick={submitminer}> <i className="now-ui-icons ui-1_zoom-bold" /> </button>
                </InputGroupText>
              </InputGroupAddon>
            </InputGroup>
        
             </Col>

          </Row>
        <Row>

        
          <Col xs={12} md={4}>
          <Card className="card-chart">
              <CardHeader>
              
                <CardTitle tag="h4">Pending Balance</CardTitle>
                <h4>{data.pendingBalance} </h4>
              </CardHeader>
              <CardBody>
                
              </CardBody>
              <CardFooter>
                <div className="stats">
                  <i className="now-ui-icons arrows-1_refresh-69" /> Just
                  Updated
                </div>
              </CardFooter>
            </Card>
          </Col>
          <Col xs={12} md={4}>
          <Card className="card-chart">
              <CardHeader>
              
                <CardTitle tag="h4">Total Paid</CardTitle>
                <h4>{data.totalPaid}</h4>
              </CardHeader>
              <CardBody>
                
              </CardBody>
              <CardFooter>
                <div className="stats">
                  <i className="now-ui-icons arrows-1_refresh-69" /> Just
                  Updated
                </div>
              </CardFooter>
            </Card>
          </Col>

          {/* <Col xs={12} md={4}>
          <Card className="card-chart">
              <CardHeader>
              
                <CardTitle tag="h4">Payout Scheme</CardTitle>
                <h4>PPLNS</h4>
              </CardHeader>
              <CardBody>
                
              </CardBody>
              <CardFooter>
                <div className="stats">
                  <i className="now-ui-icons arrows-1_refresh-69" /> Just
                  Updated
                </div>
              </CardFooter>
            </Card>
          </Col>
          <Col xs={12} md={4}>
           
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={12}>
            <Card className="card-tasks">
              <CardHeader>
                <h5 className="card-category"></h5>
                <CardTitle tag="h4">Start Mining Now!</CardTitle>
              </CardHeader>
              <CardBody>
                <div className="table-full-width table-responsive">
                  <Table>
                    <tbody>
                      <tr>
                        <td>
                          <FormGroup check>
                            <Label>T-rex</Label>
                          </FormGroup>
                        </td>
                        <td className="text-left">
                        t-rex.exe -a ethash -o stratum2://cedarpool.com:4444 -u "your eth address" -p x -w rig0
                        </td>
                        <td className="td-actions text-right">
                          <Button
                            className="btn-round btn-icon btn-icon-mini btn-neutral"
                            color="info"
                           
                            type="button"
                          >
                            <i className="now-ui-icons ui-2_settings-90" />
                          </Button>
                          
                            
                          
                          
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <FormGroup check>
                            <Label>G miner </Label>
                          </FormGroup>
                        </td>
                        <td className="text-left">
                        miner.exe --algo ethash --server cedarpool.com:4444 --user "your eth address" --proto stratum
                        </td>
                        <td className="td-actions text-right">
                          <Button
                            className="btn-round btn-icon btn-icon-mini btn-neutral"
                            color="info"
                           
                            type="button"
                          >
                            <i className="now-ui-icons ui-2_settings-90" />
                          </Button>
                          
                            
                          
                          
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <FormGroup check>
                            <Label>Pheonix miner </Label>
                          </FormGroup>
                        </td>
                        <td className="text-left">
                        PhoenixMiner.exe -pool cedarpool.com:4444 -wal "your eth address" -worker asus -epsw x -mode 1 -log 0 -mport 0 -etha 0 -ftime 55 -retrydelay 1 -tt 79 -tstop 89  -coin eth -proto 4
                        </td>
                        <td className="td-actions text-right">
                          <Button
                            className="btn-round btn-icon btn-icon-mini btn-neutral"
                            color="info"
                           
                            type="button"
                          >
                            <i className="now-ui-icons ui-2_settings-90" />
                          </Button>
                          
                            
                          
                          
                        </td>
                      </tr>
                      
                      
                    </tbody>
                  </Table>
                </div>
              </CardBody>
              <CardFooter>
                <hr />
              
              </CardFooter>
            </Card>
          </Col> */}
          
        </Row>
      </div>
    </>
  );
}

export default User;
