




import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { FaCar, FaCheckCircle, FaTrashAlt, FaClock, FaHandsHelping, FaUsers, FaGlobe, FaMobileAlt, FaEye, FaPhone, FaHeart, FaMobile } from 'react-icons/fa';
import { GiWorld } from "react-icons/gi";


const Statistics = () => {
  const iconStyle = {
    position: 'absolute',
    bottom: '85px',
    left: '0',
    display: 'inline-flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '70px',
    height: '70px',
    borderRadius: '50%',
    backgroundColor: '#fff',
    color: '#000',
    zIndex: 10,
    padding:"20px"
  };

  return (
    <Container fluid>
     
          {/* First Row of Cards */}
          <Row className='mt-5'>
            <Col md={4}>
              <Card className="shadow position-relative" style={{ backgroundColor: '#FFB74D', color: '#fff' }}>
                <Card.Body>
                  <div style={{ ...iconStyle, color: '#FFA726', backgroundColor: '#fff' }}>
                    <FaCar size={30} />
                  </div>
                  <Row>
                    <Col xs="auto"></Col>
                    <Col className='text-center' >
                      <Card.Title>Total Cars</Card.Title>
                      <h2>8123</h2>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="shadow position-relative" style={{ backgroundColor: '#1E88E5', color: '#fff' }}>
                <Card.Body>
                  <div style={{ ...iconStyle, color: '#1976D2', backgroundColor: '#fff' }}>
                    <FaCheckCircle size={30} />
                  </div>
                  <Row>
                    <Col xs="auto"></Col>
                    <Col className='text-center' >
                      <Card.Title>Total Cars Approved</Card.Title>
                      <h2>2073</h2>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="shadow position-relative" style={{ backgroundColor: '#8BC34A', color: '#fff' }}>
                <Card.Body>
                  <div style={{ ...iconStyle, color: '#7CB342', backgroundColor: '#fff' }}>
                    <FaTrashAlt size={30} />
                  </div>
                  <Row>
                    <Col xs="auto"></Col>
                    <Col className='text-center' >
                      <Card.Title>Total Cars Deleted</Card.Title>
                      <h2>1997</h2>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            </Col>
          </Row>

          {/* Second Row of Cards */}
          <Row className="mt-5">
            <Col md={4}>
              <Card className="shadow position-relative" style={{ backgroundColor: '#D32F2F', color: '#fff' }}>
                <Card.Body>
                  <div style={{ ...iconStyle, color: '#C62828', backgroundColor: '#fff' }}>
                    <FaClock size={30} />
                  </div>
                  <Row>
                    <Col xs="auto"></Col>
                    <Col className='text-center' >
                      <Card.Title>Total Cars Pending</Card.Title>
                      <h2>67</h2>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="shadow position-relative" style={{ backgroundColor: '#009688', color: '#fff' }}>
                <Card.Body>
                  <div style={{ ...iconStyle, color: '#00796B', backgroundColor: '#fff' }}>
                    <FaHandsHelping size={30} />
                  </div>
                  <Row>
                    <Col xs="auto"></Col>
                    <Col className='text-center' >
                      <Card.Title>Total Assistance</Card.Title>
                      <h2>5641</h2>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="shadow position-relative" style={{ backgroundColor: '#3F51B5', color: '#fff' }}>
                <Card.Body>
                  <div style={{ ...iconStyle, color: '#303F9F', backgroundColor: '#fff' }}>
                    <FaUsers size={30} />
                  </div>
                  <Row>
                    <Col xs="auto"></Col>
                    <Col className='text-center' >
                      <Card.Title>Total Users</Card.Title>
                      <h2>17634</h2>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            </Col>
          </Row>

          {/* Third Row of Cards */}
          <Row className="mt-5">
            <Col md={4}>
              <Card className="shadow position-relative" style={{ backgroundColor: '#00BCD4', color: '#fff' }}>
                <Card.Body>
                  <div style={{ ...iconStyle, color: '#0097A7', backgroundColor: '#fff' }}>
                    <FaGlobe size={30} />
                  </div>
                  <Row>
                    <Col xs="auto"></Col>
                    <Col className='text-center' >
                      <Card.Title>Total Web Visits</Card.Title>
                      <h2>22089350</h2>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="shadow position-relative" style={{ backgroundColor: '#4CAF50', color: '#fff' }}>
                <Card.Body>
                  <div style={{ ...iconStyle, color: '#388E3C', backgroundColor: '#fff' }}>
                    <FaMobileAlt size={30} />
                  </div>
                  <Row>
                    <Col xs="auto"></Col>
                    <Col className='text-center' >
                      <Card.Title>Total App Visits</Card.Title>
                      <h2>82579</h2>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            </Col>
            
            <Col md={4}>
              <Card className="shadow position-relative" style={{ backgroundColor: '#9C27B0', color: '#fff' }}>
                <Card.Body>
                  <div style={{ ...iconStyle, color: '#7B1FA2', backgroundColor: '#fff' }}>
                    <FaEye size={30} />
                  </div>
                  <Row>
                    <Col xs="auto"></Col>
                    <Col className='text-center' >
                      <Card.Title>Total Cars Viewed</Card.Title>
                      <h2>1730820</h2>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          
          {/* Additional Cards */}
          <Row className="mt-5">
            <Col md={4}>
              <Card className="shadow position-relative" style={{ backgroundColor: '#3F51B5', color: '#fff' }}>
                <Card.Body>
                  <div style={{ ...iconStyle, color: '#303F9F', backgroundColor: '#fff' }}>
                    <FaPhone size={30} />
                  </div>
                  <Row>
                    <Col xs="auto"></Col>
                    <Col className='text-center' >
                      <Card.Title>Total Buyers Called</Card.Title>
                      <h2>12986</h2>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="shadow position-relative" style={{ backgroundColor: '#E91E63', color: '#fff' }}>
                <Card.Body>
                  <div style={{ ...iconStyle, color: '#C2185B', backgroundColor: '#fff' }}>
                    <FaPhone size={30} />
                  </div>
                  <Row>
                    <Col xs="auto"></Col>
                    <Col className='text-center' >
                      <Card.Title>Total Sellers Called</Card.Title>
                      <h2>12986</h2>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="shadow position-relative" style={{ backgroundColor: '#03A9F4', color: '#fff' }}>
                <Card.Body>
                  <div style={{ ...iconStyle, color: '#0288D1', backgroundColor: '#fff' }}>
                    <FaHeart size={30} />
                  </div>
                  <Row>
                    <Col xs="auto"></Col>
                    <Col className='text-center' >
                      <Card.Title>Total Interest Sent</Card.Title>
                      <h2>1478</h2>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            </Col>
          </Row>

          <Row className="mt-5">
            <Col md={4}>
              <Card className="shadow position-relative" style={{ backgroundColor: '#9C27B0', color: '#fff' }}>
                <Card.Body>
                  <div style={{ ...iconStyle, color: '#7B1FA2', backgroundColor: '#fff' }}>
                    <FaMobile size={30} />
                  </div>
                  <Row>
                    <Col xs="auto"></Col>
                    <Col className='text-center' >
                      <Card.Title>Total App Login</Card.Title>
                      <h2>12986</h2>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="shadow position-relative" style={{ backgroundColor: '#e36014', color: '#fff' }}>
                <Card.Body>
                  <div style={{ ...iconStyle, color: '#ed691c', backgroundColor: '#fff' }}>
                    <GiWorld size={30} />
                  </div>
                  <Row>
                    <Col xs="auto"></Col>
                    <Col className='text-center' >
                      <Card.Title>Total Web Login</Card.Title>
                      <h2>12986</h2>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            </Col>
           
      </Row>
    </Container>
  );
};

export default Statistics;

          



















