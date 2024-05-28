import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import '../css/Gallery.css';

const teamMembers = [
  { name: 'Idin-Code', role: 'Lead Developer', image: 'https://i.ibb.co.com/9W3V3zs/Photo-Room-20240305-131210-1.jpg' },
  { name: 'Reny Aulia', role: 'Designer', image: 'https://raw.githubusercontent.com/idincodingweb/packgambar/main/pink_nurulrr-27-05-2024-0001.jpg' },
  { name: 'Diana Mely', role: 'Backend Developer', image: 'https://raw.githubusercontent.com/idincodingweb/packgambar/main/feel__la.26-27-05-2024-0001.jpg' },
  // Tambahkan anggota tim lainnya di sini
];

const Gallery = () => {
  return (
    <Container className="gallery-container mt-5">
      <h2 className="text-center mb-4">Meet Our Team</h2>
      <Row>
        {teamMembers.map((member, index) => (
          <Col md={4} sm={6} key={index} className="mb-4">
            <Card className="h-100">
              <Card.Img variant="top" src={member.image} alt={member.name} />
              <Card.Body>
                <Card.Title>{member.name}</Card.Title>
                <Card.Text>{member.role}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Gallery;
