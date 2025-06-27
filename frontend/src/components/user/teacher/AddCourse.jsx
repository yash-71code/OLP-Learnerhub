import React, { useState, useContext } from 'react';
import { Button, Form, Col, Row, Card } from 'react-bootstrap';
import { UserContext } from '../../../App';
import axiosInstance from '../../common/AxiosInstance';

const AddCourse = () => {
   const user = useContext(UserContext);
   const [addCourse, setAddCourse] = useState({
      userId: user.userData._id,
      C_educator: '',
      C_title: '',
      C_categories: '',
      C_price: '',
      C_description: '',
      sections: [],
   });

   const handleChange = (e) => {
      const { name, value } = e.target;
      setAddCourse({ ...addCourse, [name]: value });
   };

   const handleCourseTypeChange = (e) => {
      setAddCourse({ ...addCourse, C_categories: e.target.value });
   };

   const addInputGroup = () => {
      setAddCourse({
         ...addCourse,
         sections: [
            ...addCourse.sections,
            { S_title: '', S_description: '', S_content: null },
         ],
      });
   };

   const handleChangeSection = (index, e) => {
      const updatedSections = [...addCourse.sections];
      const section = updatedSections[index];

      if (e.target.name === 'S_content') {
         section.S_content = e.target.files[0];
      } else {
         section[e.target.name] = e.target.value;
      }

      setAddCourse({ ...addCourse, sections: updatedSections });
   };

   const removeInputGroup = (index) => {
      const updatedSections = [...addCourse.sections];
      updatedSections.splice(index, 1);
      setAddCourse({ ...addCourse, sections: updatedSections });
   };

   const handleSubmit = async (e) => {
      e.preventDefault();
      const formData = new FormData();

      Object.entries(addCourse).forEach(([key, value]) => {
         if (key === 'sections') {
            value.forEach((section) => {
               formData.append('S_title', section.S_title);
               formData.append('S_description', section.S_description);
               if (section.S_content instanceof File) {
                  formData.append('S_content', section.S_content);
               }
            });
         } else {
            formData.append(key, value);
         }
      });

      try {
         const res = await axiosInstance.post('/api/user/addcourse', formData, {
            headers: {
               Authorization: `Bearer ${localStorage.getItem('token')}`,
               'Content-Type': 'multipart/form-data',
            },
         });

         if (res.status === 201 && res.data.success) {
            alert(res.data.message);
         } else {
            alert('Failed to create course');
         }
      } catch (error) {
         console.error('An error occurred:', error);
         alert('Error while creating course. Ensure files are valid .mp4 or image types.');
      }
   };

   return (
  <div className="add-course-wrapper">
    <div className="add-course-card">
      <h3 className="mb-4 text-center text-primary">🎓 Create a New Course</h3>

      <Form onSubmit={handleSubmit}>
        <Row className="mb-3">
          <Col md={6}>
            <Form.Group controlId="courseType">
              <Form.Label>Course Category</Form.Label>
              <Form.Select value={addCourse.C_categories} onChange={handleCourseTypeChange} required>
                <option value="">-- Select category --</option>
                <option>IT & Software</option>
                <option>Finance & Accounting</option>
                <option>Personal Development</option>
              </Form.Select>
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group controlId="courseTitle">
              <Form.Label>Course Title</Form.Label>
              <Form.Control name="C_title" value={addCourse.C_title} onChange={handleChange} required placeholder="Enter course title" />
            </Form.Group>
          </Col>
        </Row>

        <Row className="mb-3">
          <Col md={6}>
            <Form.Group controlId="educator">
              <Form.Label>Educator Name</Form.Label>
              <Form.Control name="C_educator" value={addCourse.C_educator} onChange={handleChange} required placeholder="Educator name" />
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group controlId="price">
              <Form.Label>Price (₹)</Form.Label>
              <Form.Control name="C_price" value={addCourse.C_price} onChange={handleChange} required placeholder="Enter price (0 for free)" />
            </Form.Group>
          </Col>
        </Row>

        <Form.Group className="mb-4" controlId="description">
          <Form.Label>Course Description</Form.Label>
          <Form.Control as="textarea" rows={2} name="C_description" value={addCourse.C_description} onChange={handleChange} required placeholder="Overview of the course" />
        </Form.Group>

        <hr />
        <h5 className="mb-3 text-success">🧩 Add Course Sections</h5>

        {addCourse.sections.map((section, index) => (
          <div className="section-card" key={index}>
            <Row className="mb-2">
              <Col className="d-flex justify-content-between align-items-center">
                <strong>Section {index + 1}</strong>
                <Button variant="danger" size="sm" onClick={() => removeInputGroup(index)}>
                  ❌ Remove
                </Button>
              </Col>
            </Row>
            <Row className="mb-3">
              <Col md={6}>
                <Form.Group>
                  <Form.Label>Title</Form.Label>
                  <Form.Control name="S_title" value={section.S_title} onChange={(e) => handleChangeSection(index, e)} required />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group>
                  <Form.Label>Upload File</Form.Label>
                  <Form.Control name="S_content" type="file" accept="video/*,image/*" onChange={(e) => handleChangeSection(index, e)} required />
                </Form.Group>
              </Col>
            </Row>
            <Form.Group>
              <Form.Label>Description</Form.Label>
              <Form.Control as="textarea" rows={2} name="S_description" value={section.S_description} onChange={(e) => handleChangeSection(index, e)} required />
            </Form.Group>
          </div>
        ))}

        <div className="mb-4 d-flex justify-content-start">
          <Button variant="outline-primary" size="sm" onClick={addInputGroup}>
            ➕ Add Section
          </Button>
        </div>

        <div className="text-center">
          <Button variant="success" type="submit" size="lg">
            🚀 Submit Course
          </Button>
        </div>
      </Form>
    </div>
  </div>
);
};

export default AddCourse;
