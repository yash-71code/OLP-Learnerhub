import React from 'react'
import AllCourses from '../../common/AllCourses'
import { Container } from 'react-bootstrap'

const StudentHome = () => {
   return (
      <div style={{ 
         minHeight: '100vh', 
         background: 'linear-gradient(135deg, #f8fafc 0%, #e0e7ff 100%)',
         paddingTop: '40px',
         paddingBottom: '40px'
      }}>
         <Container 
            style={{
               background: '#fff',
               borderRadius: '16px',
               boxShadow: '0 4px 24px rgba(0,0,0,0.08)',
               padding: '32px 24px',
               maxWidth: '900px'
            }}
         >
            <h2 style={{
               fontWeight: 700,
               marginBottom: '32px',
               color: '#3730a3',
               letterSpacing: '0.5px'
            }}>
               Explore Courses
            </h2>
            <AllCourses />
         </Container>
      </div>
   )
}

export default StudentHome
