import { Spot } from '@binance/connector-typescript';


const API_KEY = '2dlV5E80bcOs2prjBjscIbA1nMsbqDX8TJW4tdAOgvmS2Edv9h1V17kM4pauAW58';
const API_SECRET = '4FHPMtIJUHK3TwZtaiFMZwU3C1cEKBcE4uWQIiF24ZycRNByES98gGWcBLedejWt';
const BASE_URL = 'https://api.binance.com';

const client = new Spot(API_KEY, API_SECRET, { baseURL: BASE_URL });
client.depositAddress("BTC").then((res) => {
    console.log(res);
}).catch(err => { console.log(err) });