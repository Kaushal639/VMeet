let IS_PROD = true;

const server = IS_PROD ? 
  "https://vmeet-3a1l.onrender.com"  :
   "http://localhost:8000"
   


export default server;