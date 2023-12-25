export const API_URL = process.env.NODE_ENV === 'production' 
  ? '/api' 
  : 'http://localhost:3030/api';

  export const IMGS_URL = (process.env.NODE_ENV === 'production') 
  ? '/images/' 
  : 'http://localhost:3030/images/';