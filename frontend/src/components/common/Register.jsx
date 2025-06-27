import React, { useState } from 'react'
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

const Register = () => {
   const navigate = useNavigate();
   const [selectedOption, setSelectedOption] = useState('');
   const [showPassword, setShowPassword] = useState(false);
   const [loading, setLoading] = useState(false);
   const [data, setData] = useState({
      name: "",
      email: "",
      password: "",
      type: "",
   });

   const handleSelect = (role) => {
      setSelectedOption(role);
      setData({ ...data, type: role });
   };

   const handleChange = (e) => {
      const { name, value } = e.target;
      setData({ ...data, [name]: value });
   };

   const handleSubmit = async (e) => {
      e.preventDefault();
      const { name, email, password, type } = data;

      if (!name || !email || !password || !type) {
         alert("Please fill all fields");
         return;
      }

      try {
         setLoading(true);
         const response = await axiosInstance.post('/api/user/register', data);
         if (response.data.success) {
            alert(response.data.message);
            navigate('/login');
         } else {
            alert(response.data.message || "Registration failed.");
         }
      } catch (error) {
         console.error("Registration Error:", error);
         alert("Something went wrong.");
      } finally {
         setLoading(false);
      }
   };

   const togglePasswordVisibility = () => {
      setShowPassword((prev) => !prev);
   };

   const roles = ['Student', 'Teacher'];

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
                        <Button variant="text" sx={{ color: '#1976d2', fontWeight: 'bold' }}>Login</Button>
                     </Link>
                     <Link to={'/register'} style={{ textDecoration: 'none' }}>
                        <Button variant="contained" color="warning" sx={{ fontWeight: 'bold' }}>Register</Button>
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
                     padding: '24px 16px',
                     background: '#fff',
                     border: '1px solid #e3e3e3',
                     borderRadius: 3,
                     boxShadow: 3,
                     minWidth: { xs: '90vw', sm: 320 },
                     maxWidth: 350
                  }}
               >
                  <Avatar sx={{ bgcolor: '#1976d2', mb: 1, width: 48, height: 48 }}>
                     <span role="img" aria-label="register" style={{ fontSize: 24 }}>📝</span>
                  </Avatar>
                  <Typography component="h1" variant="h5" sx={{ fontWeight: 700, mb: 2 }}>
                     Register
                  </Typography>
                  <Box component="form" onSubmit={handleSubmit} noValidate sx={{ width: '100%' }}>
                     <TextField
                        margin="normal"
                        fullWidth
                        id="name"
                        label="Full Name"
                        name="name"
                        value={data.name}
                        onChange={handleChange}
                        autoComplete="name"
                        autoFocus
                        required
                        size="small"
                     />
                     <TextField
                        margin="normal"
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="email"
                        value={data.email}
                        onChange={handleChange}
                        autoComplete="email"
                        required
                        size="small"
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
                        size="small"
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

                     <Box display="flex" justifyContent="center" gap={2} my={2}>
                        {roles.map(role => (
                           <Button
                              key={role}
                              variant={selectedOption === role ? "contained" : "outlined"}
                              color="primary"
                              onClick={(e) => { e.preventDefault(); handleSelect(role); }}
                              sx={{
                                 minWidth: 90,
                                 fontWeight: 600,
                                 textTransform: 'capitalize',
                                 cursor: 'pointer',
                                 fontSize: 14,
                                 py: 0.5
                              }}
                              size="small"
                           >
                              {role}
                           </Button>
                        ))}
                     </Box>

                     <Box mt={2} display="flex" justifyContent="center">
                        <Button
                           type="submit"
                           variant="contained"
                           color="primary"
                           disabled={loading}
                           sx={{
                              mt: 2, mb: 2,
                              width: '70%',
                              fontWeight: 700,
                              fontSize: 15,
                              letterSpacing: 1,
                              cursor: loading ? 'not-allowed' : 'pointer',
                              py: 1
                           }}
                           size="small"
                        >
                           {loading ? "Registering..." : "Sign Up"}
                        </Button>
                     </Box>

                     <Grid container justifyContent="center">
                        <Grid item>
                           <Typography variant="body2" sx={{ mr: 1, display: 'inline' }}>
                              Have an account?
                           </Typography>
                           <Link to="/login" style={{ color: "#1976d2", fontWeight: 600, textDecoration: 'none', cursor: 'pointer' }}>
                              Sign In
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

export default Register;
