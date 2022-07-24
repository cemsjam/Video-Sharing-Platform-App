import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoutes from "./routes/userRoutes.js";
import videoRoutes from "./routes/videoRoutes.js";
import commentRoutes from "./routes/commentRoutes.js";
import authRoutes from "./routes/authRoutes.js";
dotenv.config();

const app = express();

const connectDB = () => {
  mongoose
    .connect(process.env.MONGO_URI)
    .then(() => {
      console.log("Connected to DB");
    })
    .catch((err) => {
      throw err;
    });
};
//middleware
app.use(express.json());
//routes
app.use("/api/auth", authRoutes);

app.use("/api/users", userRoutes);
app.use("/api/videos", videoRoutes);
app.use("/api/comments", commentRoutes);

app.listen(process.env.PORT, () => {
  connectDB();
  console.log(`server is listening on ${process.env.PORT}`);
});
