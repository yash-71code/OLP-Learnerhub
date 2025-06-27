import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Nav, Button, Navbar } from 'react-bootstrap';
import AllCourses from './AllCourses';
import bgImage from '../../assets/Images/hero-bg.png';

const Home = () => {
   const trendingRef = React.useRef(null);

   const handleExploreClick = () => {
      if (trendingRef.current) {
         trendingRef.current.scrollIntoView({ behavior: 'smooth' });
      }
   };

   return (
      <>
         {/* Navbar */}
         <Navbar
            expand="lg"
            className="shadow-sm fixed-top"
            style={{
               background: 'linear-gradient(90deg, #43cea2 0%, #185a9d 100%)',
               padding: '0.8rem 1.2rem',
               zIndex: 1000
            }}
         >
            <Container fluid>
               <Navbar.Brand className="fw-bold fs-3 text-black" style={{ fontStyle: 'italic' }}>
                  LearnerHub
               </Navbar.Brand>
               <Navbar.Toggle aria-controls="navbarScroll" />
               <Navbar.Collapse id="navbarScroll">
                  <Nav className="ms-auto">
                     <Link to="/" className="text-decoration-none">
                        <Button variant="light" className="mx-1 fw-bold">Home</Button>
                     </Link>
                     <Link to="/login" className="text-decoration-none">
                        <Button variant="light" className="mx-1 fw-bold">Login</Button>
                     </Link>
                     <Link to="/register" className="text-decoration-none">
                        <Button variant="warning" className="mx-1 fw-bold">Register</Button>
                     </Link>
                  </Nav>
               </Navbar.Collapse>
            </Container>
         </Navbar>

         {/* Hero Section */}
         <div
            className="d-flex align-items-center justify-content-center"
            style={{
               minHeight: '100vh',
               background: 'linear-gradient(120deg, #f3f4f6 0%, #ffffff 100%)',
               paddingTop: '5rem', // height compensation for fixed navbar
            }}
         >
            <div
               className="d-flex flex-column flex-md-row align-items-center justify-content-between w-100"
               style={{
                  backgroundColor: '#ffffff',
                  borderRadius: '16px',
                  maxWidth: '1100px',
                  padding: '2rem',
                  boxShadow: '0 4px 16px rgba(0,0,0,0.08)',
                  margin: '1rem',
               }}
            >
               {/* Text */}
               <div style={{ flex: 1, minWidth: '280px', paddingRight: '1rem' }}>
                  <h1 className="fw-bold mb-3" style={{ fontSize: '2rem', color: '#222' }}>
                     Your Center for <span style={{ color: '#f39c12' }}>Skill Enhancement</span>
                  </h1>
                  <p style={{ fontStyle: 'italic', fontSize: '1rem', color: '#555' }}>
                     Every small step counts. Start your journey with us today!
                  </p>
                  <Button
                     variant="warning"
                     className="mt-3 px-4 py-2 shadow-sm"
                     style={{ borderRadius: '30px', fontWeight: '600' }}
                     onClick={handleExploreClick}
                  >
                     Explore Courses
                  </Button>
               </div>

               {/* Image */}
               <div style={{ flex: 1, minWidth: '280px', maxWidth: '500px', marginTop: '1rem' }}>
                  <img
                     src={bgImage}
                     alt="Learning Illustration"
                     style={{
                        width: '100%',
                        height: 'auto',
                        borderRadius: '12px',
                        boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                     }}
                  />
               </div>
            </div>
         </div>

         {/* Trending Courses */}
         <Container
            ref={trendingRef}
            className="py-5"
            style={{
               backgroundColor: '#ffffff',
               borderRadius: '12px',
               boxShadow: '0 2px 8px rgba(0, 0, 0, 0.05)',
               marginTop: '2rem',
               maxWidth: '1200px',
            }}
         >
            <h2 className="text-center fw-semibold mb-4" style={{ color: '#185a9d' }}>
               Trending Courses
            </h2>
            <AllCourses />
         </Container>
      </>
   );
};

export default Home;
