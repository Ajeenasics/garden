import React from "react";
import GardnerLandingNav from "./GardnerLandingNav";
import { Container, Row, Col, Card, Table, Button, Navbar, Nav } from 'react-bootstrap';
import { BsPeople, BsPersonBadge, BsBox, BsGrid } from 'react-icons/bs';

function GardnerLandingpage() {
 
  const stats = {
    staffs: 7,
    allUsers: 77,
    allCoordinators: 0,
    packages: 4
  };

  const recentOrders = [
    {
      packageName: 'Rose Enchantment Package',
      clientName: 'sreekuttan H',
      contactNumber: '8086411169',
      date: '30-04-2024'
    },
    {
      packageName: 'flower garden',
      clientName: 'Prasnath llll',
      contactNumber: '9087346733',
      date: '03-05-2024'
    },
    {
      packageName: 'Rose Enchantment Package',
      clientName: 'Nincy mol',
      contactNumber: '7598628022',
      date: '16-10-2024'
    },
    {
      packageName: 'flower garden',
      clientName: 'llll',
      contactNumber: '',
      date: '29-10-2024'
    }
  ];
  
  return (
    
      <>
        <GardnerLandingNav />
        <div className="dashboard-container">
        <Container>
        <Row className="g-4 mb-4">
          <Col md={3}>
            <Card className="stat-card">
              <Card.Body>
                <div className="d-flex justify-content-between align-items-center">
                  <div>
                    <Card.Title className="text-muted h6">Staffs</Card.Title>
                    <Card.Text className="h3">{stats.staffs}</Card.Text>
                  </div>
                  <BsPeople className="stat-icon" size={24} />
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3}>
            <Card className="stat-card">
              <Card.Body>
                <div className="d-flex justify-content-between align-items-center">
                  <div>
                    <Card.Title className="text-muted h6">All Users</Card.Title>
                    <Card.Text className="h3">{stats.allUsers}</Card.Text>
                  </div>
                  <BsPeople className="stat-icon" size={24} />
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3}>
            <Card className="stat-card">
              <Card.Body>
                <div className="d-flex justify-content-between align-items-center">
                  <div>
                    <Card.Title className="text-muted h6">All Coordinators</Card.Title>
                    <Card.Text className="h3">{stats.allCoordinators}</Card.Text>
                  </div>
                  <BsPersonBadge className="stat-icon" size={24} />
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3}>
            <Card className="stat-card">
              <Card.Body>
                <div className="d-flex justify-content-between align-items-center">
                  <div>
                    <Card.Title className="text-muted h6">Packages</Card.Title>
                    <Card.Text className="h3">{stats.packages}</Card.Text>
                  </div>
                  <BsBox className="stat-icon" size={24} />
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Card>
          <Card.Body>
            <Card.Title className="mb-4">Recent Order Requests</Card.Title>
            <Table responsive hover>
              <thead>
                <tr>
                  <th>PACKAGE NAME</th>
                  <th>CLIENT NAME</th>
                  <th>CONTACT NUMBER</th>
                  <th>DATE</th>
                  <th>ACTIONS</th>
                </tr>
              </thead>
              <tbody>
                {recentOrders.map((order, index) => (
                  <tr key={index}>
                    <td>{order.packageName}</td>
                    <td>{order.clientName}</td>
                    <td>{order.contactNumber}</td>
                    <td>{order.date}</td>
                    <td>
                      <Button variant="success" size="sm" className="me-2">
                        ACCEPT
                      </Button>
                      <Button variant="danger" size="sm">
                        REJECT
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Card.Body>
        </Card>
      </Container>
    </div>

        
      </>
  
  );
}

export default GardnerLandingpage;
