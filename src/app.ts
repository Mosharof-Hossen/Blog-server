import express from "express";
import cors from 'cors';
import router from "./router";

const app = express();

// parser
app.use(express.json());
app.use(cors({
    origin: ['http://localhost:2000'],
}));

// application Route
app.use("/api/v1", router)

// test
app.get("/", async (req, res) => {
    res.send("Home page")
})

export default app;
