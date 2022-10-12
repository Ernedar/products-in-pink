import axios, { AxiosRequestConfig } from 'axios';
import { useState, useEffect } from 'react';

export const useAxios = <T>(
  config: AxiosRequestConfig<any>,
  loadOnStart: boolean = true
): [boolean, T | undefined, string, () => void] => {
  const [loadingData, setLoadingData] = useState<boolean>(true);
  const [responseData, setResponseData] = useState<T>();
  const [errorData, setErrorData] = useState<string>('');

  useEffect(() => {
    if (loadOnStart) sendRequest();
  }, []);

  const request = () => {
    sendRequest();
  };

  const sendRequest = () => {
    setLoadingData(true);

    axios(config)
      .then((response) => {
        setErrorData('');
        setResponseData(response.data);
      })
      .catch((error) => {
        setErrorData(error.message);
      })
      .finally(() => setLoadingData(false));
  };

  return [loadingData, responseData, errorData, request];
};
