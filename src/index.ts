import express from "express";
import { Port } from "./config";
const app = express();

app.set("view engine", "ejs");

app.set('views', `${__dirname}/views`);

app.use(express.static(`${__dirname}/public`))

app.listen(Port, () => {
    console.log(`Express server started, port: ${Port}`)
})

app.get("/", (req, res) => {
    res.render("index", {
        names: ["Joe", "Ahmed", "Steve", "Mohammed", "Ali", "Liam", "Noah", "Lucas"]
    })
})