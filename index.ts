import "./config"

import express from "express";
import { join, resolve } from "path";

import routes from "./routes"

const app: express.Application = express()

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.get("/", (req: express.Request, res: express.Response) => {
    res.sendFile(join(resolve(), "/views/welcome.html"))
})

app.use("/api", routes)

app.listen(process.env.PORT, () =>
    console.log(`[${new Date().toUTCString()}] Development Server running on  http://localhost:${process.env.PORT} started`)
);