import axios from 'axios';

import { ProductItemResponse } from '../utils/interfaces';

const baseURL = 'http://localhost:3001';
/*const baseURL = 'https://www.alza.cz/Services/RestService.svc/v2/products';*/

export function getProducts(): Promise<ProductItemResponse> {
  return axios
    .get<ProductItemResponse>(`${baseURL}/products`)
    .then((response) => {
      if (response.data) {
        return Promise.resolve(response.data);
      } else {
        console.log(response);
        return Promise.reject(new Error('Wrong response from API.'));
      }
    });
}
