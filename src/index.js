import { validateIp, addTileLayer, getAdress, addOffset } from "./helpers";
import 'leaflet/dist/leaflet.css';
import L, { marker } from "leaflet";
import  icon  from "../images/icon-location.svg";
import 'babel-polyfill'

(function(){


  // Выбираем элементы
  const ipInput = document.querySelector(".search-bar__input");
  const seacrhBtn = document.querySelector(".search-bar__btn");

  const ip = document.querySelector("#ip");
  const location = document.querySelector("#location");
  const timezoneInfo = document.querySelector("#timezone");
  const isp = document.querySelector("#isp");

  const mapArea = document.querySelector(".map");
  const map = L.map(mapArea, {
    center: [51.505, -0.09],
    zoom: 13
  });
  const markerIcon = L.icon({
    iconUrl: icon,
    iconSize: [30, 40]
  })

  addTileLayer(map);

  L.marker([51.505, -0.09], {icon: markerIcon}).addTo(map);


  // Слушатели
  ipInput.addEventListener("keydown", handleKey);
  seacrhBtn.addEventListener("click", getData);

  // функции
  function getData(){
    if(validateIp(ipInput.value)){
      getAdress(ipInput.value)
      .then(data => renderInfo(data))
      .catch(err => alert(err));
      ipInput.value = "";
    } else {
      alert("Неправильный IP");
    }
  }
  
  function handleKey(e){
    if(e.key === "Enter"){
      getData();
    }
  }


  function renderInfo(data){

    const {lat, lng, region, country, timezone} = data.location;
    ip.innerText = data.ip;
    location.innerText = `${region}, ${country}`;
    timezoneInfo.innerText = timezone;
    isp.innerText = data.isp;
    map.setView([lat, lng]);
    L.marker([lat, lng], {icon: markerIcon}).addTo(map);

    if(matchMedia("(max-width: 600px)").matches) {
      addOffset(map);
    }
  }

  document.addEventListener("DOMContentLoaded", () => {
    getAdress('102.22.22.1')
      .then(data => renderInfo(data))
      .catch(err => alert(err))
  })

})()