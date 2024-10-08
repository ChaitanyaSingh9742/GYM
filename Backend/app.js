import express from "express";
import { config } from "dotenv";
import cors from "cors";
import { sendEmail } from "./utils/sendEmail.js";

config({ path: "./config.env" });

const app = express();
const router = express.Router();

app.use(
  cors({
    origin: [process.env.FRONTEND_URL],
    methods: ["POST"],
    credentials: true,
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

router.post("/send/mail", async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({
      success: false,
      message: "Please provide all details.",
    });
  }

  try {

    await sendEmail({
      email: "chaitanya.singh9742@gmail.com",
      subject: "FitKingdom CONTACT - Copy",
      message,
      userEmail: email,
    });

    res.status(200).json({
      success: true,
      message: "Message logged successfully. We will get back to you shortly.",
    });
  } catch (error) {
    console.error("Error logging email:", error);
    res.status(500).json({
      success: false,
      message: "Failed to log message. Please try again later.",
    });
  }
});

app.use(router);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
