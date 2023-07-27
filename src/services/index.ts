import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export interface FeaturedState {
  name: string;
  price: number;
  category: string;
  quanity: {
    colorName: string;
    images: string[];
    size: {
      quanityInStock: number;
      sizeName: string;
    }[];
  }[];
}
export const durotanApi = createApi({
  reducerPath: 'durotanApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://durotan-service.onrender.com/api/v1/' }),
  endpoints: builder => ({
    getFeaturedProduct: builder.query<FeaturedState[], string>({
      query: () => `products/featured`,
    }),
  }),
});

export const { useGetFeaturedProductQuery } = durotanApi;
