const fs=require("fs");
const places=require("./data/places.json")
function visitPlaces(){
    fs.mkdir("places",()=>{})
    places.map((city)=>{
fs,mkdir(`cities/${city.cityName}`,()=>{})
city.placesToVisit.map((places)=>{
    fs.writeFile(
        `cities/${city.cityName}/${placesToVisit.place}`,
        `${placesToVisit.desc}`,
        ()=>{}
    )
})
    })
}
visitPlaces