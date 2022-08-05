import express from "express";
// import { GetApi } from "./modules/getData.js";
import fetch from "node-fetch";
import ejs from "ejs";
import path from 'path';
import {fileURLToPath} from 'url';

const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);

const app = express();
app.set('view engine', 'ejs');
console.log(__dirname);
// app.use(express.static(path.join(__dirname, "/public")));
app.use(express.static(path.join(__dirname, "/public")));

const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    // let dataItems = GetApi();

    const apiId= 'fbe186b8ecb647f195b195622220408';
    let dataSet;

    const CityName = "Nangal";
    console.log(CityName)
    const url = `http://api.weatherapi.com/v1/current.json?key=${apiId}&q=${CityName}&aqi=yes`;
    console.log(url);
    
    fetch(url)
    .then((res) => res.json())
    .then((data) => {
        dataSet = {
            loc: data.location.name,
            temp: data.current.temp_c,
        }

        console.log({dataSet});
        res.render("index", {
            data : dataSet,
        });

        res.sendFile(path.join(__dirname+'/views/index.ejs'), {
            data: dataSet,
        });

    }).catch((err) => {
        console.log(err)
        dataSet = {
            loc: "Sorry location not found",
            temp:"Sorry location not found",
        }

        console.log({dataSet});
        // res.render("index", {
        //     data : dataSet,
        // });

        res.sendFile(path.join(__dirname+'/views/index.ejs'), {
            data: dataSet,
        });
    })    


});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}!`)
});
