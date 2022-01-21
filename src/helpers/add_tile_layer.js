import L from 'leaflet';

export function addTileLayer(map){
  const MAP_ACCESS_TOKEN = 'pk.eyJ1Ijoidml0amF6MSIsImEiOiJja3lvM3F1NGMwZGwxMnVveWJ6YmplZDJwIn0.0oS9lcY4Dl6dC_-FrGOiuA';
  L.tileLayer(`https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=${MAP_ACCESS_TOKEN}`, {  attribution: 'Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. Coded by <a href="https://github.com/vitjaz" target="_blank">Vitaly Alexeev</a>.',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1
    }).addTo(map);
}