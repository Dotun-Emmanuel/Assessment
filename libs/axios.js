import axios from 'axios';
export const _axios= axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_BASE_URL}`,
});

// const api = axios.create({
//   baseURL: 'your_api_base_url',
// });

// export const createUser = async (userData) => {
//   try {
//     const response = await api.post('/create-user', userData);
//     return response.data;
//   } catch (error) {
//     throw error;
//   }
// };

// const _axios = axios.create({
//   baseURL: 'https://snack-house-app-production.up.railway.app',
// });

// export const request= ({...options})=>{
//   client.defaults.headers.common.Authorization=`Bearer token`
//   const onSuccess = response=> response
//   const onError = error=>{return error}

//   return client(options).then(onSuccess).catch(onError)
// }
