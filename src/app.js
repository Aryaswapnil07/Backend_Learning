import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

/* =======================
   CORS
======================= */
app.use(
  cors({
    origin: process.env.CORS_ORIGIN || "http://localhost:5173",
    credentials: true,
  })
);

/* =======================
   MIDDLEWARES
======================= */
app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" })); // ✅ limit (not limits)
app.use(express.static("public"));
app.use(cookieParser());

/* =======================
   ROUTES
======================= */
import userRouter from "./routes/user.routes.js";

app.use("/api/v1/users", userRouter);

/* =======================
   EXPORT
======================= */
export default app;
