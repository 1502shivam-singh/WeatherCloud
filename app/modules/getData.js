import fetch from "node-fetch";

const apiId= 'fbe186b8ecb647f195b195622220408';
let dataSet;

function GetApi() {
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

    return {loc: dataSet.loc, temp: dataSet.temp};
}

export { GetApi };