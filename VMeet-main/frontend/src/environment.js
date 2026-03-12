let IS_PROD = true;

const server = IS_PROD ? 
  "https://vmeet-hmnc.onrender.com" :
   "http://localhost:8000"
   


export default server;