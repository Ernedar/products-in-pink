import { useState, useEffect } from 'react';

import { ProductItemResponse } from '../utils/interfaces';

import { getProducts } from '../access/access';

export function useGetProduct() {
  const [loading, setLoading] = useState<boolean>(false);
  const [data, setData] = useState<ProductItemResponse>();
  const [error, setError] = useState<Error>();

  useEffect(() => {
    let canSetState = true;
    setLoading(true);
    setError(undefined);
    getProducts()
      .then((response) => {
        if (canSetState) {
          setLoading(false);
          setData(response);
          console.log(response);
        }
      })
      .catch((error) => {
        if (canSetState) {
          setLoading(false);
          setError(error);
          console.log(error);
        }
      });
    return () => {
      canSetState = false;
    };
  }, []);

  return { loading, data, error };
}

