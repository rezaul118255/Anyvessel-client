import {apiSlice}from'../api/apiSlice'
 
export const boatServiceApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    //boatservice register
    boatServiceResigter: builder.mutation({
      query: (data) => ({
        url: "/boatService/createBoatBervice",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["createBoatservice"],
    }),
    getAllBoatService: builder.query({
      query: () => "/boatService",
      providesTags: ["createBoatservice"],
    }),
    getBoatService: builder.query({
      query: (id) => `/boatService/${id}`,
      providesTags: ["createBoatservice"],
    }),
    updateBoatSeriviceById: builder.mutation({
      query: (body) => ({
        url: `/boatService/${id}`,
        method: "PUT",
        body: body?.data,
      }),
      invalidatesTags: ["updateBoatService"],
    }),
    deleteBoatServiceById: builder.mutation({
      query: (id) => ({
        url: `/boatService/${id}`,
        method:'DELETE'
      }),
      invalidatesTags:['deleteBoatService']
    }),
  }),
});

export const { useBoatServiceResigterMutation,useGetAllBoatServiceQuery,useGetBoatServiceQuery,useDeleteBoatServiceByIdMutation,useUpdateBoatSeriviceByIdMutation } = boatServiceApi;