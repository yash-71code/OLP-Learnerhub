import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import { Container, Nav } from 'react-bootstrap';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import axiosInstance from './AxiosInstance';

const Login = () => {
   const navigate = useNavigate();
   const [showPassword, setShowPassword] = useState(false);
   const [loading, setLoading] = useState(false);
   const [data, setData] = useState({
      email: "",
      password: "",
   });

   const handleChange = (e) => {
      const { name, value } = e.target;
      setData({ ...data, [name]: value });
   };

   const togglePasswordVisibility = () => {
      setShowPassword((prev) => !prev);
   };

   const handleSubmit = async (e) => {
      e.preventDefault();
      const { email, password } = data;
      if (!email || !password) {
         alert("Please fill all fields");
         return;
      }

      try {
         setLoading(true);
         const res = await axiosInstance.post('/api/user/login', data);
         if (res.data.success) {
            alert(res.data.message);
            localStorage.setItem("token", res.data.token);
            localStorage.setItem("user", JSON.stringify(res.data.userData));
            navigate('/dashboard');
            setTimeout(() => {
               window.location.reload();
            }, 1000);
         } else {
            alert(res.data.message);
         }
      } catch (err) {
         if (err.response?.status === 401) {
            alert("User doesn't exist");
         } else {
            alert("Something went wrong. Please try again.");
         }
         console.error(err);
      } finally {
         setLoading(false);
      }
   };

   return (
      <>
         <Navbar expand="lg" className="bg-body-tertiary shadow-sm">
            <Container fluid>
               <Navbar.Brand><h2 style={{ fontStyle: 'italic' }}>Learning Path</h2></Navbar.Brand>
               <Navbar.Toggle aria-controls="navbarScroll" />
               <Navbar.Collapse id="navbarScroll">
                  <Nav className="ms-auto">
                     <Link to={'/'} style={{ textDecoration: 'none' }}>
                        <Button variant="text" sx={{ color: '#1976d2', fontWeight: 'bold' }}>Home</Button>
                     </Link>
                     <Link to={'/login'} style={{ textDecoration: 'none' }}>
                        <Button variant="contained" color="primary" sx={{ fontWeight: 'bold' }}>Login</Button>
                     </Link>
                     <Link to={'/register'} style={{ textDecoration: 'none' }}>
                        <Button variant="text" sx={{ color: '#1976d2', fontWeight: 'bold' }}>Register</Button>
                     </Link>
                  </Nav>
               </Navbar.Collapse>
            </Container>
         </Navbar>

         <div style={{ minHeight: '100vh', background: 'linear-gradient(135deg, #e0e7ff, #f8fafc)' }}>
            <Container component="main" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '80vh' }}>
               <Box
                  sx={{
                     mt: 8, mb: 4,
                     display: 'flex',
                     flexDirection: 'column',
                     alignItems: 'center',
                     padding: '32px 24px',
                     background: '#fff',
                     border: '1px solid #e3e3e3',
                     borderRadius: 3,
                     boxShadow: 3,
                     minWidth: { xs: '90vw', sm: 400 }
                  }}
               >
                  <Avatar sx={{ bgcolor: '#1976d2', mb: 1, width: 56, height: 56 }}>
                     <span role="img" aria-label="login" style={{ fontSize: 28 }}>🔐</span>
                  </Avatar>
                  <Typography component="h1" variant="h5" sx={{ fontWeight: 700, mb: 2 }}>
                     Sign In
                  </Typography>
                  <Box component="form" onSubmit={handleSubmit} noValidate sx={{ width: '100%' }}>
                     <TextField
                        margin="normal"
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="email"
                        value={data.email}
                        onChange={handleChange}
                        autoComplete="email"
                        autoFocus
                        required
                     />
                     <TextField
                        margin="normal"
                        fullWidth
                        name="password"
                        label="Password"
                        type={showPassword ? 'text' : 'password'}
                        id="password"
                        value={data.password}
                        onChange={handleChange}
                        autoComplete="current-password"
                        required
                        InputProps={{
                           endAdornment: (
                              <InputAdornment position="end">
                                 <IconButton
                                    onClick={togglePasswordVisibility}
                                    edge="end"
                                    sx={{ cursor: 'pointer' }}
                                 >
                                    {showPassword ? <VisibilityOff /> : <Visibility />}
                                 </IconButton>
                              </InputAdornment>
                           )
                        }}
                     />

                     <Box mt={3} display="flex" justifyContent="center">
                        <Button
                           type="submit"
                           variant="contained"
                           color="primary"
                           disabled={loading}
                           sx={{
                              width: '70%',
                              fontWeight: 700,
                              fontSize: 16,
                              letterSpacing: 1,
                              cursor: loading ? 'not-allowed' : 'pointer'
                           }}
                        >
                           {loading ? "Signing In..." : "Sign In"}
                        </Button>
                     </Box>

                     <Grid container justifyContent="center" mt={2}>
                        <Grid item>
                           <Typography variant="body2" sx={{ mr: 1, display: 'inline' }}>
                              Don't have an account?
                           </Typography>
                           <Link to="/register" style={{ color: "#1976d2", fontWeight: 600, textDecoration: 'none', cursor: 'pointer' }}>
                              Sign Up
                           </Link>
                        </Grid>
                     </Grid>
                  </Box>
               </Box>
            </Container>
         </div>
      </>
   );
};

export default Login;
