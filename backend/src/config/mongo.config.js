import mongoose from "mongoose";

const connectDB = async () => {
  // ensure the URI is available and warn if not
  const uri = process.env.MONGO_URI || "";
  console.log("Connecting to MongoDB...", uri);
  if (!uri) {
    console.error("MONGO_URI environment variable is not defined");
    process.exit(1);
  }

  try {
    // modern mongoose no longer requires these options; defaults are sufficient
    const conn = await mongoose.connect(uri);

    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

// export the function itself; do not execute on import
export default connectDB;