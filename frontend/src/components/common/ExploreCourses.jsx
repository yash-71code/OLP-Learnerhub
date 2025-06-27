import React, { useEffect, useState } from "react";
import axios from "axios";
import { Card, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const ExploreCourses = () => {
  const [courses, setCourses] = useState([]);
  const navigate = useNavigate();

 useEffect(() => {
  const fetchCourses = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/getallcourses");
      console.log("Fetched Courses:", res.data);
      setCourses(res.data);
    } catch (err) {
      console.error("Error fetching courses", err);
    }
  };

  fetchCourses();
}, []);



  return (
    <div className="container mt-4">
      <h2 className="mb-4">Explore Courses</h2>
      {courses.length === 0 && (
  <p className="text-center text-muted">No courses found. Please check back later.</p>
)}

      <div className="row">
        {courses.map((course) => (
          <div className="col-md-4 mb-4" key={course._id}>
            <Card>
              <Card.Body>
                <Card.Title>{course.C_title}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{course.C_categories}</Card.Subtitle>
                <Card.Text>{course.C_description}</Card.Text>
                <Button variant="primary" onClick={() => navigate(`/courseSection/${course._id}/${course.C_title}`)}>
                  View Course
                </Button>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExploreCourses;
