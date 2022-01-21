export async function getAdress(ip = '8.8.8.8'){
  const API_KEY = 'at_9GsQal86sds9AIiSQdTX4xGUsT2fc';
  const responce =  await fetch(`https://geo.ipify.org/api/v2/country,city?apiKey=${API_KEY}&ipAddress=${ip}`);
  return await responce.json();
}