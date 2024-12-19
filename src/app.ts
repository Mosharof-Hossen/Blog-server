import express from "express";
import cors from 'cors';
import router from "./router";
import globalErrorHandler from "./app/middlewares/globalErrorHandler";
import notFound from "./app/middlewares/notFound";

const app = express();

// parser
app.use(express.json());
app.use(cors({
    origin: ['http://localhost:2000'],
}));

// application Route
app.use("/api", router)

// test
app.get("/", async (req, res) => {
    res.send("Home page")
})

app.use(globalErrorHandler);
app.use(notFound);

export default app;
