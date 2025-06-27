import React, { useContext } from 'react';
import { Navbar, Nav, Button, Container } from 'react-bootstrap';
import { UserContext } from '../../App';
import { NavLink } from 'react-router-dom';

const NavBar = ({ setSelectedComponent }) => {
   const user = useContext(UserContext);

   if (!user) return null;

   const handleLogout = () => {
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      window.location.href = "/";
   };

   const handleOptionClick = (component) => {
      setSelectedComponent(component);
   };

   return (
      <Navbar
         expand="lg"
         fixed="top"
         className="shadow-sm"
         style={{
            background: 'linear-gradient(to right, #f0f0f0, #e4e4e7)',
            fontFamily: "'Segoe UI', sans-serif",
            padding: '0.8rem 1rem',
            zIndex: 999
         }}
      >
         <Container fluid>
            <Navbar.Brand className="fw-bold fs-4 text-primary">
               Learning Path
            </Navbar.Brand>

            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
               <Nav className="me-auto align-items-center" style={{ gap: '0.5rem' }}>
                  <Button variant="outline-primary" as={NavLink} to="/dashboard">
                     Home
                  </Button>

                  {user.userData.type === 'Teacher' && (
                     <Button variant="outline-success" onClick={() => handleOptionClick('addcourse')}>
                        Add Course
                     </Button>
                  )}

                  {user.userData.type === 'Admin' && (
                     <Button variant="outline-warning" onClick={() => handleOptionClick('courses')}>
                        Courses
                     </Button>
                  )}

                  {user.userData.type === 'Student' && (
                     <Button variant="outline-info" onClick={() => handleOptionClick('enrolledcourses')}>
                        Enrolled Courses
                     </Button>
                  )}
               </Nav>

               <Nav className="align-items-center">
                  <span className="mx-3 fw-semibold text-dark">
                     Hi, {user.userData.name}
                  </span>
                  <Button onClick={handleLogout} size="sm" variant="danger" className="fw-semibold">
                     Log Out
                  </Button>
               </Nav>
            </Navbar.Collapse>
         </Container>
      </Navbar>
   );
};

export default NavBar;
