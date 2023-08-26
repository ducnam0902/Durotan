import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export interface FeaturedState {
  name: string;
  price: number;
  category: string;
  colorGroup: {
    colorName: string;
    images: string[];
    sizeGroup: {
      quanity: number;
      sizeName: string;
    }[];
  }[];
}
export const durotanApi = createApi({
  reducerPath: 'durotanApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://p01--durotanapiv1--vmq77m4j7ft5.code.run/api/v1/' }),
  endpoints: builder => ({
    getFeaturedProduct: builder.query<FeaturedState[], string>({
      query: () => `products/featured`,
    }),
  }),
});

export const { useGetFeaturedProductQuery } = durotanApi;
