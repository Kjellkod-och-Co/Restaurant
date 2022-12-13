import dotenv from 'dotenv';
dotenv.config();
import express from "express";
import countryRoutes from "./routes/restaurant";
import "./lib/db";

const app = express();
const port = process.env.PORT || 3333;

app.use(express.json());
app.use(express.raw({ type: "application/vnd.custom-type" }));
app.use(express.text({ type: "text/html" }));
app.use(express.static('../site'));

app.get("/api", async (req, res) => {
  res.json({ message: "Please visit /countries to view all the countries" });
});

app.use("/api/restaurants", countryRoutes);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
