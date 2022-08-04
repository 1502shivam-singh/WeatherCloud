import express from "express";
import { GetApi } from "./modules/getData.js";
import ejs from "ejs";

const app = express();
app.set('view engine', 'ejs');

const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    let dataItems = GetApi();
    console.log({dataItems});
    res.render("index", {
        data : dataItems,
    });
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}!`)
});
