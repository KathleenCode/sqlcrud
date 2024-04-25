import express from "express";
import dotenv from "dotenv";
import pool from "./database.js";
import userRouter from "./routes/userRoutes.js";

dotenv.config();

const PORT = process.env.PORT;

const app = express();
app.use(express.json());
app.use(userRouter);

// app.post("/api/users", async(req, res) => {
//     const {name, gender, address, email} = req.body;
//     const response = await pool.query(`INSERT INTO users (name, gender, address, email) 
//     VALUES (${name}, ${gender} ${email}, ${address})`);

//     res.status(201).send(response);
// })

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));