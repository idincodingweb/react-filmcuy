import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../css/About.css';

const About = () => {
  return (
    <Container className="about-container mt-5">
      <Row className="about-hero text-center mb-4">
        <Col>
          <h1>About Us</h1>
        </Col>
      </Row>
      <Row className="about-content">
        <Col md={12}>
          <h2>Movies App</h2>
          <p>
            Movies App adalah sebuah aplikasi web yang dirancang untuk para penggemar film agar dapat dengan mudah mencari dan menemukan informasi mengenai berbagai film favorit mereka. Aplikasi ini menyediakan antarmuka yang ramah pengguna serta fitur-fitur yang lengkap untuk memberikan pengalaman terbaik kepada pengguna.
          </p>
          <h2>Fitur Utama</h2>
          <ul>
            <li><strong>Pencarian Film:</strong> Pengguna dapat mencari film berdasarkan judul. Aplikasi ini menggunakan API dari The Movie Database (TMDb) untuk mendapatkan data film yang relevan.</li>
            <li><strong>Detail Film:</strong> Setiap film yang dipilih akan menampilkan halaman detail yang berisi informasi lengkap mengenai film tersebut, termasuk poster, sinopsis, genre, dan rating.</li>
            <li><strong>Responsif:</strong> Aplikasi ini dirancang dengan tata letak yang responsif sehingga dapat digunakan dengan baik di berbagai perangkat, baik desktop maupun mobile.</li>
            <li><strong>Tampilan yang Menarik:</strong> Menggunakan desain UI/UX yang modern dan canggih untuk memberikan pengalaman visual yang menyenangkan.</li>
          </ul>
          <h2>Pembuat</h2>
          <p>
            Aplikasi ini dibuat oleh <strong>Idin-Code</strong>, seorang pengembang web yang memiliki passion dalam membangun aplikasi yang inovatif dan berguna. Idin-Code berkomitmen untuk memberikan pengalaman terbaik kepada pengguna melalui desain yang intuitif dan teknologi yang canggih.
          </p>
        </Col>
      </Row>
    </Container>
  );
}

export default About;
