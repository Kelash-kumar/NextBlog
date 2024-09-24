import mongoose from "mongoose";

const dbUrl = 'mongodb://localhost:27017/nextblog';
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(dbUrl);

    console.log(`Connected to MongoDB database: ${conn.connection.host}`);
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    process.exit(1); // Exit the application with an error code
  }
};

export { connectDB };