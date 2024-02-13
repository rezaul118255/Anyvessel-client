import { apiSlice } from "../api/apiSlice";

export const boatApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    //boatservice register
    boatResigter: builder.mutation({
      query: (data) => ({
        url: "/boat/createBoat",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["createBoat"],
    }),
    getAllBoat: builder.query({
      query: () => "/boat",
      providesTags: ["createBoat"],
    }),
    getBoat: builder.query({
      query: (id) => `/boat/${id}`,
      providesTags: ["createBoat"],
    }),
    updateBoatById: builder.mutation({
      query: (body) => ({
        url: `/boat/${id}`,
        method: "PUT",
        body: body?.data,
      }),
      invalidatesTags: ["updateBoat"],
    }),
    deleteBoatById: builder.mutation({
      query: (id) => ({
        url: `/boat/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["deleteBoat"],
    }),
  }),
});

export const {
useBoatResigterMutation,
useGetAllBoatQuery,
useGetBoatQuery,
useUpdateBoatByIdMutation,useDeleteBoatByIdMutation
} = boatApi;
