import mongoose from 'mongoose';

const dbConnect = async () => {
  try {
    // Attempt to connect to MongoDB
    await mongoose.connect(process.env.MONGO_URI);

    console.log('Successfully connected to MongoDB');
  } catch (error) {
    // Log the error details and provide feedback
    console.error('Error connecting to MongoDB:', error.message);
    process.exit(1); // Exit the process if the connection fails
  }
};

// Optionally handle mongoose connection events
mongoose.connection.on('connected', () => {
  console.log('Mongoose connection established');
});

mongoose.connection.on('error', (err) => {
  console.error('Mongoose connection error:', err);
});

mongoose.connection.on('disconnected', () => {
  console.log('Mongoose connection disconnected');
});

// Export the function for external usage
export default dbConnect;
