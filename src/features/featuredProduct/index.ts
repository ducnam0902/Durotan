import { createSlice } from '@reduxjs/toolkit';
import type { RootState } from '@durotan/store';

interface FeaturedState {
  name: string;
  price: number;
  quanity: {
    colorName: string;
    images: string[];
    size: {
      quanityInStock: number;
      sizeName: string;
    }[];
  }[];
}

const initialState: FeaturedState = {
  name: '',
  price: 0,
  quanity: [
    {
      colorName: '',
      images: [''],
      size: [
        {
          quanityInStock: 0,
          sizeName: '',
        },
      ],
    },
  ],
};

export const featuredProductSlice = createSlice({
  name: 'featuredProduct',
  initialState,
  reducers: {},
});

export const selectFeaturedProduct = (state: RootState) => state.featuredProduct;

export default featuredProductSlice.reducer;
