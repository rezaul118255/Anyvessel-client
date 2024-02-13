import {apiSlice}from'../api/apiSlice'
import { userLoggedIn } from './authSlice';

export const authApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    //resigter
    crewResiger: builder.mutation({
      query: (data) => ({
        url: "/crew/createCrew",
        method:'POST',
        body:data,
    }),
    invalidatesTags:['createCrew']
    }),
    // update
   updateCrewById:builder.mutation({
    query:(body)=>({
      url:`/crew/${body?.id}`,
      method:'PUT',
      body:body?.data,
    }),
    invalidatesTags:['updatecrew']
  

   }),
   //login
    logini:builder.mutation({
      query:(data)=>({
        url:'/auth/login',
        method:'POST',
        body:data
      }),
      invalidatesTags:['login'],
      async onQueryStarted(arg,{queryFulfilled,dispatch}){
        try {
           const result = await queryFulfilled;
          
           localStorage.setItem('auth',JSON({
            token:result.data.token,
           }))
           dispatch(
             userLoggedIn({
               token: result.data.token,
               user: result.data.user,
             })
           );
        } catch (error) {
          console.log(error)
        }
      }
      
    })
  }),

});

export const {useCrewResigerMutation,useLoginiMutation} = authApi;