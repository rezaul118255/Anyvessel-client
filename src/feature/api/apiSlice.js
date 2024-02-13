import {createApi,fetchBaseQuery}from'@reduxjs/toolkit/query/react'

export const apiSlice = createApi({
  reducerPath: "anyvessel",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000/api/v1",
    prepareHeaders: async (headers, { getState, endpoint }) => {
      const token = getState()?.auth?.token;
      if (token) {
        console.log(token);
        headers.set("authorization", `${token}`);
      }
      return headers;
    },
  }),
  tagTypes: [
    "createCrew", 
    "u14atecrew", 
    "login",
    "createBoatservice"
  ],
  endpoints: (builder) => ({}),
});