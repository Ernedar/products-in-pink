import axios from 'axios';

import { ProductItemResponse } from '../utils/interfaces';

/* const baseURL = 'http://localhost:3000/data' */
const baseURL = 'https://www.alza.cz/Services/RestService.svc/v2/products';

const apiClient = axios.create({
  baseURL: baseURL,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
  data: {
    filterParameters: {
      id: 18855843,
      isInStockOnly: false,
      newsOnly: false,
      wearType: 0,
      orderBy: 0,
      page: 1,
      params: [
        {
          tId: 0,
          v: [],
        },
      ],
      producers: [],
      sendPrices: true,
      type: 'action',
      typeId: '',
      branchId: '',
    },
  },
});

export function getProducts(): Promise<ProductItemResponse> {
  return apiClient.post<ProductItemResponse>('/').then((response) => {
    if (response.data) {
      return Promise.resolve(response.data);
    } else {
      console.log(response);
      return Promise.reject(new Error('Wrong response from API.'));
    }
  });
}
