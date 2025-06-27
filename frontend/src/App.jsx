import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useEffect, createContext } from "react";

import "./App.css";
import Home from "./components/common/Home";
import Login from "./components/common/Login";
import Register from "./components/common/Register";
import Dashboard from "./components/common/Dashboard";
import CourseContent from "./components/user/student/CourseContent";
import ExploreCourses from "./components/common/ExploreCourses";


export const UserContext = createContext();

function App() {
  const date = new Date().getFullYear();
  const [userData, setUserData] = useState();
  const [userLoggedIn, setUserLoggedIn] = useState(false);

  const getData = async () => {
    try {
      const user = JSON.parse(localStorage.getItem("user"));
      if (user) {
        setUserData(user);
        setUserLoggedIn(true);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <UserContext.Provider value={{ userData, userLoggedIn }}>
      <div className="App">
        <Router>
          <div className="content">
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/explore" element={<ExploreCourses />} />
              
              {/* Protected Routes */}
              {userLoggedIn && (
                <>
                  <Route path="/dashboard" element={<Dashboard />} />
                  <Route
                    path="/courseSection/:courseId/:courseTitle"
                    element={<CourseContent />}
                  />
                </>
              )}
            </Routes>
          </div>

          <footer className="bg-light text-center text-lg-start">
            <div className="text-center p-3">
              © {date} Copyright: Learning Application
            </div>
          </footer>
        </Router>
      </div>
    </UserContext.Provider>
  );
}

export default App;
