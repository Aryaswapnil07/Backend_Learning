import dotenv from "dotenv";
import connectDB from "./db/index.js";
import app from "./app.js"; // ✅ IMPORT app

dotenv.config({
  path: "./env"
});

connectDB()
  .then(() => {
    app.listen(process.env.PORT || 8000, () => {
      console.log(`⚙️ Server running at port : ${process.env.PORT || 8000}`);
    });
  })
  .catch((err) => {
    console.error("❌ MONGO DB CONNECTION FAILED", err);
  });
