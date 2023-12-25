export const API_URL = process.env.NODE_ENV === 'production' 
  ? '/api' 
  : 'http://localhost:3000/api';

  export const IMGS_URL = (process.env.NODE_ENV === 'production') 
  ? '/uploads/' 
  : 'http://localhost:3000/uploads/';