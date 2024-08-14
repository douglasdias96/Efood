import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Menu } from "../models/interface";

const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://fake-api-tau.vercel.app/api/efood'
  }),
  endpoints: (builder) => ({
    getRestaurantes: builder.query<Menu, void>({
      query: () => 'restaurantes'
    }),
    getCardapio: builder.query<Menu, string> ({
      query: (id) => `restaurantes/${id}`
    })
  })
})

export const { useGetRestaurantesQuery,useGetCardapioQuery } = api

export default api