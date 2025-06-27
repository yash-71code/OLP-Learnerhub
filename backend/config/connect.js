const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_DB, {
      dbName: 'video-course-application',
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('✅ Connected to MongoDB');
  } catch (err) {
    throw new Error(`❌ Could not connect to MongoDB: ${err}`);
  }
};

module.exports = connectDB;
