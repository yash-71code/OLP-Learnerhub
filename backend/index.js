const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const path = require('path');
const fs = require('fs');
const connectDB = require('./config/connect');

dotenv.config();
const app = express();

// Connect to DB
connectDB();

const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());
app.use(cors());

// Ensure uploads folder exists
const uploadsDir = path.join(__dirname, "uploads");
if (!fs.existsSync(uploadsDir)) {
  fs.mkdirSync(uploadsDir);
}
app.use("/uploads", express.static(uploadsDir));

// Routes
app.use('/api/admin', require('./routers/adminRoutes'));
app.use('/api/user', require('./routers/userRoutes'));

// Start server
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
