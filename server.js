import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import pkg from "pg";

dotenv.config();

const { Pool } = pkg;

const app = express();
app.use(cors());
app.use(express.json());

const pool = new Pool({
  connectionString: "postgresql://poultry_db_rybi_user:uJxZqyUnqNVM7VkAm09cwetxosT3MgDu@dpg-d4jufn8gjchc739q81eg-a.frankfurt-postgres.render.com/poultry_db_rybi",
  ssl: { rejectUnauthorized: false }
});

app.get("/", (req, res) => {
  res.send("Poultry Backend Running Successfully 🚀");
});

app.get("/test-db", async (req, res) => {
  try {
    const result = await pool.query("SELECT NOW()");
    res.json({ success: true, time: result.rows[0] });
  } catch (err) {
    res.json({ success: false, error: err });
  }
});

const PORT = process.env.PORT || 10000;
app.listen(PORT, () => {
  console.log("Server running on port " + PORT);
});
