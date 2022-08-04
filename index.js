import express from "express";
// import { GetApi } from "./modules/getData.js";
import fetch from "node-fetch";
import ejs from "ejs";

const app = express();
app.set('view engine', 'ejs');
app.use(express.static("public"));

const port = process.env.PORT || 3000;

app.get('/weather', (req, res) => {
    // let dataItems = GetApi();

    const apiId= 'fbe186b8ecb647f195b195622220408';
    let dataSet;

        const CityName = "Mumbai";
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
        }).catch((err) => {
            console.log(err)
            dataSet = {
                loc: "Sorry location not found",
                temp:"Sorry location not found",
            }
        })    




    
    console.log({dataSet});
    res.render("index", {
        data : dataSet,
    });
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}!`)
});
